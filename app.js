// function statement 
function greet() {
    console.log('hi');
}
// greet();

// functions are first-class Objects
function logGreeting(fn) {
    fn();
}
logGreeting(greet); // no paranthesis after greet

// function expression
var greetMe = function() {
    console.log('Hi Steve');
}
greetMe();

// it's still First Class
logGreeting(greetMe);

// var a = 1;
// var b = 2;
// var c = a + b;

// console.log(c);