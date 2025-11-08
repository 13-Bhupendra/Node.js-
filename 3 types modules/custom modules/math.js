//! Define functions (custom modules)

function add(a , b){
    const result = a+b;
    console.log("addition of A and B is : " + result);
}

function sub(a , b){
    const result = a-b;
    console.log("Substraction of A and B is : " + result);
}

function mult(a , b){
    const result = a*b;
    console.log("multiplication of A and B is : " + result);
}

function div(a , b){
    const result = a/b;
    console.log("divition of A and B is : " + result);
}

module.exports = {add, sub , mult , div}