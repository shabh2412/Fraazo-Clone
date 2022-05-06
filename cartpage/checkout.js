var aman_cart_data=JSON.parse(localStorage.getItem("cart_data"))
console.log(aman_cart_data)

displaydata(aman_cart_data)

var total_bill=JSON.parse(localStorage.getItem("totalcart_coast")) || 0
var total_price=0;
var total_price=aman_cart_data.reduce(function(acc,ele){
    return acc+Number(ele.price);
},0);

total_bill_data()
total_bill_data()
function (){


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
var cuopuan_applied=document.createElement("div")
cuopuan_applied.setAttribute("id","cuopuan_applied")
var dis_logo=document.createElement("div")
var dis_logo_img=document.createElement("img")
dis_logo_img.style.width="30px"
dis_logo_img.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTohkmWAV7uayiY53-4TcYfYSOeMMMiGkzghg&usqp=CAU")
dis_logo.append(dis_logo_img)

//add code data Apply Coupon/Referral
var coupan_code_text_box=document.createElement("div")
var coupan_code_text=document.createElement("p")
coupan_code_text.innerText="Apply Coupon/Referral";
coupan_code_text_box.append(coupan_code_text);

// add to > on 
var arrow_box=document.createElement("div")
var arrow_text_box=document.createElement("h5")
arrow_text_box.innerText=">"
arrow_box.append(arrow_text_box)

cuopuan_applied.append(dis_logo,coupan_code_text_box,arrow_box)
coupan_code_box.append(cuopuan_applied)

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
box_address_text.innerText="SELECT ADDRESS";
box_address_text.style.cursor="pointer"
box_address_text.addEventListener("click",function (){
    addrespage()
})
box2_payement.append(box_address_text)
payment_box.append(box1_payement,box2_payement)

localStorage.setItem("total_bill_data",JSON.stringify(payment_box))
//append on scren 
document.querySelector("#aman_bill_details").append(coupan_code_box,bill_details,total_item_price,hr1,cart_amaount,delivery_charge,hr2,total_pay,payment_box)

}else{
    total_bill=0;
}
}

function displaydata(data){
    aman_cart_data.forEach(function(ele){
        // console.log(ele)


        var cart_box=document.createElement("div")
        cart_box.setAttribute("class","cart_box")


        var prod_img=document.createElement("div")
        var prod_dis=document.createElement("div")
        var quantity=document.createElement("div")

        var prod_count=document.createElement("div")
        prod_count.style.display="flex"

        var prod_price=document.createElement("div")
//cart image
        var cart_img=document.createElement("img")
        cart_img.setAttribute("src",ele.image)
        cart_img.style.width="100px"
        cart_img.style.height="100px"

        prod_img.append(cart_img)
//name products
        var prod_name=document.createElement("p")
        prod_name.innerText=ele.name;
        // prod_dis.append(prod_name)
        // console.log(ele.name)
// quantity 

        var product_quantity=document.createElement("p")
        product_quantity.innerText=ele.quantity;
        // quantity.append(product_quantity)
        prod_dis.append(prod_name,product_quantity)


//prod_count counter increase
        var btn1div=document.createElement("div")
        var btn2div=document.createElement("div")
        var div_count=document.createElement("div")
        var btn1=document.createElement("button")
        var btn2=document.createElement("button")
        var prod_h_count=document.createElement("div")

        prod_h_count.innerText=JSON.parse(localStorage.getItem("number_item"));
        div_count.append(prod_h_count)

        btn1.innerText="-"
        btn2.innerText="+"

        btn2.addEventListener("click",function(){
            quantityincfunc(ele)
        })
        btn1.addEventListener("click",function(){
            quantitydecfunc(ele)
        })
        btn1div.append(btn1)
        btn2div.append(btn2)
        
        prod_count.append(btn1div,div_count,btn2div)

// removed vart 
var remove_cart=document.createElement("p")
remove_cart.innerText="remove";
remove_cart.innerText="Remove";
remove_cart.style.color="blue"
remove_cart.style.cursor="pointer"
remove_cart.addEventListener("click",function (){
    delfun(ele)
})

// prod_price of price data

        var price_h4=document.createElement("h6")
        price_h4.innerText= "₹"+ele.price*JSON.parse(localStorage.getItem("number_item"));
        prod_price.append(price_h4)

//append data to localstorage to cart
        cart_box.append(prod_img,prod_dis,quantity,prod_count,prod_price,remove_cart)
        document.querySelector("#amancart_part").append(cart_box)

    })
}


// removing function 
function delfun(ele,index){
    aman_cart_data.splice(index,1)
    localStorage.setItem("cart_data",JSON.stringify(aman_cart_data))
    console.log(aman_cart_data)
    window.location.reload();
}

// quantityfunc(count) 
var count=1;
function quantityincfunc(ele){
    count++;
    console.log(count)
    localStorage.setItem("number_item",JSON.stringify(count))
    // window.location.reload()
}
function quantitydecfunc(ele){
    count--;
    localStorage.setItem("number_item",JSON.stringify(count))
    
    // window.location.reload()
}

// function decfunc(ele){
// console.log("click")
// }

function addrespage(){
    console.log("ckdid")
}
