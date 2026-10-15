import 'package:flutter/material.dart';

import '../view_models/article_view_model.dart';
import 'article_page.dart';

/// Renders the screen from view-model state and forwards user actions.
class ArticleView extends StatelessWidget {
  const ArticleView({super.key, required this.viewModel});

  final ArticleViewModel viewModel;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Wikipedia Flutter')),
      body: Center(
        child: ListenableBuilder(
          listenable: viewModel,
          builder: (context, _) {
            return switch ((
              viewModel.isLoading,
              viewModel.summary,
              viewModel.error,
            )) {
              (true, _, _) => const CircularProgressIndicator(),
              (_, _, final Exception e) => Text('Error: $e'),
              (_, final summary?, _) => ArticlePage(
                summary: summary,
                nextArticleCallback: viewModel.fetchArticle,
              ),
              _ => const Text('Something went wrong!'),
            };
          },
        ),
      ),
    );
  }
}
