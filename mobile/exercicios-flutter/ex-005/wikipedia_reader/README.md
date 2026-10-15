# Wikipedia reader

A Flutter tutorial that displays a random Wikipedia article. The project uses
MVVM with Flutter's built-in `ChangeNotifier` and `ListenableBuilder`.

## Project structure

```text
lib/
├── main.dart                         # Entry point; connects dependencies
├── app.dart                          # MaterialApp and view-model lifecycle
├── data/                             # Model layer
│   ├── models/
│   │   ├── summary.dart               # Article data and JSON parsing
│   │   ├── titles_set.dart            # Article titles
│   │   └── image_file.dart            # Image metadata
│   ├── repositories/
│   │   └── article_repository.dart    # Provides articles to view models
│   └── services/
│       └── wikipedia_service.dart     # Wikipedia HTTP requests
└── ui/
    └── article/                      # Everything specific to this screen
        ├── view_models/
        │   └── article_view_model.dart
        └── widgets/
            ├── article_view.dart     # Loading, error, and content states
            ├── article_page.dart     # Article content and next button
            └── article_widget.dart   # Title, image, and extract
```

## How MVVM works here

The **View** (`ArticleView` and its child widgets) displays state and forwards
button presses to the view model. It doesn't make HTTP requests.

The **ViewModel** (`ArticleViewModel`) owns `summary`, `error`, and `isLoading`.
Its `fetchArticle()` method requests data and calls `notifyListeners()` when
state changes. The view's `ListenableBuilder` listens and rebuilds. State is
exposed through getters so widgets can read it while the view model controls
changes.

The **Model layer** includes the data objects, repository, and service.
`Summary`, `TitlesSet`, and `ImageFile` represent data. `ArticleRepository` is
the entry point for retrieving articles. `WikipediaService` handles HTTP and
decodes the response into a `Summary`.

The original `ArticleModel` combined data access and API communication. Those
responsibilities now live in `ArticleRepository` and `WikipediaService`.
The repository currently delegates to the service; if you later add caching or
combine remote and local data, that coordination belongs in the repository.

When someone taps **Next random article**, the call flows through:

```text
ArticleView → ArticleViewModel → ArticleRepository → WikipediaService → API
```

The service returns a `Summary` through the repository. The view model updates
its state and notifies the view, which redraws the screen.

## Creating and owning dependencies

`main.dart` creates the service and passes it into the repository, then passes
the repository into `MainApp`. This is constructor dependency injection:
objects receive their dependencies through constructor arguments.

`MainApp` creates the article view model once in `initState()`, starts the first
request, and disposes the view model in `dispose()`. `ArticleView` receives
that instance. Keeping the initial request in one place prevents duplicate
startup requests. The view model also ignores overlapping fetches and avoids
notifying listeners if a request finishes after disposal.

## Adding another feature

For a search screen, add `ui/search/view_models/search_view_model.dart` and
`ui/search/widgets/search_view.dart`, plus any small widgets used by that
screen. Reuse the article repository and Wikipedia service for article data.
Put widgets shared by multiple screens in `ui/core/widgets/` when needed.

This is one practical structure, based on the
[Flutter architecture guide](https://docs.flutter.dev/app-architecture/guide).
Keep the structure proportional to the app: add shared folders and further
abstractions when there is code that needs them.

## Run and check

From this directory:

```sh
flutter pub get
flutter run
flutter analyze
flutter test
```

The widget tests use a fake Wikipedia service, so they don't require a network
connection.
