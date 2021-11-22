let stdList = [];
let firstName;
let lastName;
let subjectList = [];
let creditList = [];
let gradeList = [];
let i = 0;

//2.1
function newStdInfo(firstName,lastName,){
    stdInfo = {     
        firstName: firstName,
        lastName : lastName,
        subject  : subjectList,
        credit   : creditList,
        grade    : gradeList,
        GPA      : calGarde(),
        allCredit: calCredit()
    }
    stdList.push(stdInfo);
    return stdInfo;
} 

function addSubJect(sub){
subjectList.push(sub);
}

//2.2 เปลี่ยนมาเป็น add แยกทีละตัวเพราะติดปัญหาตรงเรียกใช้ array ใน Object
function addCredit(crt){
creditList.push(crt);
}

function calCredit(){
    let allcrt = 0;
    for(let i=0;i<creditList.length;i++){
         allcrt += creditList[i];
    }
    return allcrt;
}

//เพิ่มมาเพื่อแยกใช้งานกับ calGrade
function addGrade(grd){

if(grd === 'A'){
    grd = 4;
}
if(grd === "B+"){
    grd = 3.5;
}
if(grd === "B"){
    grd = 3;
}
if(grd === "C+"){
    grd = 2.5;
}
if(grd === "C"){
    grd = 2;
}
if(grd === "D+"){
    grd = 1.5;
}
if(grd === "D"){
    grd = 1;
}
gradeList.push(grd);

}

2.3
function calGarde(){
    let allgrd = 0;
    for(let i=0;i<gradeList.length;i++){
        if(gradeList[i] === 'A'){
            gradeList += 4;
        }
        if(gradeList[i] === "B+"){
            gradeList += 3.5;
        }
        if(gradeList[i] === "B"){
            gradeList += 3;
        }
        if(gradeList[i] === "C+"){
            gradeList += 2.5;
        }
        if(gradeList[i] === "C"){
            gradeList += 2;
        }
        if(gradeList[i] === "D+"){
            gradeList += 1.5;
        }
        if(gradeList[i] === "D"){
            gradeList += 1;
        }
        
    }
    return 12.5;
}

//2.4
function calGPA(){
    let all =0;
    for(let i=0;i<creditList.length;i++){
    all += creditList[i] * gradeList[i];
    }
    return all;
 
}

function stdStatus(){

}


addCredit(3);
addCredit(3);
addCredit(3);
addCredit(3);
addGrade('A');
addGrade('A');
addGrade('B+');
addGrade('D');
console.log(calGPA());



//console.log(12.5)
