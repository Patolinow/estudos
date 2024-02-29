package ex_017;

import java.util.Arrays;
import java.util.List;

public class Main {

	public static void main(String[] args) {
		List<String> perguntas = Arrays.asList(
				"Você já sonhou em fazer uma viagem à Lua com seu melhor amigo?",
				"Você acha que seu amigo é a reencarnação de um unicórnio?",
				"Você já considerou mudar seu nome para Geleca apenas para combinar com o apelido do seu amigo?",
				"Você acredita que seu amigo é secretamente um super-herói disfarçado?",
				"Você já planejou uma festa surpresa de aniversário para o seu amigo no dia errado, só para ver a reação?",
				"Você acha que seu amigo é a única pessoa capaz de decifrar porque o cocô das cabras é redondo e o do wombat é quadrado?",
				"Você já pensou em criar um clube exclusivo para pessoas que usam pijamas de abacaxi nas segundas-feiras?",
				"Você consegue segurar o tchan?",
				"Você já considerou tatuar uma imagem de batata frita no braço em homenagem ao seu amigo?",
				"Você já pensou em criar um podcast sobre teorias da conspiração envolvendo a vida secreta do seu melhor amigo?",
				"Você acredita que seu amigo é a verdadeira inspiração por trás das músicas de karaokê?",
				"Você acha que seu amigo possui um diploma honorário em Mímica Avançada?",
				"Você acha que seu amigo é o verdadeiro criador das terríveis baratas voadas?"
		);
		Questionario questionario = new Questionario();
		
		int valorDoQuestionario = questionario.fazerPerguntas(perguntas);
		if(valorDoQuestionario <= 2) {
			System.out.println("você colocou seu melhor amigo na friendzone. O que é ótimo porque talvez ele seja apenas seu amigo");
		}
		
		else if(valorDoQuestionario <= 4) {
			System.out.println("Talvez haja amor, talvez seja hormônios. Vale a pena experimentar uns cinco minutos de trocação de beijo sem estragar a amizade.");
		}
		
		else {
			System.out.println("É o amor /Que mexe com minha cabeça e me deixa assim/ Que faz eu pensar em você e esquecer de mim/ Que faz eu esquecer que a vida é feita pra viver");
		}
	

	}

}
