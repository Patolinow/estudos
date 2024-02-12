package ex_003;
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		System.out.println("what is your name?");
		String name = scanner.nextLine();
		
		System.out.println("what's your age "+name+" ?");
		int age = scanner.nextInt();
		//quando o scanner usa o metodo "nextInt" ele so pega o int e deixa o \n do enter
		//o proximo nextLine é necessário pra limpar esse \n
		// scanner.nextLine(); 
		
		System.out.println("your favorite food is");
		String food = scanner.nextLine();
		
		System.out.println("Hello "+ name);
		System.out.println("you are " +age);
		System.out.println("your favorite food is "+ food);
	}

}
