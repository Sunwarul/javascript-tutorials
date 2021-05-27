class User {
    name = '';
    age = 0;
    constructor(givenName, givenAge) {
        this.name = givenName;
        this.age = givenAge;
    }
    // getter
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    setName(updatedName) {
        this.name = updatedName;
    }
    setAge(updatedAge) {
        this.age = updatedAge;
    }
}

const user1 = new User("John", 10);
console.log(user1);

user1.setAge(30)
user1.setAge(31)

console.log(user1.getAge())
