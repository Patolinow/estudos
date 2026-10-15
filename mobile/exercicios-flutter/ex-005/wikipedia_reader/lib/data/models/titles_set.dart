class TitlesSet {
  /// Returns a new [TitlesSet] instance.
  TitlesSet({
    required this.canonical,
    required this.normalized,
    required this.display,
  });

  /// The non-prefixed DB key for the article.
  ///
  /// Might contain changes such as underscores instead of spaces.
  /// Best suited for making request URIs, but still requires percent-encoding.
  final String canonical;

  /// The [normalized title](https://www.mediawiki.org/wiki/API:Query#Example_2:_Title_normalization)
  /// of the article.
  final String normalized;

  /// The title as it should be displayed to the user.
  final String display;

  /// Returns a new [TitlesSet] instance with its values populated from [json].
  static TitlesSet fromJson(Map<String, Object?> json) {
    if (json case {
      'canonical': final String canonical,
      'normalized': final String normalized,
      'display': final String display,
    }) {
      return TitlesSet(
        canonical: canonical,
        normalized: normalized,
        display: display,
      );
    }
    throw FormatException('Could not deserialize TitleSet, json=$json');
  }

  @override
  String toString() =>
      'TitlesSet['
      'canonical=$canonical, '
      'normalized=$normalized, '
      'display=$display'
      ']';
}
