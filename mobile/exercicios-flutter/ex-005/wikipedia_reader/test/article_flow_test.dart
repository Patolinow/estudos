import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:wikipedia_reader/app.dart';
import 'package:wikipedia_reader/data/models/summary.dart';
import 'package:wikipedia_reader/data/models/titles_set.dart';
import 'package:wikipedia_reader/data/repositories/article_repository.dart';
import 'package:wikipedia_reader/data/services/wikipedia_service.dart';

void main() {
  late FakeWikipediaService service;

  setUp(() {
    service = FakeWikipediaService();
  });

  Widget createApp() {
    return MainApp(articleRepository: ArticleRepository(service));
  }

  testWidgets('loads one initial article and fetches the next on tap', (
    tester,
  ) async {
    await tester.pumpWidget(createApp());

    expect(service.requests, hasLength(1));
    expect(find.byType(CircularProgressIndicator), findsOneWidget);

    service.requests.single.complete(createSummary('First article'));
    await tester.pumpAndSettle();

    expect(find.text('First article'), findsOneWidget);
    expect(find.byType(CircularProgressIndicator), findsNothing);

    await tester.tap(find.text('Next random article'));
    await tester.pump();

    expect(service.requests, hasLength(2));
    expect(find.byType(CircularProgressIndicator), findsOneWidget);

    service.requests.last.complete(createSummary('Second article'));
    await tester.pumpAndSettle();

    expect(find.text('Second article'), findsOneWidget);
    expect(find.text('First article'), findsNothing);
  });

  testWidgets('shows a data-loading error and stops loading', (tester) async {
    await tester.pumpWidget(createApp());

    service.requests.single.completeError(
      const FormatException('Invalid article data'),
    );
    await tester.pumpAndSettle();

    expect(
      find.text('Error: FormatException: Invalid article data'),
      findsOneWidget,
    );
    expect(find.byType(CircularProgressIndicator), findsNothing);
  });

  testWidgets('can dispose the app while an article request is pending', (
    tester,
  ) async {
    await tester.pumpWidget(createApp());
    await tester.pumpWidget(const SizedBox.shrink());

    service.requests.single.complete(createSummary('Late article'));
    await tester.pump();

    expect(tester.takeException(), isNull);
  });
}

class FakeWikipediaService implements WikipediaService {
  final requests = <Completer<Summary>>[];

  @override
  Future<Summary> getRandomArticleSummary() {
    final request = Completer<Summary>();
    requests.add(request);
    return request.future;
  }
}

Summary createSummary(String title) {
  return Summary(
    titles: TitlesSet(canonical: title, normalized: title, display: title),
    pageId: 1,
    extract: 'An example article.',
    extractHtml: '<p>An example article.</p>',
    lang: 'en',
    dir: 'ltr',
    url: 'https://en.wikipedia.org/wiki/Example',
  );
}
