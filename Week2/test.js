let leftDoor;
let rightDoor;
const pay = 50;
let totalMoney = 0;
let numOfPassenger;
let name;
let passObj ;

function doorStatus(){
    return rightDoor,leftDoor;
}
function  callTotalMoney(){
    return totalMoney;
}

function goToBus(passObj){
    totalMoney += pay;
    numOfPassenger++;
}

function doorOpen(){
    leftDoor,rightDoor = true;
}

function doorClose(){
    leftDoor,rightDoor = false;
}

function allStatus(){
    console.log( rightDoor,leftDoor,totalMoney,numOfPassenger);
}