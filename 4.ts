//classes

class Car {
  engine: string;
  constructor(engine: string) {
    this.engine = engine;
  }
  display(): void {
    console.log("Function displays Engine is : " + this.engine);
  }
}

var obj = new Car("Rolls Ryce");
obj.display();

//Interface

interface IPerson {
  firstName: string;
  lastName: string;
  sayHi: () => string;
}

var customer: IPerson = {
  firstName: "Tom",
  lastName: "Hanks",
  sayHi: (): string => {
    return "Hi there";
  },
};

console.log("Customer Object ");
console.log(customer.firstName);
console.log(customer.lastName);
console.log(customer.sayHi());

var employee: IPerson = {
  firstName: "Jim",
  lastName: "Blakes",
  sayHi: (): string => {
    return "Hello!!!";
  },
};

console.log("Employee  Object ");
console.log(employee.firstName);
console.log(employee.lastName);
