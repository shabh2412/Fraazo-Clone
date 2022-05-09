
// localStorage.setItem("address",JSON.stringify(address))
// document.querySelector("#bill_data").append()
//add addres icon
// var address=JSON.parse(localStorage.getItem("del_address")) || [];

var address= JSON.parse(localStorage.getItem("address")) || [];
// document.querySelector("#sub").addEventListener("click",function(){
//     event.preventDefault()
//     var add_obj={
//     name:document.querySelector("#inputEmail4").value,
//     mobile:document.querySelector("#inputPassword4").value,
//     address:document.querySelector("#inputAddress").value,
//     address2:document.querySelector("#inputAddress2").value,
//     city:document.querySelector("#inputAddress2").value,
//     state:document.querySelector("#inputstate").value,
//     zip:document.querySelector("#inputZip").value,
// }
// console.log(add_obj)
// address.push(add_obj)
// localStorage.setItem("address",JSON.stringify(address))
// })


// if(address!=null){
//     var form_remov=document.querySelector("#form");
//     // form_remov.remove();
    
// }

document.querySelector("#change").addEventListener("click",function(){
    
})
function  add_new_address(){
    window.location.href="ad1.html"
}
addresicon()
// if(address==null){
function addresicon(){
    var add_icon_box=document.createElement("div");
    add_icon_box.setAttribute("id","add_new_add")
    add_icon_box.style.cursor="pointer";
    add_icon_box.addEventListener("click",function(){
        add_new_address()
    })
    add_icon_box.style.border="2px solid"
    add_icon_box.style.textAlign="center"
    add_icon_box.style.width="fit-content"
    add_icon_box.style.padding="10px"


    var loc_img_box=document.createElement("div")
    var loc_text_box=document.createElement("div")

    var loc_text=document.createElement("P")
    loc_text.innerText="Add New Address";
    loc_text_box.append(loc_text)

    var loc_img=document.createElement("img")
    loc_img.setAttribute("src","data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDQiIGhlaWdodD0iNDQiIHZpZXdCb3g9IjAgMCA0NCA0NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIyIDI0LjM3NUMyMy44NjQgMjQuMzc1IDI1LjM3NSAyMi44NjQgMjUuMzc1IDIxQzI1LjM3NSAxOS4xMzYgMjMuODY0IDE3LjYyNSAyMiAxNy42MjVDMjAuMTM2IDE3LjYyNSAxOC42MjUgMTkuMTM2IDE4LjYyNSAyMUMxOC42MjUgMjIuODY0IDIwLjEzNiAyNC4zNzUgMjIgMjQuMzc1WiIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMjguMzY0MSAyNy4zNjM4TDIzLjU5MDcgMzIuMTM3MkMyMy4xNjg5IDMyLjU1ODYgMjIuNTk2OSAzMi43OTU0IDIyLjAwMDYgMzIuNzk1NEMyMS40MDQyIDMyLjc5NTQgMjAuODMyMyAzMi41NTg2IDIwLjQxMDQgMzIuMTM3MkwxNS42MzU5IDI3LjM2MzhDMTQuMzc3MyAyNi4xMDUxIDEzLjUyMDEgMjQuNTAxNSAxMy4xNzI5IDIyLjc1NTZDMTIuODI1NyAyMS4wMDk4IDEzLjAwMzkgMTkuMjAwMiAxMy42ODUxIDE3LjU1NTdDMTQuMzY2MyAxNS45MTEyIDE1LjUxOTkgMTQuNTA1NyAxNi45OTk5IDEzLjUxNjdDMTguNDggMTIuNTI3OCAyMC4yMiAxMiAyMiAxMkMyMy43OCAxMiAyNS41MjAxIDEyLjUyNzggMjcuMDAwMSAxMy41MTY3QzI4LjQ4MDEgMTQuNTA1NyAyOS42MzM3IDE1LjkxMTIgMzAuMzE0OSAxNy41NTU3QzMwLjk5NjEgMTkuMjAwMiAzMS4xNzQzIDIxLjAwOTggMzAuODI3MSAyMi43NTU2QzMwLjQ3OTkgMjQuNTAxNSAyOS42MjI3IDI2LjEwNTEgMjguMzY0MSAyNy4zNjM4VjI3LjM2MzhaIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0zMC4wMjk0IDIuNTg5NzFDMjcuNTU1OCAxLjU2NTMyIDI0Ljg0MzkgMSAyMiAxQzEwLjQwMiAxIDEgMTAuNDAyIDEgMjJDMSAzMy41OTggMTAuNDAyIDQzIDIyIDQzQzMzLjU5OCA0MyA0MyAzMy41OTggNDMgMjJDNDMgMTkuODUwNSA0Mi42NzcgMTcuNzc2MyA0Mi4wNzcgMTUuODIzNSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMzIgOUg0MiIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMzcgNFYxNCIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K")
    loc_img_box.append(loc_img)

    add_icon_box.append(loc_img_box,loc_text_box)
    document.querySelector("#address").append(add_icon_box)

}

