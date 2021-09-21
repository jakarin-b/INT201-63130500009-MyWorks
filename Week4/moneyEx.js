//class ไว้ใช้เรียกตัว getter setter ของ value
class Money {
    constructor(value) {
        this._value = value;
    }
    get value() {
        return this._value;
    }
    toString() {
        return `${this.value}`;
    }
}
//สร้าง obj มูลค่าของธนบัตร ที่ค่าเปลียนแปลงไม่ได้ จึงใช้ const
const banknote500 = new Money(500);
const banknote100 = new Money(100);
const banknote50 = new Money(50);
const banknote20 = new Money(20);
const banknote10 = new Money(10);
const banknote5 = new Money(5);
const banknote2 = new Money(2);
const banknote1 = new Money(1);

//function คำนวนเงินทอนโดยรับค่าเงินที่ต้องจ่าย กับ เงินของลูกค้า
function changeMoneyCalculation(price, moneyFromCustomer) {
    //check ว่าเงินของลูกค้าพอจ่ายหรือไม่
    if (price > moneyFromCustomer) {
        return 'Not enough money!!';
    }
    //สร้างตัวแปร total มาเพื่อรับค่าเงินทอน
    let total;
    total = moneyFromCustomer - price;
    //นำค่าของธนบัตรแต่ละอันใส่เข้าไปใน array ตัวใหม่ที่ชื่อว่า arrayBank แล้วสร้างarrayอีกตัวชื่อว่า countBank เพื่อเอาไว้นับจำนวนธนบัตรว่าต้องทอนกี่ใบ
    let arrayBank = [banknote500, banknote100, banknote50, banknote20, banknote10, banknote5, banknote2, banknote1];
    let countBank = [bank500 = 0, bank100 = 0, bank50 = 0, bank20 = 0, bank10 = 0, bank5 = 0, bank2 = 0, bank1 = 0];

    //เป็นfor loopที่ทำมาเพื่อนับจำนวนธนบัตรที่จะใช้ทอน โดยforตามชนิดของธนบัตรที่มี(arrayBank.length)         
    //จะหลุด for ก็ต่อเมื่อ นับจำนวนธนบัตรครบทุกตำแหน่ง
    for (let i = 0; i < arrayBank.length; i++) {
        //แล้วใช้while loopเพื่อเช็คว่า ถ้าจำนวนเงินที่จะต้องทอน - มูลค่าเงินของตำแหน่งที่ i นั้นมากกว่าหรือเท่ากับ0
        //ให้ทำการนำจำนวนเงินที่จะต้องทอน -= มูลค่าเงินของตำแหน่งที่ i แล้วทำการนับจำนวนของธนบัตรตามตำแหน่งนั้นๆ 1 ครั้ง
        //จะหลุดwhile จนกว่าจำนวนเงินที่จะต้องทอน - มูลค่าเงินของตำแหน่งที่ i นั้น น้อยกว่า 0 จึงจะหลุด while แล้ว for ก็จะไปนับธนบัตรของช่องต่อไป
        while (total - arrayBank[i] >= 0) {
            total -= arrayBank[i];
            countBank[i]++;
        }
    }

    //สร้างตัวแปรเพื่อนำค่าที่นับมาจัดformให้ดูสวยงาม
    let ans = `Total of change is ${moneyFromCustomer - price}. ` ;
    //loopนี้ใช้จัดformในการแสดงคำตอบให้สมบูรณ์
    
    for (i = 0; i < countBank.length; i++) {
        //มีifเพื่อเช็คarrayตัวสุดท้ายทำให้ไม่มีตัวคอมม่า","
        if (countBank[i] > 0) {
        if (i == countBank.length - 1) {
            ans += `Banknote${arrayBank[i].value}: ${countBank[i]} `
        } else
            ans += `Banknote${arrayBank[i].value}: ${countBank[i]},` ;
    }
    }
    return ans;
}

console.log(changeMoneyCalculation(1000, 1234));
console.log(changeMoneyCalculation(562, 1648));
console.log(changeMoneyCalculation(68, 5481));