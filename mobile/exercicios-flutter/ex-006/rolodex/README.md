# Rolodex

An in-progress Flutter tutorial project, currently at
[Advanced UI features](https://docs.flutter.dev/learn/pathway/tutorial/advanced-ui).
The current screen intentionally still displays **Hello Rolodex!**.

## Current structure

```text
lib/
├── main.dart                    # Entry point, CupertinoApp, shared state instance
└── data/
    ├── models/
    │   ├── contact.dart         # Contact data type
    │   └── contact_group.dart   # Group data type, sorting, alphabetic grouping
    ├── seed/
    │   ├── contacts.dart        # Sample contacts and allContacts
    │   └── contact_groups.dart  # Sample groups and generateSeedData()
    └── contact_groups_model.dart # Shared group state using ValueNotifier
```

## Why these files belong here

- **Models** describe the data the app works with. `Contact` and `ContactGroup`
  belong together. Sorting and grouping contacts can live with the group model;
  they don't require Flutter widgets or a screen view model.
- **Seed data** contains the sample records used to build the tutorial UI.
  These files contain hard-coded values. A repository would provide an API for
  retrieving or managing data, so `seed` describes these files more accurately.
- **ContactGroupsModel** holds shared app state. Its `ValueNotifier` allows UI
  widgets to listen for changes. A notifier alone doesn't make a class a screen
  view model; this class currently belongs to the tutorial's shared data layer.

The model files depend only on Dart and other model files. Seed data depends on
the models. `ContactGroupsModel` initializes its state from the seed data.
Widgets can consume that state without the model classes importing UI code.

Using `model` or `models` as a folder name is a naming choice, not a Dart rule.
This project uses the plural `models` consistently.

## Following the tutorial from here

The tutorial keeps more code together in `data/contact.dart` and
`data/contact_group.dart`. This project separates that same code by its role.
When copying later examples, use these imports as needed:

```dart
import 'package:rolodex/data/models/contact.dart';
import 'package:rolodex/data/models/contact_group.dart';
import 'package:rolodex/data/contact_groups_model.dart';
```

Seed values such as `allContacts` live in `data/seed/contacts.dart`. The initial
groups and `generateSeedData()` live in `data/seed/contact_groups.dart`.
The global `contactGroupsModel` in `main.dart` follows the current tutorial.

Add screen widgets under `lib/screens/` and theme configuration under
`lib/theme/` as the following lessons introduce them. There is no need to
introduce repositories, services, or screen view models before their
responsibilities appear in the app.