// console.log(address)
// display data addres
var select=document.createElement("select")
var sub=document.createElement("button")
sub.innerText="submit"
select.setAttribute("id","select")
var add_value;
var opt0=document.createElement("option")
opt0.value="none"
opt0.innerText="select address"
select.append(opt0)
select.addEventListener("change",function(){
console.log(select.value)

var rem=display_add(address[select.value])
})

var select_delivery_add=document.createElement("div")
for(var i=0;i<address.length;i++){
    var opt1=document.createElement("option")
    opt1.innerText="adddres"+(i+1)
    opt1.value=i
    select.append(opt1)
    console.log(address[i])
}
document.querySelector("#display_add>div").append(select);
// display_add()
function display_add(data){
    document.querySelector("#display_add").innerHTML=null;
    var add_box=document.createElement("div")
    var name=document.createElement("p")
    name.innerText=data.name
    var  mobile=document.createElement("p")
    mobile.innerText=data.mobile
    var  add1=document.createElement("p")
    add1.innerText=data.address
    var  add2=document.createElement("p")
    add2.innerText=data.address2;
    var  city=document.createElement("p")
    city.innerText=data.city;
    var  state=document.createElement("p")
    state.innerText=data.state;
    var  zip=document.createElement("p")
    zip.innerText=data.zip;
    
    add_box.append(name,mobile,add1,add2,city,state,zip)
    document.querySelector("#display_add").append(add_box,sub)
}
sub.addEventListener("click",function(){
    del_add_del(address)
})
function del_add_del(addr){
console.log(addr)
localStorage.setItem("delivery_address",json.stringify(addr))
}

var total_price=JSON.parse(localStorage.getItem("total_price"))

