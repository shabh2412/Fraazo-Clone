var cart=JSON.parse(localStorage.getItem("cart"))
console.log(cart)
displaydata(cart)

var total_price=JSON.parse(localStorage.getItem("total_price"))


var total_bill=JSON.parse(localStorage.getItem("total_price")) || 0

var total_price=cart.reduce(function(acc,ele){
    return acc+Number(ele.currentPrice)*(ele.count);
},0);
console.log(total_price)
localStorage.setItem("total_price",JSON.stringify(total_price))

if(total_price>0){
    var discount=0.1;
    //price saving 
    var pricesaving=Math.floor(total_price*discount);
    //delivery charge
    var del_cahrge=30;
    //total_bill
    var total_bill=del_cahrge+total_price-pricesaving;
    localStorage.setItem("total_bill",JSON.stringify(total_bill))
}else{
    total_bill=0;
    
}
// var total_price=cart.reduce(function(acc,ele){
//     return acc+Number(ele.currentPrice);
// },0);
// localStorage.setItem("total_price",JSON.stringify(total_price))

// total_bill_data()
// total_bill_data()
//checkcode() function  
var cupon_code=[{code1:"AMAN10"}]
function checkcode(){
   
    var enter_cup_code=document.createElement("input")
    var inpt_submit=document.createElement("submit")
    inpt_submit.innerText="Applly code";
    inpt_submit.style.cursor="pointer"
    inpt_submit.addEventListener("click",function(){
        if(enter_cup_code.value=="AMAN10"){
            alert("applied succefully")
        }else{
            alert("Wrong Code Applied")
        }
    })
    console.log(enter_cup_code.value)

    enter_cup_code.placeholder="Enter coupon";
    document.querySelector("#aman_bill_details").append(enter_cup_code,inpt_submit)
}

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
// payment_box.style.border="2px solid red"


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
coupan_code_text_box.style.cursor="pointer"

coupan_code_text_box.addEventListener("click",function(){
    checkcode()
})
var total_bill=JSON.parse(localStorage.getItem("total_bill"));

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
box1_2_text.innerText=total_bill
box1_payement.append(box1_1_text,box1_2_text)

// var box_address=document.createElement("div")
var box_address_text=document.createElement("h6")
box_address_text.innerText="SELECT ADDRESS";
box_address_text.style.cursor="pointer"
box_address_text.addEventListener("click",function (){
    window.location.href="address.html"
})
box2_payement.append(box_address_text)
payment_box.append(box1_payement,box2_payement)

localStorage.setItem("total_bill_data",JSON.stringify(payment_box))
//append on scren 
document.querySelector("#aman_bill_details").append(coupan_code_box,bill_details,total_item_price,hr1,cart_amaount,delivery_charge,hr2,total_pay,payment_box)

}

else{
    total_bill=0;


    // document.querySelector("#aman_cart_section").remove("#aman_cart_status")

    var empty_main_box=document.createElement("div")

    var em_box=document.createElement("div")

    var em_img=document.createElement("div")
    var img_box=document.createElement("img")
    img_box.setAttribute("src","https://fraazo.com/static/empty-cart-1468d71b9bd1d91401f28d1734cae373.svg")
    em_img.append(img_box)
    img_box.style.width="350px"

    var txt_box=document.createElement("div")
    var txt=document.createElement("h3")
    txt.innerText="Your Cart is Empty"
    txt_box.append(txt)

    var txt_box2=document.createElement("div")
    var txt2=document.createElement("p")
    txt2.innerText="Let's Add Some Items!"
    txt_box2.append(txt2)

    var letshoping=document.createElement("div")
    // letshoping.style.border="2px solid"
    var letshoping_inner_box=document.createElement("div")
    // letshoping_inner_box.style.border="2px solid";
    letshoping_inner_box.style.width="30%"
    letshoping_inner_box.style.cursor="pointer"
    letshoping_inner_box.addEventListener("click",function(){
        window.location.href="index.html"
    })
    letshoping_inner_box.style.height="60px"
    letshoping_inner_box.style.margin="auto"
    letshoping_inner_box.style.borderRadius="10px"
    letshoping_inner_box.style.display="flex"
    letshoping_inner_box.style.justifyContent="center"
    letshoping_inner_box.style.alignItems="center"
    letshoping_inner_box.style.backgroundColor="aqua"

    var letshoping_txt=document.createElement("p")
    letshoping_txt.innerText="START SHOPPING";
    letshoping_txt.style.fontWeight="bolder"
    letshoping_txt.style.color="white"

    letshoping_inner_box.append(letshoping_txt)
    letshoping.append(letshoping_inner_box)
    

    em_box.append(em_img,txt_box,txt_box2,letshoping)
    empty_main_box.append(em_box)
    empty_main_box.setAttribute("id","let-star")

    document.querySelector("#em").append(empty_main_box)



}




function displaydata(data){
    cart.forEach(function(ele){
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
        product_quantity.innerText=ele.qty*ele.count +" "+ele.metric;
        // quantity.append(product_quantity)
        prod_dis.append(prod_name,product_quantity)


//prod_count counter increase
        var btn1div=document.createElement("div")
        var btn2div=document.createElement("div")
        var div_count=document.createElement("div")
        var btn1=document.createElement("button")
        var btn2=document.createElement("button")
        var prod_h_count=document.createElement("div")

        prod_h_count.innerText=ele.count
        console.log(prod_h_count.innerHTML)
        div_count.append(ele.count+" "+ele.metric)

        btn1.innerText="-"
        btn2.innerText="+"

        btn2.addEventListener("click",function(){
            increaseCount(ele)
            window.location.reload()
        })
        btn1.addEventListener("click",function(){
            decreaseCount(ele)
            window.location.reload()
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



// counter 
function increaseCount(ele) {
    cart.forEach(function(elem) {
        if(elem.id== ele.id) {
          
            elem.count++;
        }
    })
    localStorage.setItem("cart",JSON.stringify(cart));
    displaydata(cart);
}
function decreaseCount(ele,index) {
    cart.forEach(function(elem) {
        if(elem.id== ele.id) {
            elem.count--;
        }
    })
    if(ele.count<1){
        delfun(ele,index)
    }
    localStorage.setItem("cart",JSON.stringify(cart));
    displaydata(cart);
}






// prod_price of price data

        var price_h4=document.createElement("h6")
        price_h4.innerText= "₹"+ele.currentPrice*ele.count;
        prod_price.append(price_h4)

//append data to localstorage to cart
        cart_box.append(prod_img,prod_dis,quantity,prod_count,prod_price,remove_cart)
        document.querySelector("#cart").append(cart_box)

    })
}


// removing function 
function delfun(ele,index){
    cart.splice(index,1)
    localStorage.setItem("cart",JSON.stringify(cart))
    console.log(cart)
    window.location.reload();
}



// quantityfunc(count) 
// var count=1;
// function quantityincfunc(ele){
//     count++;
//     console.log(count)
//     localStorage.setItem("number_item",JSON.stringify(count))
//     // window.location.reload()
// }
// function quantitydecfunc(ele){
//     count--;
//     localStorage.setItem("number_item",JSON.stringify(count))
    
//     // window.location.reload()
// }

// function decfunc(ele){
// console.log("click")
// }

function addrespage(){
    console.log("ckdid")
}
