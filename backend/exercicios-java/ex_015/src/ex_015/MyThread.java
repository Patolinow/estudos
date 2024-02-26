package ex_015;

public class MyThread extends Thread {
	@Override
	public void run() {
		
		System.out.println("The thread "+Thread.currentThread().getName()+" is running");
		
		if(this.isDaemon()) {
			System.out.println("also, it's a daemon thread");
		}
	}
}
