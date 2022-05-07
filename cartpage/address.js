var address_data= []

localStorage.setItem("address",JSON.stringify(address_data))
document.querySelector("#bill_data").append()

//add addres icon
addresicon()
function add_new_address(){
   var flat_box=documen.createElement("div")
   var flat_box_input=document.createElement("input")
//    var 

}
function addresicon(){
    var add_icon_box=document.createElement("div");
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
var total_bill_data=JSON.parse(localStorage.getItem("total_bill_data"))
console.log(total_bill_data)

/// collecting address form 


// biii data
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
box1_payement.append(box1_1_text,box1_2_text);

document.querySelector("").append()

