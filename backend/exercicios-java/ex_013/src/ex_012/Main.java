package ex_012;

import java.io.*;
public class Main {
	
	public static void main(String[] args) throws IOException, ClassNotFoundException {
		
	User user;
	FileInputStream fileIn = new FileInputStream("../ex_012/src/userInfo.ser");
	ObjectInputStream in = new ObjectInputStream(fileIn);
	user = (User) in.readObject();
	in.close();
	fileIn.close();
	
	System.out.println(user.password);
	user.sayHello();
	
	}

}
