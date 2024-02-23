package ex_011;

public class GenericMethods {
	public static <T> void displayArray(T[] array) {
		for(T element : array) {
			System.out.print(element+" ");
		}
		System.out.println();
	}
	
	public static <T> T getFirst(T[] array) {
		
		return array[0];
	}
}
