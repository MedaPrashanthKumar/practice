//classes
var Car = /** @class */ (function () {
    function Car(engine) {
        this.engine = engine;
    }
    Car.prototype.display = function () {
        console.log("Function displays Engine is : " + this.engine);
    };
    return Car;
}());
var obj = new Car("Rolls Ryce");
obj.display();
var customer = {
    firstName: "Tom",
    lastName: "Hanks",
    sayHi: function () {
        return "Hi there";
    }
};
console.log("Customer Object ");
console.log(customer.firstName);
console.log(customer.lastName);
console.log(customer.sayHi());
var employee = {
    firstName: "Jim",
    lastName: "Blakes",
    sayHi: function () {
        return "Hello!!!";
    }
};
console.log("Employee  Object ");
console.log(employee.firstName);
console.log(employee.lastName);
