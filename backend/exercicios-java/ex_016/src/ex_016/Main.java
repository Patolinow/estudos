package ex_016;
import tools.Toolbox;

public class Main {

	public static void main(String[] args) throws InterruptedException {
		// existem 2 formas de criar threads, criando uma subclass de thread
		MyThread thread1 = new MyThread();
		
		// ou implementar runnable interface e passar uma instância como argumento pra thread (melhor)
		MyRunnable runnable1 = new MyRunnable();
		Thread thread2 = new Thread(runnable1);
		//
		thread2.setDaemon(true);
		
		thread1.start();
		thread1.join(3000); // espera o tempo (em ms) ou a thread joinada morrer pra prosseguir o código
		thread2.start();
		
		Toolbox toolbox = new Toolbox();
		
	}

}
