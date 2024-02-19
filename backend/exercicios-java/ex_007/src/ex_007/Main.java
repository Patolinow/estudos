package ex_007;

public class Main {

	public static void main(String[] args) {
		hello("Pato", "Mago");
		final double PI = 3.14;

	}
	
	static void hello(String name) {
		System.out.println("hello "+name);
	}
	//overloading methods = metodos q tem o msm nome mas possuem tipos e/ou quantidade de parametros diferentes
	static void hello(String name, String surname) {
		System.out.println("hello "+name + " "+surname);
	}
	
	

}
