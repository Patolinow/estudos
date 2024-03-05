package ex_017;
import java.util.*;

public class Questionario {
	private final Scanner scanner = new Scanner(System.in);
	private String tituloQuestionario;
	
	public List<Pergunta> preparacao() {
		List<Pergunta> perguntas = new ArrayList<Pergunta>();
		int numeroPerguntas;
		
		System.out.println("Qual vai ser o título do questionario?");
		tituloQuestionario = scanner.nextLine();
		
		try {
		System.out.println("Quantas perguntas você vai fazer?");
		numeroPerguntas = scanner.nextInt();
		scanner.nextLine();
		
		for (int i = 0; i < numeroPerguntas; i++) {
			Pergunta pergunta = new Pergunta();
			
			System.out.println("Digite a pergunta:");
			pergunta.texto = scanner.nextLine();
			
			System.out.println("quantas opções vão ter como resposta?");
			int quantidadeOpcoes = scanner.nextInt();
			scanner.nextLine();
			
			for (int j = 0; j < quantidadeOpcoes; j++) {
				System.out.println("digite a "+(j+1)+" opção:");
				String opcao = scanner.nextLine();
				
				System.out.println("digite o peso dessa opção:");
				int peso = scanner.nextInt();
				scanner.nextLine();
				
				pergunta.opcoes.put(opcao, peso);
				}
			perguntas.add(pergunta);
			}
		
		} catch(InputMismatchException e) {
			System.out.println("Você so pode digitar números inteiros, burro!");
		} 
		return perguntas;
	}
	
	public double responderPerguntas(List<Pergunta> perguntas) {
		
		double pontosTotais = 0;
		
		System.out.println("Bem-vindo a nosso questionário sobre "+tituloQuestionario+"!\n");
		
		for (int i = 0; i < perguntas.size(); i++) {
			
			System.out.println(perguntas.get(i).texto);
			String resposta = scanner.nextLine();
			
			if(perguntas.get(i).opcoes.containsKey(resposta)) {
				pontosTotais += perguntas.get(i).opcoes.get(resposta);
			}
			else {
				System.out.println("opção inexistente! tente novamente");
				i--;
			}
			System.out.println();
		}
		
		scanner.close();
		return pontosTotais;
	}
}
