// Create a custom module that exports a function to print your name.
// Create a module with multiple functions: add, subtract, multiply, and divide — import all and use them.

function fullName(name){
    console.log("my name is : " + name);
}

 function addition(a , b){
    console.log("Sum of A and b is : " , a+b);
}

function subtraction(a , b){
    console.log("subtraction of A and b is : " , a-b);
}

function multiplication(a , b){
    console.log("multiplication of A and b is : " , a*b);
}

function division(a , b){
    console.log("division of A and b is : " , a/b);
};

module.exports = {fullName , addition , subtraction , multiplication, division};
