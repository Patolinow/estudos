import 'dart:convert';
import 'dart:io';

import 'package:http/http.dart' as http;

import '../models/summary.dart';

/// Handles HTTP requests and JSON decoding for the Wikipedia API.
class WikipediaService {
  Future<Summary> getRandomArticleSummary() async {
    final uri = Uri.https(
      'en.wikipedia.org',
      '/api/rest_v1/page/random/summary',
    );
    final response = await http.get(uri);

    if (response.statusCode != 200) {
      throw const HttpException('Failed to update resource');
    }

    return Summary.fromJson(jsonDecode(response.body) as Map<String, Object?>);
  }
}
