class Person {

    constructor(id, name, dob, skill, mark){
        this.id = id;
        this.name = name;
        this.skill = skill;
        this.mark = mark;
        this.dob = dob;
    }

    static calAge(dob){
        const date = new Date();
        return date.getFullYear() - dob;
    }
}

let person1 = new Person(1, 'Jahid', 1995, 'IT', 'Average');
document.getElementById('d2').innerHTML =  `The ${person1.name} age is ${Person.calAge(person1.dob)}`;

class Car{
    constructor(name, year){
        this.name =  name;
        this.year = year;
    }

    carAge(){
        const date = new Date();
        return date.getFullYear() - this.year;
    }

    age(x){

        return x - this.year;
    }

}

const car1 = new Car('Toyota', 2014);
document.getElementById('demo').innerHTML = "My car is "+ car1.carAge()+" Year old."
console.log(car1.carAge()); 

//throw with parameter to age method
let years = new Date().getFullYear();
let car2 = new Car('Jeep', 2010);
document.getElementsByClassName('myClass')[0].innerHTML = "The car age is "+ car2.age(years);


//prototype object..

const employee = {

    caltax(){
        console.log("Tax rate is 10%");
    },
};

let worker = {

    salary : 10000,
};

//Object.setPrototypeOf(worker, employee);
worker.__proto__ = employee;
worker.caltax();


class Truck {

    constructor(brand){
        this.truckName =  brand;
    }

    present(){
        return "I have a " + this.truckName;
    }
}

class Model extends Truck{

    constructor(brand, model){
        super(brand);
        this.modelName = model;
    }

    show(){
        
        return this.present() + ". It's " + this.modelName;
    }
}

let myTruck = new Model('Tata', "Truck");
document.getElementById('truck').innerHTML =  myTruck.show();