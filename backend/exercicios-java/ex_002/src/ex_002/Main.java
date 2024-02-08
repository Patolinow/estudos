package ex_002;

public class Main {

	public static void main(String[] args) {
		String water = "water";
		String kool = "kool-Aid";
		String extra;
		
		System.out.println("water: "+water);
		System.out.println("kool: "+kool);
		
		extra = water;
		water = kool;
		kool = extra;
		System.out.println("water: "+water);
		System.out.println("kool: "+kool);
		
		double frens = 12;
		frens = frens / 5.21;
		System.out.println(frens);

	}

}
