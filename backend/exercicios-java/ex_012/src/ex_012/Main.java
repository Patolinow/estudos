package ex_012;
import java.io.*;

public class Main {

	public static void main(String[] args) throws IOException {
	User user = new User();
	
	user.name = "Patolino Foda";
	user.password = "Som3thing";
	
	FileOutputStream fileOut = new FileOutputStream("src/userInfo.ser");
	ObjectOutputStream out = new ObjectOutputStream(fileOut);
	out.writeObject(user);
	out.close();
	fileOut.close();
	
	System.out.println("saved!");
	
	long serialVersionUID = ObjectStreamClass.lookup(user.getClass()).getSerialVersionUID();
	System.out.println(serialVersionUID);
	}

}
