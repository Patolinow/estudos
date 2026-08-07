/// Support for doing something awesome.
///
/// More dartdocs go here.
library;

export 'src/command_runner_base.dart';

class CommandRunner {
  /// Runs the command-line application logic with the given arguments.
  Future<void> run(List<String> input) async {
    print('CommandRunner received arguments: $input');
  }
}
