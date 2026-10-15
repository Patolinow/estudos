import 'package:flutter/material.dart';

import 'data/repositories/article_repository.dart';
import 'ui/article/view_models/article_view_model.dart';
import 'ui/article/widgets/article_view.dart';

class MainApp extends StatefulWidget {
  const MainApp({super.key, required this.articleRepository});

  final ArticleRepository articleRepository;

  @override
  State<MainApp> createState() => _MainAppState();
}

class _MainAppState extends State<MainApp> {
  late final ArticleViewModel _articleViewModel;

  @override
  void initState() {
    super.initState();
    _articleViewModel = ArticleViewModel(widget.articleRepository);
    _articleViewModel.fetchArticle();
  }

  @override
  void dispose() {
    _articleViewModel.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(home: ArticleView(viewModel: _articleViewModel));
  }
}
