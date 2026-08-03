import 'dart:io';

void main(List<String> arguments) {
  const version = '0.0.1';

  if (arguments.isEmpty || arguments.contains('--help')) {
    printUsage();
    return;
  } else if (arguments.contains('--version')) {
    print('Versão: $version');
  }
  else if (arguments.first == 'search') {
    final inputArgs = arguments.length > 1 ? arguments.sublist(1) : null;
    searchWikipedia(inputArgs);
  }
  else {
    printUsage();
  }
}

void printUsage() {
  print(
    "The following commands are valid: 'help', 'version', 'search <ARTICLE-TITLE>'",
  );
}

void searchWikipedia(List<String>? arguments) {
  final String articleTitle;

  // If the user didn't pass in arguments, request an article title.
  if (arguments == null || arguments.isEmpty) {
    print('Please provide an article title.');
    // Await input and provide a default empty string if the input is null.
    articleTitle = stdin.readLineSync() ?? '';
  } else {
    // Otherwise, join the arguments into a single string.
    articleTitle = arguments.join(' ');
  }

  print('Looking up articles about "$articleTitle". Please wait.');
  print('Here ya go!');
  print('(Pretend this is an article about "$articleTitle")');
}


