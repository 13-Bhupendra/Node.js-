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

//===================================================================================
function areaOfCircle(r){
    console.log("Area of cicle is : " , 3.14 * r*r)
}

function areaOfSquare(s){
    console.log("Area of Square is : " , s*s)
}

function areaOfRectangle(l,b){
    console.log("Area of Rectangle is : " , l*b)
}

module.exports = {add, sub , mult , div , areaOfCircle , areaOfSquare ,areaOfRectangle}