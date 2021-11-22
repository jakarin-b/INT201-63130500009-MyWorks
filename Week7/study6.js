const doSomething = function(n1,n2,n3){
    return n1+n2+n3;
}

console.log(doSomething(1,2,3)); //8


const findSum = function sum(n){
    return (n <= 1) ? 1 : n + sum(n-1);
}

console.log(findSum(5)); //15

function area(width2,height2){
    return width2*height2;
}
console.log(area(5,4)); //20

const hello = name => `Hello ${name}`;
const area = (width,height) => width*height
const evenNum = num => num % 2 == 0 ? true : false;