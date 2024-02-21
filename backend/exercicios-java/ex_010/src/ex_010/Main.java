package ex_010;
import java.util.*;

public class Main {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		try {
		
		System.out.println("Write a number to be divided with itself: ");
		int number = scanner.nextInt();
		
		int result = number / number;
		System.out.println("result: "+result);
		}
		catch(InputMismatchException e) {
			System.out.println("you should digit only numbers!");
		}
		catch(ArithmeticException e) {
			System.out.println("you can't divide by zero!");
		}
		
		finally{
			scanner.close();
		}
		
	}

}
