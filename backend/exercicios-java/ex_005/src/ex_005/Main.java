package ex_005;
import java.util.ArrayList;

public class Main {

	public static void main(String[] args) {
		String[] cars = {"camaro", "corvette", "tesla"};
		cars[0] = "Mustang";
		
		System.out.println(cars[0]);
		
		String[] games = new String[3];
		games[0] = "P5R";
		games[1] = "P3RE";
		games[2] = "Celeste";
		
		for(int i=0; i<games.length; i++) {
			System.out.println(games[i] + "\n");
		}
		
		ArrayList<String> foods = new ArrayList<String>();

		foods.add("pizza");
		foods.add("hamburguer");
		foods.add("hotdog");
		
		foods.set(0, "sushi");
		foods.remove(2);
		// foods.clear();
		
		for (String food : foods) {
			System.out.println(food);
		}
	}

}
