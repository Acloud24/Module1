//This function returns the sum of two numbers

function sum(a, b) {
    return a + b;
}

if (sum(-5, 5) != 0) throw { error }
if (sum(-1, -1) != 2) throw { error }
if (sum(5, 5) != 10) throw  {error};

//This one subtracts
function sub(a, b) {
    return a - b;
}

if (sub(5, 5) != 0) throw  {error};
if (sum(-5, 5) != -10) throw  {error};
if (sum(-5, -5) != 0) throw  {error};

//This one multiplies
function multiply(a, b) {
    return a * b;
}

if {multiply(5, 5) != 25} throw  (error)
if (multiply(-5, 0) != 0) throw  {error};
if (multiply(5, -12) != -60) throw  {error};

//This one divides
function div(a, b) {
    return a / b;
}

if (div(5, 5) != 1) throw  {error};
if (div(5, 15) != 3) throw {error};
if (div(25, 5) != 5) throw {error};

console.log(sum(-5, 5));
console.log(sub(-5, 5));
console.log(multiply(-5, 0));
console.log(div(-5, 5));