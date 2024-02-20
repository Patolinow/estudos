package ex_008;

public class Car extends Vehicle {
	String make = "Chevrolet";
	String model = "Corvette";
	private int year = 2020;
	String color = "blue";
	double price = 35000.99;
	static int numberOfCars;
	
	public int getYear() {
		return this.year;
	}
	
	public void setYear(int year) {
		this.year = year;
	}
	
	Car(double price) {
		super(50);
		this.price = price;
		numberOfCars++;
	}
	
	Car(String color, int year) {
		super(90);
		setYear(year);
		this.color = color;
		numberOfCars++;
	}
	
	Car(Car copyCar){
		super(copyCar.speed);
		copy(copyCar);
	}
	
	public String toString() {
		String carObject = make+"\n"+model+"\n"+year+"\n"+color+"\n"+super.toString();
		return carObject;
	}
	
	// Static - modifier. uma copia única de uma variável/método é criada e compartilhada
	//                    o static member pertence a classe.
	static void displayCars() {
		System.out.println("we currently have "+Car.numberOfCars + " cars");
	}
	
	public void copy(Car car) {
		setYear(car.getYear());
		this.make = car.make;
		this.color = car.color;
		this.model = car.model;
		this.price = car.price;
	}
	
	void drive() {
		System.out.println("You drive the car");
	}
	
	void cost() {
		System.out.println("your car costs: " + this.price);
	}
	
	void brake() {
		System.out.println("You step on the brakes");
	}

}
