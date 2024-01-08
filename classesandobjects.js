class Car{
    constructor(brand){
        this.brand = brand;
    }
    setSpeed(speed){
        this.speed = speed;
    }

    setBrakeType(brake){
        this.brake = brake;
    }
}

class SportsCar extends Car{ //inheritance
    constructor(brand, model){
        super(brand);
        this.model = model;
    }

    setBrakeType(){ //method overriding
        this.brake = "Disc";
    }
}


let car1 = new Car("Hyundai");
car1.setSpeed("40 kmph");
car1.setBrakeType("Hydraulic")

let car2 = new SportsCar("Lamborghini", "Aventador");
car2.setSpeed("200 kmph");
car2.setBrakeType();


//prototypes
let employee = {
    name: "Nitesh",
    age:25
};

let engineer = {
    task: "Software Development"
};


engineer.__proto__ = employee; //now engineer also has name and age

console.log(engineer.age);
console.log(engineer.name);
console.log(engineer.task);