package ex_009;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;

import javax.sound.sampled.*;

public class Main {

	public static void main(String[] args) throws UnsupportedAudioFileException, IOException, LineUnavailableException {
		Scanner scanner= new Scanner(System.in);
		
		try {
			FileWriter writer = new FileWriter("poem.txt");
			writer.write("Roll me around\nRoll roll roll\nLike a ball of snow");
			writer.append("\n-By Patolino");
			writer.close();
			
			FileReader reader = new FileReader("poem.txt");
			int data = reader.read();
			
			//o "data" retorna o número de bytes presentes no arquivo, se o resultado for -1
			//é pq o arquivo já ta vazio
			while(data != -1) {
				System.out.print((char)data);
				data = reader.read();
			}
			
			reader.close();
			
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		File file = new File("piano.wav");
		
		if(!file.exists()) {
			System.out.println("That file doesn't exist");
			return;
		}
		
		//basic file tests
		System.out.println(file.getAbsolutePath());
		System.out.println(file.getPath());
		// file.delete();
		System.out.println(file.isFile());
		
		//audio things
		AudioInputStream audioStream = AudioSystem.getAudioInputStream(file);
		Clip clip = AudioSystem.getClip();
		clip.open(audioStream);
		
		
		String response = scanner.next();
		while(!response.equals("0")) {
			System.out.println("0 = Quit, 1 = Play, 2 = Stop, 3 = Reset");
			response = scanner.next();
			
			switch(response) {
			case ("1"): clip.start();
			break;
			
			case ("2"): clip.stop();
			break;
			
			case ("3"): clip.setMicrosecondPosition(0);
			break;
			
			case ("0"): clip.close();
			break;
			
			default: System.out.println("not a valid response");
			}
		}
		
		System.out.println("music quitted");
	}

}
