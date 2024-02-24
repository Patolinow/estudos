package ex_014;

import java.util.Calendar;
import java.util.Timer;
import java.util.TimerTask;

public class Main {
	public static void main(String[] args) {
//		Timer = pode criar um timer para uma task q é executada numa thread
//		Timer Task = Uma tarefa de um timer, pode ser executada uma ou varias vezes
		
		Timer timer = new Timer();
		
		TimerTask task = new TimerTask() {
			int counter = 10;
			@Override
			public void run() {
				if (counter > 0) {
					System.out.println(counter+" seconds");
					counter--;
				}
				else {
					System.out.println("TASK IS COMPLETE!");
					timer.cancel();
				}
				
				
			}
		};
		
		Calendar date = Calendar.getInstance();
		date.set(Calendar.YEAR, 2024);
		date.set(Calendar.MONTH, Calendar.FEBRUARY);
		date.set(Calendar.DAY_OF_MONTH, 20);
		date.set(Calendar.HOUR_OF_DAY, 23);
		date.set(Calendar.MINUTE, 20);
		
//		timer.schedule(task, 3000);
//		timer.schedule(task, date.getTime());
		timer.scheduleAtFixedRate(task, 0, 1000);
	}

}
