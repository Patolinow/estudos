package ex_017;
import java.util.*;

public class Main {

	public static void main(String[] args) {
		
		Questionario questionario = new Questionario();
		var perguntas = questionario.preparacao();
		double valorQuestionario = questionario.responderPerguntas(perguntas);
		
		System.out.println("Sua pontuação total foi de "+valorQuestionario+", parabéns!");
	

	}

}
