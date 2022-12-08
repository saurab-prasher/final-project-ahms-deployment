package assignment4;
public class MainClass {
	public static void main(String args[]) {	
		Drawable tdshaps[] = { 
				new Line("String ", 20) ,
				new Rectangle ("Window", 15,6),
				new Line("Charger Cord ", 35) , 
				new Rectangle ("Book", 5,4)};
		
		for (int i = 0 ; i < tdshaps.length; i ++) {
			tdshaps[i].draw();
		}
		Holdable thdshaps[] = { 
				new Sphere("Ball", 40, 30) , 
				new Sphere("Orange", 4, 1) , 
				new Cube ("Lunch Cube", 0.5 , 20) ,
				new Cube ("Box ", 10 , 100) };
		
		for (int i = 0 ; i < thdshaps.length; i ++) {
			thdshaps[i].hold();
		}
		
		Shape[] allshapes = {
				new Line("String ", 15) , 
				new Line("Charger Cord ", 35) , 
				new Rectangle ("Window", 10,15) ,
				new Rectangle ("Book", 4,9) ,
				new Sphere("Ball", 40, 30) , 
				new Sphere("Orange", 4, 10) , 
				new Cube ("Lunch Cube", 0.5 , 20) ,
				new Cube ("Box ", 10 , 100) 
		};
		
		System.out.println();
		for (int i = 0 ; i < allshapes.length ; i++) {
			System.out.println(allshapes[i]);
		}
	}
}

/*
 * << String  >>
--------------------
<< Window >>
---------------
|              |
|              |
|              |
|              |
|              |
|              |
---------------
<< Charger Cord  >>
-----------------------------------
<< Book >>
-----
|    |
|    |
|    |
|    |
-----
This Ball's wieght is 40.0, it not is holdable
This Orange's wieght is 4.0, it is holdable
This Lunch Cube's wieght is 0.5, it is holdable
This Box 's wieght is 10.0, it is holdable

String  is a 2D shape : Line, its length is 15
Charger Cord  is a 2D shape : Line, its length is 35
Window is a 2D shape : Rectangle, its area is 150.0
Book is a 2D shape : Rectangle, its area is 36.0
Ball is a 3D shape : Sphere, its volume is 113039.99819999999
Orange is a 3D shape : Sphere, its volume is 4186.6666
Lunch Cube is a 3D shape : Cube, its volume is 8000.0
Box  is a 3D shape : Cube, its volume is 1000000.0

 * 
 */
