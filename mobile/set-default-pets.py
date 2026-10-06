#!/usr/bin/env python3
"""Install a reversible default-pet-list patch for VS Code Pets 1.36.0.

Run again after extension updates (unsupported versions fail safely).
Existing project pet states are preserved. No VS Code databases are edited.
"""
import argparse
import json
from pathlib import Path
import re
import sys

BEGIN = "\n/* custom-default-pets:start */\n"
END = "/* custom-default-pets:end */\n"
DEFAULT_LIST = Path(__file__).resolve().parent / "exercicios-flutter/ex-005/wikipedia_reader/vscode-pets.json"


def make_patch(pets):
    return BEGIN + """(() => {
    const defaults = PETS_JSON;
    // ForestThemeInfo.floor values from VS Code Pets 1.36.0.
    const forestFloor = { nano: 23, small: 30, medium: 40, large: 65 };
    const original = self.petApp.petPanelApp;
    self.petApp.petPanelApp = function (...args) {
        const api = args[8] || acquireVsCodeApi();
        if (!api.getState()) {
            args[4] = defaults[0].size;
            api.setState({
                petCounter: 1,
                petStates: defaults.map((pet, index) => ({
                    petType: pet.type,
                    petColor: pet.color,
                    petName: pet.name,
                    elLeft: String(20 + index * 70),
                    elBottom: String(forestFloor[pet.size])
                }))
            });
        }
        args[8] = api;
        return original.apply(this, args);
    };
})();
""".replace("PETS_JSON", json.dumps(pets, ensure_ascii=True)) + END


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("pet_list", nargs="?", type=Path, default=DEFAULT_LIST)
    parser.add_argument("--extension-dir", type=Path, help="Installed tonybaloney.vscode-pets directory")
    parser.add_argument("--dry-run", action="store_true")
    parser.add_argument("--restore", action="store_true", help="Remove only this script's patch")
    args = parser.parse_args()
    extension = args.extension_dir
    if extension is None:
        candidates = list((Path.home() / ".vscode/extensions").glob("tonybaloney.vscode-pets-*/package.json"))
        if len(candidates) != 1:
            raise ValueError("Expected one installed VS Code Pets version; specify --extension-dir.")
        extension = candidates[0].parent
    metadata = json.loads((extension / "package.json").read_text())
    if metadata.get("publisher") != "tonybaloney" or metadata.get("name") != "vscode-pets":
        raise ValueError("This directory is not the official VS Code Pets extension.")
    target = extension / "media/main-bundle.js"
    content = target.read_text()
    base = content
    if BEGIN in content:
        start = content.index(BEGIN)
        if content.count(BEGIN) != 1 or content[start:].count(END) != 1 or not content.endswith(END):
            raise ValueError("Unexpected patch layout; refusing to change the bundle.")
        base = content[:start]
    if args.restore:
        updated = base
    else:
        if metadata.get("version") != "1.36.0":
            raise ValueError("Only version 1.36.0 has been verified. Refusing to patch a different version.")
        pets = json.loads(args.pet_list.read_text())
        if not isinstance(pets, list) or not pets:
            raise ValueError("Pet list must be a nonempty JSON array.")
        for pet in pets:
            if not isinstance(pet, dict) or any(not isinstance(pet.get(k), str) or not pet[k] for k in ("type", "color", "size", "name")):
                raise ValueError("Every pet needs nonempty type, color, size, and name strings.")
            if not re.fullmatch(r"[a-z-]+", pet["type"]) or not re.fullmatch(r"[a-z_ -]+", pet["color"]):
                raise ValueError("Invalid pet type or color.")
            if pet["size"] not in ("nano", "small", "medium", "large"):
                raise ValueError("Invalid pet size.")
            sprite = extension / "media" / pet["type"] / (pet["color"].replace(" ", "_") + "_idle_8fps.gif")
            if not sprite.is_file():
                raise ValueError(f"Cannot find installed sprite: {sprite}")
        if len({p["size"] for p in pets}) != 1:
            raise ValueError("VS Code Pets uses one size per panel; choose the same size for all pets.")
        if "self.petApp =" not in base or "function petPanelApp(" not in base:
            raise ValueError("Unrecognized bundle layout.")
        updated = base + make_patch(pets)
        print("Default pets: " + ", ".join(p["name"] for p in pets))
    if updated == content:
        print("Already up to date.")
        return
    if args.dry_run:
        print(f"Validated; would {'restore' if args.restore else 'patch'} {target}")
        return
    backup = target.with_name(target.name + ".before-default-pets")
    if not backup.exists():
        with backup.open("x") as stream:
            stream.write(base)
    temporary = target.with_name(target.name + ".default-pets-tmp")
    with temporary.open("x") as stream:
        stream.write(updated)
    temporary.chmod(target.stat().st_mode & 0o777)
    temporary.replace(target)
    print(f"{'Restored' if args.restore else 'Patched'} {target}")
    print("Run Developer: Reload Window in VS Code. Existing saved sessions keep their pets.")


if __name__ == "__main__":
    try:
        main()
    except (OSError, ValueError) as error:
        sys.exit(f"Error: {error}")
