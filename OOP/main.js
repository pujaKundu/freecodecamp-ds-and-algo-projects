//Create a Basic JavaScript Object
let dog = {
    name: 'byul',
    numLegs: 4
};
//Use Dot Notation to Access the Properties of an Object
let dog = {
    name: "Spot",
    numLegs: 4
};
// Only change code below this line

console.log(dog.name, dog.numLegs)
    //Create a Method on an Object
let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: () => { return "This dog has 4 legs." }
};

console.log(dog.sayLegs());
//Make Code More Reusable with the this Keyword
let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() { return "This dog has " + this.numLegs + " legs."; }
};

console.log(dog.sayLegs());
//Define a Constructor Function
function Dog() {
    this.name = "Albert";
    this.color = "blue";
    this.numLegs = 2;
}
//Use a Constructor to Create Objects
function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
}
// Only change code below this line
let hound = new Dog()
    //Extend Constructors to Receive Arguments