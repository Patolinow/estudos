package ex_012;


import java.io.Serializable;

public class User implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1;
	String name;
	//transient = ignorado quando serializado
	transient String password;
	
	public void sayHello() {
		System.out.println("hello "+name);
	}
}
