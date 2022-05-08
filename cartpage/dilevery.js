

document.querySelector(".exp_not").addEventListener("click",function(){
    alert("Express delivery not available at the moment")
    // console.log("Express delivery not available at the moment")

})


document.querySelector("#tomorrow").addEventListener("click",function(){
    // console.log("sdf")
    var date_box=document.createElement("div")
    var del_date=document.createElement("label")
    del_date.innerText="Enter del. date:"
    var date_input=document.createElement("input")
    date_input.placeholder="date/month/year"

    var time_box=document.createElement("div")
    var del_time=document.createElement("label")
    del_time.innerText="Time:"
    var time_input=document.createElement("input")
    time_input.placeholder="Time:00 AM/PM"
    time_box.append(del_time,time_input)

    var sub=document.createElement("button")
    sub.innerText="submit"
    date_box.append(del_date,date_input,time_box,sub)
    document.querySelector("#today_date").append(date_box)
    var devery_time=[]
    var devery_time=JSON.parse(localStorage.getItem("devery_time")) || []
    sub.addEventListener("click",function(){
        document.querySelector("#today_date").innerHTML=null
        // document.querySelector("today_date").innerHTML=null;
        // localStorage.setItem("delivery_date",JSON.stringify(date_input.value))
        var cart_data=JSON.parse(localStorage.getItem("cart_data"))
        var del_obj={
            del_date:date_input.value,
            del_time:time_input.value
        };
        cart_data.push(del_obj)
        devery_time.push(del_obj)
        console.log(cart_data)
       localStorage.setItem("devery_time",JSON.stringify(devery_time));

    })
})


var total_price=JSON.parse(localStorage.getItem("total_price"))
console.log(total_price)
if(total_price>0){

    var discount=0.1;
    //price saving 
    var pricesaving=Math.floor(total_price*discount);
    //delivery charge
    var del_cahrge=30;
    //total_bill
    var total_bill=del_cahrge+total_price-pricesaving;


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
box2_payement.style.display="flex"
box2_payement.style.alignItems="center"
var box1_1_text=document.createElement("p")
var box1_2_text=document.createElement("p")
box1_1_text.innerText="Total"
box1_2_text.innerText=total_bill;
box1_payement.append(box1_1_text,box1_2_text)

// var box_address=document.createElement("div")
var box_address_text=document.createElement("h6")
box_address_text.innerText="make payment";
box_address_text.style.cursor="pointer"
box_address_text.addEventListener("click",function (){
    window.location.href="address.html"
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
