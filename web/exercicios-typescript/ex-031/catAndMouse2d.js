"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
function catMouse(map, moves) {
    const cat = "C";
    const mouse = "m";
    const allMapItems = map.split("");
    if (!allMapItems.includes(cat) || !allMapItems.includes(mouse)) {
        return "boring without two animals";
    }
    const mapArray = map.split("\n");
    const mapMatrix = mapArray.map(mapRow => mapRow.split(""));
    const coordinates = findCatAndMouse(mapMatrix, cat, mouse);
    const totalMovesToMouse = searchRouteToMouse(coordinates);
    if (totalMovesToMouse <= moves) {
        console.log(`caught with ${totalMovesToMouse} moves! :D`);
        return "Caught!";
    }
    else {
        console.log(`escaped with ${totalMovesToMouse} moves :(`);
        return "Escaped!";
    }
    function findCatAndMouse(mapMatrix, cat, mouse) {
        const coordinates = { cat: [], mouse: [] };
        mapMatrix.forEach((mapRow, mapRowIndex) => {
            mapRow.forEach((mapItem, mapCollumnIndex) => {
                if (mapItem === cat) {
                    coordinates.cat = [mapRowIndex, mapCollumnIndex];
                }
                if (mapItem === mouse) {
                    coordinates.mouse = [mapRowIndex, mapCollumnIndex];
                }
            });
        });
        return coordinates;
    }
    function searchRouteToMouse(coordinates) {
        const reachedY = coordinates.cat[0] === coordinates.mouse[0];
        const reachedX = coordinates.cat[1] === coordinates.mouse[1];
        const moveDown = coordinates.cat[0] < coordinates.mouse[0] && !reachedY;
        const moveUp = coordinates.cat[0] > coordinates.mouse[0] && !reachedY;
        const moveLeft = coordinates.cat[1] > coordinates.mouse[1] && !reachedX;
        const moveRight = coordinates.cat[1] < coordinates.mouse[1] && !reachedX;
        if (moveDown) {
            coordinates.cat[0]++;
            return 1 + searchRouteToMouse(coordinates);
        }
        if (moveUp) {
            coordinates.cat[0]--;
            return 1 + searchRouteToMouse(coordinates);
        }
        if (moveLeft) {
            coordinates.cat[1]--;
            return 1 + searchRouteToMouse(coordinates);
        }
        if (moveRight) {
            coordinates.cat[1]++;
            return 1 + searchRouteToMouse(coordinates);
        }
        return 0;
    }
}
describe("basic test to verify main states", () => {
    test("expect to caught", () => {
        const map = `..C......
.........
....m....`;
        (0, globals_1.expect)(catMouse(map, 5)).toBe("Caught!");
    });
    test("expect to escape", () => {
        const map = `.C.......
.........
......m..`;
        (0, globals_1.expect)(catMouse(map, 5)).toBe("Escaped!");
    });
    test("if there's no cat or mouse", () => {
        const map = `..C......
.........
.........`;
        (0, globals_1.expect)(catMouse(map, 5)).toBe("boring without two animals");
    });
});
//# sourceMappingURL=catAndMouse2d.js.map