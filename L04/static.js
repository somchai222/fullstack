class Dog {
    constructor(name) {
        this.name = name;
    }


introduce() { 
    console.log(`This dog's name is .`+ this.name);
}

static bark(){
    console.log("Woof!");
}

}

const myDog = new Dog("Buddy");
myDog.introduce();
// Output: This dog's name is Buddy
Dog.bark();