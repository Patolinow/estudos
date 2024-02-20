package ex_008;

// it's a complete mess, just testing things

public class Main {

	public static void main(String[] args) {
		Car myCar = new Car(20000.50);
		Car yourCar = new Car("red", 2010);
		Car theirCar = new Car(yourCar);
		Car[]ourCars = {myCar, yourCar};
		Garage garage = new Garage();
		
		theirCar.toString();
		System.out.println("\n");
		
		//dynamic - something that happens after compilation (during runtime)
		
		
		// yourCar.copy(myCar);
		
		yourCar.brake();
		// yourCar.year; // inacessivel, private para encapsulamento
		yourCar.getYear();
		
		System.out.println(myCar.price);
		System.out.println(yourCar.color);
		System.out.println(myCar.toString());
		System.out.println(ourCars[1].toString());
		yourCar.cost();
		myCar.drive();
		
		garage.park(myCar);
		Car.displayCars();
		
		// herança - quando uma classe recebe atributos e metodos de outra
		System.out.println(myCar.speed);

	}

}
