package ex_015;

public class Main {

	public static void main(String[] args) throws InterruptedException {
//		Thread = cada thread em execução de um programa, cada thread pode executar parte do código em paralelo
//		as threads possuem ordens de prioridade e a jvm continua executando threads até q o método de saida
//		do main seja utiliza, ou todas as threads do usuario tenham morrido. Main é a thread principal
		
		System.out.println(Thread.activeCount());
		
		// Thread.currentThread().setName("principal");
		System.out.println(Thread.currentThread().getName());
		
		Thread.currentThread().setPriority(8);
		System.out.println(Thread.currentThread().getPriority());
		
		System.out.println(Thread.currentThread().isAlive());
		
		
//	
		MyThread thread2 = new MyThread();
//		Daemon threads rodam no background , tem uma prioridade menor doq outras threads e se encerram com
//		o encerramento das threads principais
		thread2.setDaemon(true);
		thread2.start();
		
		System.out.println(thread2.isAlive());
		System.out.println(thread2.getPriority());
		
		
		System.out.println(thread2.isDaemon());
		
		
		for(int i =3;i>0; i--) {
			System.out.println(i);
			Thread.sleep(1000);
		}

		System.out.println("finished");
		
	} 
}
