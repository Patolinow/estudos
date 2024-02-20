package ex_008;

public abstract class Vehicle {
	double speed;
	Vehicle(double speed) {
		this.speed = speed;
	}
	
	public String toString() {
		return ""+this.speed;
	}
}
