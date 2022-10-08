//creating a class & object of the class
// encapsulation & abstraction & inheritance
class Vehicle{ //parent class or base class
    constructor(type, color, speed){ 
this.type= type;
this.color= color;
this.speed= speed;
    }
increment_speed()
{
    return (this.speed+=10);
}
print()
{
    document.write('<br>Speed is'+ this.increment_speed()+
    '<br>Type is'+this.type);
} }  //class definition ends
 let auto = new Vehicle('3- wheeler', 'black', 50);
 auto.print();
 let bike = new Vehicle('2 - wheeler', 'red', 100);
 bike.print();

 class Car extends Vehicle{ //child class
    constructor(type, color, speed, engine)
    {
        super(type, color, speed);
        this.engine= engine;
    }
    print_car(){
        super.print(); //inheriting base class
        document.write("<br>"+this.engine);
    }
    print(model){
document.write(' the model is:'+model);
    }
 }
 let hondacity = new Car('4-wheel', 'white', 120, 'superfast');
 hondacity.print();
 hondacity.print('4500');
 