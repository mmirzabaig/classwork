class Person {
  custructor(name, eyeColor) {
    this.arms = 2;
    this.legs = 2;
    this.eyes = eleColor;
    this.name = name;
  }
  greet(otherPerson) {
    console.log(`Hi ${otherPerson}!`);
  }
  jump(){
    console.log('weeee')
  }
}
const bob = new Person('bobby', 'blue');
const joan = new Person('joan', 'green');

bob.eyes = 'prage';
bob['eyes'] = 'red';
console.log(joan);

class Pet {
  constructor(name, color) {
  this.name = name;
  this.color = color;
  this.height = '1 feet';
}
  feed(){
    console.log('Pet fed');
  }
}


class superPet extends Pet {
  jump() {
    console.log('goodbye');
  }
}
const superDog = new superPet('kala', 'black');
