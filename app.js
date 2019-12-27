// function statement 
function greet() {
    console.log('hi');
}
// greet();

// functions are first-class Objects
function logGreeting(fn) {
    fn();
}
logGreeting(greet);

// var a = 1;
// var b = 2;
// var c = a + b;

// console.log(c);