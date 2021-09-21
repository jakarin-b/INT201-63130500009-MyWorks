// let person = {}; //implicit class
// console.log(typeof person);
// person.id = 12345678;
// person.name = `Somchai`;
// console.log(person);
// person.email = `Somchai@gmail.com`;
// delete person.email;
// console.log(person);

class Person{
    constructor(id,name){        
        (id.length != 13) ? this._id = `unknow` : this._id = id; //backing field              
        this._name = name;          
    }

    //getter
    get id(){
        return this._id;
    }
    //setter
    set id(id){
        this._id = id;
    }
    get name(){
        return this._name;
    }
    set name(){
        this._name = name;
    }

    toString(){
        return `person id: ${this._id} person name: ${this._name}`;
    }
}

let per1 = new Person(`1234567`,`Somchai`);
console.log(per1.toString());
let per2 = new Person(`1234567891234`,`Somsak`);
console.log(per2.toString());

Person.prototype.getFirstNameLetter = function(){
    return this.name.charAt(0);
}