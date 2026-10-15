import 'image_file.dart';
import 'titles_set.dart';

/// Representation of the JSON data returned by the Wikipedia API.
class Summary {
  /// Returns a new [Summary] instance.
  Summary({
    required this.titles,
    required this.pageId,
    required this.extract,
    required this.extractHtml,
    required this.lang,
    required this.dir,
    required this.url,
    this.description,
    this.thumbnail,
    this.originalImage,
  });

  /// The title information of this article.
  final TitlesSet titles;

  /// The page ID of this article.
  final int pageId;

  /// The first few sentences of the article in plain text.
  final String extract;

  /// The first few sentences of the article in HTML format.
  final String extractHtml;

  /// The language code of the article's content, such as "en" for English.
  final String lang;

  /// The text directionality of the article's content, such as "ltr" or "rtl".
  final String dir;

  /// The URL of the page.
  final String url;

  /// A description of the article, if available.
  final String? description;

  /// A thumbnail-sized version of the article's primary image, if available.
  final ImageFile? thumbnail;

  /// The original full-sized article's primary image, if available.
  final ImageFile? originalImage;

  /// Whether this article has an image.
  bool get hasImage => originalImage != null && thumbnail != null;

  /// Returns a new [Summary] instance and imports its values from a JSON map
  static Summary fromJson(Map<String, Object?> json) {
    return switch (json) {
      {
        'titles': final Map<String, Object?> titles,
        'pageid': final int pageId,
        'extract': final String extract,
        'extract_html': final String extractHtml,
        'thumbnail': final Map<String, Object?> thumbnail,
        'originalimage': final Map<String, Object?> originalImage,
        'lang': final String lang,
        'dir': final String dir,
        'description': final String description,
        'content_urls': {
          'desktop': {'page': final String url},
          'mobile': {'page': String _},
        },
      } =>
        Summary(
          titles: TitlesSet.fromJson(titles),
          pageId: pageId,
          extract: extract,
          extractHtml: extractHtml,
          thumbnail: ImageFile.fromJson(thumbnail),
          originalImage: ImageFile.fromJson(originalImage),
          lang: lang,
          dir: dir,
          description: description,
          url: url,
        ),
      {
        'titles': final Map<String, Object?> titles,
        'pageid': final int pageId,
        'extract': final String extract,
        'extract_html': final String extractHtml,
        'lang': final String lang,
        'dir': final String dir,
        'description': final String description,
        'content_urls': {
          'desktop': {'page': final String url},
          'mobile': {'page': String _},
        },
      } =>
        Summary(
          titles: TitlesSet.fromJson(titles),
          pageId: pageId,
          extract: extract,
          extractHtml: extractHtml,
          lang: lang,
          dir: dir,
          description: description,
          url: url,
        ),
      {
        'titles': final Map<String, Object?> titles,
        'pageid': final int pageId,
        'extract': final String extract,
        'extract_html': final String extractHtml,
        'lang': final String lang,
        'dir': final String dir,
        'content_urls': {
          'desktop': {'page': final String url},
          'mobile': {'page': String _},
        },
      } =>
        Summary(
          titles: TitlesSet.fromJson(titles),
          pageId: pageId,
          extract: extract,
          extractHtml: extractHtml,
          lang: lang,
          dir: dir,
          url: url,
        ),
      _ => throw FormatException('Could not deserialize Summary, json=$json'),
    };
  }

  @override
  String toString() =>
      'Summary['
      'titles=$titles, '
      'pageId=$pageId, '
      'extract=$extract, '
      'extractHtml=$extractHtml, '
      'thumbnail=${thumbnail ?? 'null'}, '
      'originalImage=${originalImage ?? 'null'}, '
      'lang=$lang, '
      'dir=$dir, '
      'description=$description'
      ']';
}
