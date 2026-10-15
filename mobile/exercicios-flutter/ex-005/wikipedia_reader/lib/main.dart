import 'package:flutter/material.dart';

import 'app.dart';
import 'data/repositories/article_repository.dart';
import 'data/services/wikipedia_service.dart';

void main() {
  final wikipediaService = WikipediaService();
  final articleRepository = ArticleRepository(wikipediaService);

  runApp(MainApp(articleRepository: articleRepository));
}
