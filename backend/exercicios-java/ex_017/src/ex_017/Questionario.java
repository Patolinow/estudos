package ex_017;
import java.util.*;

public class Questionario {
	
	public int fazerPerguntas(List<String> perguntas) {
		Scanner scanner = new Scanner(System.in);
		Collections.shuffle(perguntas);
		int pontosTotais = 0;
		
		System.out.println("Responda as perguntas com 'N' ou 'S':\n");
		
		for (int i = 0; i < 5; i++) {
			
			System.out.println(perguntas.get(i));
			String resposta = scanner.next();
			
			switch(resposta) {
				case "S":
					pontosTotais++;
					break;
				
				case "N":
					break;
				
				default:
					System.out.println("Resposta inválida! Tente novamente");
					i--;
					break;
			}
			
			System.out.println();
		}
		
		scanner.close();
		
		return pontosTotais;
	}
}
