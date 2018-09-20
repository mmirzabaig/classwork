class Person {
  constructor(name, height, age) {
    this.name = name;
    this.height = height;
    this.age = age;
  }
  greet() {
    console.log('Hi my name is ' + this.name);
  }
}
const mariana = new Person('Mariana', '5"5', 25);

class Pet extends Person {
  constructor(name, type, color) {
    super(name);
    this.type = type;
    this.color = color;
  }
  dog() {
    console.log('woof woof');
  }
}
const animal = new Pet('bella', 'cat', 'white');

class Boat extends Pet {
  constructor(name, type, color) {
    super(name);
    this.type = type;
    this.color = color;
  }
  sail() {
    console.log('hula hula!')
  }
}
const sea = new Boat('marcus', 'wood', 'pink');

class Artist extends Person {
  constructor(name, height, age, genre) {
    super(name, age, genre);
    this.genre = genre;
  }
  sing() {
    console.log('la la la')
  }
}
const guitar = new Artist('Shazad', '6"0', 25, 'Rock');
