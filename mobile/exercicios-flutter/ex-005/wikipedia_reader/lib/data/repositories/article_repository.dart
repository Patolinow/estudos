import '../models/summary.dart';
import '../services/wikipedia_service.dart';

/// Provides article data to view models without exposing the API details.
class ArticleRepository {
  ArticleRepository(this._wikipediaService);

  final WikipediaService _wikipediaService;

  Future<Summary> getRandomArticleSummary() {
    return _wikipediaService.getRandomArticleSummary();
  }
}
