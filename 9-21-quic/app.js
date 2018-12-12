//Create an object that has a property that is an array. Log one of the elements of that array.

let objOne = { array: [1,2,3,4] };
console.log(objOne.array[0]);
//Create an object that has a property that is an object. Log one of the properties of that inner object.

let objTwo = { obj: {inner: 'hello'}}
console.log(objTwo.obj.inner);
//Create an object that has a property that is a function (method). Call that method.
const objThree = {
  sing () {
    console.log('heyy')
  }
}
objThree.sing();

//Create a function that returns an object. Log a property of that object (hint: call the function and then call a property on the return value).
const funkOne = () => {
  let objOne = {key: 'ball'};
  return objOne.key;
}
console.log(funkOne());
//Create a function that returns an array. Log an element of the array.
const funkTwo = () => {
  let array = [1,23,4,5];
  return array[0];
}
console.log(funkTwo());
//Create a function that returns an object that has an array. Log one of the elements of that array.
const funkThree = () => {
  let array = {obj1: [1,2,4]};
  return  array;
}
console.log(funkThree().obj1[1]);


//Define two functions and set them to variables
//The second function takes a parameter
//Call the second function, passing in the variable that references the first function as the parameter
//In the definition of the second function, invoke (call) the parameter that is being passed into it. Remember, this parameter is a function
const funcOne = () => {
  console.log('func yea');
}
const funcTwo = (param) => {
  return param;
}
funcTwo(funcOne())
