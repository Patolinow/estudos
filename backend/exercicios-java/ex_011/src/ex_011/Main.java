package ex_011;

import java.util.ArrayList;

public class Main {

	public static void main(String[] args) {
		// generics são funções q aceitam qualquer tipo desde que sigam determinadas regras
		
		Integer[] intArray = {1,2,3,4,5};
		String[] stringArray = {"hi", "bye", "no"};
		
		GenericMethods.displayArray(intArray);
		GenericMethods.displayArray(stringArray);
		
		System.out.println(GenericMethods.getFirst(intArray));
		System.out.println(GenericMethods.getFirst(stringArray));
		
		MyGenericClass<Double, Double> myDouble = new MyGenericClass<Double, Double>(6.9, 3.12);
		// MyGenericClass<Character, Character> myChar = new MyGenericClass<Character, Character>('@', 'A');
		
		//ArrayList é um Generic
		ArrayList<String> myFriends = new ArrayList<>();
		
		System.out.println(myDouble.getValue());
		// System.out.println(myChar.getValue());
	}

}