if(total_price>0){
    var discount=0.1;
    //price saving 
    var pricesaving=Math.floor(total_price*discount);
    //delivery charge
    var del_cahrge=30;
    //total_bill
    var total_bill=del_cahrge+total_price-pricesaving;
    // bill data 

   // bill data dispaly

//    <div>
//    <div ><img  src="https://cdn-icons-png.flaticon.com/512/34/34568.png" alt="img">----------</div>
//    <div ><img  src="" alt="img"></div>
//    <div ><img  src="" alt="img"></div>
//    <div ><img  src="" alt="img"></div>
// </div>
var img_status_box=document.createElement("div")
img_status_box.style.backgroundColor=" rgb(211, 255, 246)";
img_status_box.style.height="100px"
img_status_box.style.display="flex";
var img1_box=document.createElement("div")
var img1=document.createElement("img")
img1.setAttribute("src","")
img1_box.append(img1)
var img2_box=document.createElement("div")
var img2=document.createElement("img")
img1.setAttribute("src","")
img1_box.append(img1)

var img3_box=document.createElement("div")
var img3=document.createElement("img")
img1.setAttribute("src","")
img1_box.append(img1)

var img4_box=document.createElement("div")
var img4=document.createElement("img")
img1.setAttribute("src","")
img1_box.append(img1)

img_status_box.append(img1_box,img2_box,img3_box,img3_box,img4_box)
document.querySelector("#cart_status").append(img_status_box)

if(total_bill>0){
var coupan_code_box=document.createElement("div")
var bill_details=document.createElement("div")
var total_item_price=document.createElement("div")
total_item_price.setAttribute("class","price_box")

var price_saving=document.createElement("div")
price_saving.setAttribute("class","price_box")

var cart_amaount=document.createElement("div")
cart_amaount.setAttribute("class","price_box")

var delivery_charge=document.createElement("div")
delivery_charge.setAttribute("class","price_box")
var total_pay=document.createElement("div")
total_pay.setAttribute("class","price_box")

var payment_box=document.createElement("div")
payment_box.setAttribute("class","price_box")
payment_box.style.border="2px solid red"


// coupan_code_box
// var cuopuan_applied=document.createElement("div")
// cuopuan_applied.setAttribute("id","cuopuan_applied")
// var dis_logo=document.createElement("div")
// var dis_logo_img=document.createElement("img")
// dis_logo_img.style.width="30px"
// dis_logo_img.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTohkmWAV7uayiY53-4TcYfYSOeMMMiGkzghg&usqp=CAU")
// dis_logo.append(dis_logo_img)

// //add code data Apply Coupon/Referral
// var coupan_code_text_box=document.createElement("div")
// coupan_code_text_box.style.cursor="pointer"

// coupan_code_text_box.addEventListener("click",function(){
//     checkcode()
// })
// var coupan_code_text=document.createElement("p")
// coupan_code_text.innerText="Apply Coupon/Referral";
// coupan_code_text_box.append(coupan_code_text);

// // add to > on 
// var arrow_box=document.createElement("div")
// var arrow_text_box=document.createElement("h5")
// arrow_text_box.innerText=">"
// arrow_box.append(arrow_text_box)

// cuopuan_applied.append(dis_logo,coupan_code_text_box,arrow_box)
// coupan_code_box.append(cuopuan_applied)

// bill_details
var bill_text=document.createElement("h4")
bill_text.innerText="Bill Details";
bill_details.append(bill_text)

//total price:

var total_item_price_box=document.createElement("div")
var total_item_cal_price=document.createElement("div")

var total_item_price_text=document.createElement("p")
total_item_price_text.innerText="Total Item Price";
total_item_price_box.append(total_item_price_text)

var total_item_cal_price_text=document.createElement("h5")
total_item_cal_price_text.innerText=total_price;
total_item_cal_price.append(total_item_cal_price_text)

total_item_price.append(total_item_price_box,total_item_cal_price)

//price saving text
var total_saving_price=document.createElement("div")
var total_price_saving=document.createElement("div")

var total_saving_price_text=document.createElement("p")
total_saving_price_text.innerText="Price Savings";
total_item_price_box.append(total_saving_price_text)

var total_item_cal_price_text=document.createElement("h5")
total_item_cal_price_text.innerText=-pricesaving
total_item_cal_price.append(total_item_cal_price_text)

total_item_price.append(total_item_price_box,total_item_cal_price);

//line break;
var hr1=document.createElement("hr")

//cart amount 
var cart_box_1=document.createElement("div")
var cart_box_2=document.createElement("div")
var cart_box_1_text=document.createElement("p")
cart_box_1_text.innerText="Cart Amount";
cart_box_1.append(cart_box_1_text)

var cart_box_2_text=document.createElement("h6")
cart_box_2_text.innerText=total_price-pricesaving;
cart_box_2.append(cart_box_2_text)

cart_amaount.append(cart_box_1,cart_box_2)

//delivery charge
var del_char_box1=document.createElement("div")
var del_char_box2=document.createElement("div")
var del_char_box1_text=document.createElement("p")
del_char_box1_text.innerText="Delivery Charges"
var del_char_box2_text=document.createElement("h6")
del_char_box2_text.innerText=del_cahrge
del_char_box1.append(del_char_box1_text)
del_char_box2.append(del_char_box2_text)
delivery_charge.append(del_char_box1,del_char_box2)

var hr2=document.createElement("hr")

// total pay

var pay_box1=document.createElement("div")
var pay_box2=document.createElement("div")
var pay_box3=document.createElement("div")
var pay_box1_text=document.createElement("p")
pay_box1_text.innerText="To Pay"
var pay_box2_text=document.createElement("p")
pay_box2_text.innerText="saving"+pricesaving
var pay_box3_text=document.createElement("p")
pay_box3_text.innerText=total_bill;
pay_box1.append(pay_box1_text)
pay_box2.append(pay_box2_text)
pay_box3.append(pay_box3_text)
total_pay.append(pay_box1,pay_box2,pay_box3)

///payment_box
var box1_payement=document.createElement("div")
var box2_payement=document.createElement("div")
var box1_1_text=document.createElement("p")
var box1_2_text=document.createElement("p")
box1_1_text.innerText="Total"
box1_2_text.innerText=total_bill;
box1_payement.append(box1_1_text,box1_2_text)

// var box_address=document.createElement("div")
var box_address_text=document.createElement("h6")
box_address_text.innerText="PROCCED";
box_address_text.style.cursor="pointer"
box_address_text.addEventListener("click",function (){
    window.location.href="dilevery.html"
})
box2_payement.append(box_address_text)
payment_box.append(box1_payement,box2_payement)

localStorage.setItem("total_bill_data",JSON.stringify(payment_box))
//append on scren 
var mainbil_box=document.createElement("div")

mainbil_box.style.margin="20px"
mainbil_box.append(bill_details,total_item_price,hr1,cart_amaount,delivery_charge,hr2,total_pay,payment_box)
document.querySelector("#bill_data").append(mainbil_box)
}
}
