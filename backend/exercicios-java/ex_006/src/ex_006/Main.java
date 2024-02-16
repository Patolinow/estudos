package ex_006;

public class Main {

	public static void main(String[] args) {
		// wrapper data types com exemplo de autoboxing
		Boolean a = true;
		Character b = 'b';
		Integer c = 1;
		Double d = 3.14;
		String e = "Pato";
		
		// autoboxing = conversão automatica q o javaC faz entre o primitivo PARA wrapper class
		// unboxing = o contrario de autoboxing, vai de wrapper class PARA primitivo
		
		// exemplo de unboxing, o javac transforma o wrapper "a" no primitivo "true" para fazer a operação abaixo
		if (a) {
			System.out.println("it's true");
		}
		
		
		
	}
	
	

}
