// Object (Collection of some properties and behavior)
const user = {
    name: 'John',
    age: 20,
    favoriteColor: ['green', 'white', 'red'],
    showInfo: function () {
        return this.name + " " + this.age;
    },
    isActive: true,
};

const entries = Object.entries(user);
entries.forEach((v) => {
    if (v[0] === 'showInfo') {

    } else {
        console.log(v[0] + " ****** " + v[1]);
    }
});