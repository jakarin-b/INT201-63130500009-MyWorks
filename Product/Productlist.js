//import product.js
import { product } from "./product.js"
//ให้ foodlist เก็บค่า element ที่ชื่อว่า food-list 
let foodlist = document.querySelector(".food-list");
//เปิด loop เพื่อเพิ่มlistอาหารอื่นๆ
for (let p of product) {
    //สร้างdiv
    let ele = document.createElement("div");
    //set id เป็น ตามเลข id ของแต่ละ obj นั้นๆ
    ele.setAttribute("id", p.id);
    //set class เป็น col
    ele.setAttribute("class", "col")
    //สร้าง ul
    let list = document.createElement("ul");
    //ให้ulเพิ่ม li โดยใช้ innerHTML ตามข้อมูลที่ใน Obj มี
    //ใช้ += เพื่อเก็บ stack แต่ละค่าไปเรื่อยๆ
    list.innerHTML += `<li><img src="${p.img}"></li>`
    list.innerHTML += `<li>Name :${p.name}</li>`;
    list.innerHTML += `<li>Description :${p.description}</li>`;
    list.innerHTML += `<li>Price :${p.price}</li>`;
    list.innerHTML += `<li>Stock :${p.stock}</li>`;
    //append เข้าใน list ("ul")
    ele.appendChild(list)
    //append เข้าใน ele (div)
    foodlist.appendChild(ele);
}