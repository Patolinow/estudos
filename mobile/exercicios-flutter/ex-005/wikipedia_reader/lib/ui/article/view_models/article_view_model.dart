import 'package:flutter/foundation.dart' show ChangeNotifier;

import '../../../data/models/summary.dart';
import '../../../data/repositories/article_repository.dart';

/// Owns the article screen's state and the actions that change it.
class ArticleViewModel extends ChangeNotifier {
  ArticleViewModel(this._articleRepository);

  final ArticleRepository _articleRepository;

  Summary? _summary;
  Summary? get summary => _summary;

  Exception? _error;
  Exception? get error => _error;

  bool _isLoading = false;
  bool get isLoading => _isLoading;

  bool _isDisposed = false;

  Future<void> fetchArticle() async {
    if (_isLoading || _isDisposed) return;

    _isLoading = true;
    notifyListeners();

    try {
      _summary = await _articleRepository.getRandomArticleSummary();
      _error = null;
    } on Exception catch (error) {
      _error = error;
      _summary = null;
    } finally {
      _isLoading = false;
      // A request can finish after the screen has been removed.
      if (!_isDisposed) notifyListeners();
    }
  }

  @override
  void dispose() {
    _isDisposed = true;
    super.dispose();
  }
}
