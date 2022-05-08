
// const setProducts =(name) =>{
//     const element= document.query("#cart_box");
//     var data=JSON.parse(localStorage.getItem(name))
//     if(data=null){
        
//     }

// }
// // {/* <div class="sem"><img src="${" alt=""></div> */}




var cart=JSON.parse(localStorage.getItem("cart")) 
console.log(cart)
// var min_quantity=1;
// localStorage.setItem("no_of_Min_quan",JSON.stringify(min_quantity))


displaydata(cart)

function displaydata(data){
    cart.forEach(function(ele){
        console.log(ele)
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
        product_quantity.innerText=ele.qty+" "+ele.metric;
        // quantity.append(product_quantity)
        prod_dis.append(prod_name,product_quantity)


//prod_count counter increase
        var btn1div=document.createElement("div")
        var btn2div=document.createElement("div")
        var div_count=document.createElement("div")
        var btn1=document.createElement("button")
        var btn2=document.createElement("button")
        var prod_h_count=document.createElement("div")

        prod_h_count.innerText=1;//please 
        div_count.append(prod_h_count)

        btn1.innerText="-"
        btn2.innerText="+"

        btn1div.append(btn1)
        btn2div.append(btn2)

        prod_count.append(btn1div,div_count,btn2div)
// prod_price of price data
        var price_h4=document.createElement("h6")
        price_h4.innerText= "₹"+ele.currentPrice;
        prod_price.append(price_h4)
// remove  cart 
var remove_cart=document.createElement("p")
remove_cart.innerText="remove";
remove_cart.innerText="Remove";
remove_cart.style.color="blue"
remove_cart.style.cursor="pointer"
remove_cart.addEventListener("click",function (){
    delfun(ele)
})

//append data to localstorage to cart
        cart_box.append(prod_img,prod_dis,quantity,prod_count,prod_price,remove_cart)
        document.querySelector("#cart_item").append(cart_box)

    })
}
//del function
function delfun(ele,index){
    cart.splice(index,1)
    localStorage.setItem("cart",JSON.stringify(cart))
    console.log(cart)
    window.location.reload();
}



// total cost

var total_bill=JSON.parse(localStorage.getItem("total_price")) || 0
var total_price=0;
var total_price=cart.reduce(function(acc,ele){
    return acc+Number(ele.currentPrice);
},0);
console.log(total_bill)
localStorage.setItem("total_price",JSON.stringify(total_price))

if(total_price>0){
    var discount=0.1;
    //price saving 
    var pricesaving=Math.floor(total_price*discount);
    //delivery charge
    var del_cahrge=30;
    //total_bill
    var total_bill=del_cahrge+total_price-pricesaving;
    localStorage.setItem("total_cart_cost",JSON.stringify(total_bill))
}else{
    total_bill=0;
    localStorage.setItem("total_bill",JSON.stringify(total_bill))
}
console.log(total_price)
// discount coupan

if(total_price>0 ){

///transparenet side  data
// display(JSON.parse(localStorage.getItem("products")))

function display(data){

    data.forEach(function(ele){

        // console.log(ele)
        var card=document.createElement("div")

        var img=document.createElement("img")
        img.setAttribute("src",ele.image)
        var titlename=document.createElement("p")
        titlename.textContent=ele.name

        var dic=document.createElement("p")
        dic.innerText=ele.quantity
        var price=document.createElement("p")
        price.innerText=ele.price

        var addcart=document.createElement("button")
        addcart.innerText="Add to Cart";
        addcart.style.color = "blue";
        addcart.style.cursor = "pointer";
        addcart.addEventListener("click", function () {
//writing logic here
        addcarfun(ele);
        });
        
        card.append(img,titlename,dic,price,addcart)
        document.querySelector("#cart_page>div").append(card)
    })
}


var cart=JSON.parse(localStorage.getItem("cart"))  || []

function  addcarfun(ele){
    aman_cart_data.push(ele)
    console.log(aman_cart_data)
    localStorage.setItem("cart_data",JSON.stringify(cart))
}

    var cart_item_0box=document.createElement("div")
    cart_item_0box.style.display="flex"
    cart_item_0box.style.justifyContent="space-between"
    cart_item_0box.style.alignItems="center"
    var cart_item_1box=document.createElement("div")
    var cart_item_2box=document.createElement("div")

    var cart_item_1box_txt=document.createElement("p")
    cart_item_1box_txt.innerText="My cart (Items 0)"
    cart_item_1box.append(cart_item_1box_txt)

    var cart_item_2box_txt=document.createElement("p")
    cart_item_2box_txt.innerText="X"
    cart_item_2box_txt.style.cursor="pointer"
    cart_item_2box_txt.addEventListener("click",function(){
        window.location.href="index.html"
    })
    cart_item_2box.append(cart_item_2box_txt)
    cart_item_0box.append(cart_item_1box,cart_item_2box)
    document.querySelector("#cart_head").append(cart_item_0box)

///cart buttom part 
    var checkout_text_box0=document.createElement("div")
    checkout_text_box0.setAttribute("id","cart_buttom")
    // checkout_text_box0.style.display="flex"
    // checkout_text_box0.style.justifyContent="space-around";
    checkout_text_box0.style.backgroundColor="aqua"

    // checkout_text_box0.style.border="2px solid black"
    checkout_text_box0.style.borderRadius="10px"

    var checkout_text_box=document.createElement("div")
    // checkout_text_box.style.border="2px solid red"
    var checkout_text=document.createElement("p")
    checkout_text.innerText="Checkout"
    checkout_text.style.cursor="pointer"
    checkout_text.addEventListener("click",function(){
        window.location.href="checkout.html"
    })
    checkout_text.style.color="white"
    checkout_text.style.fontWeight="bolder"

    checkout_text_box.append(checkout_text)

    var total_text_box=document.createElement("div")
    // total_text_box.style.border="2px solid red"
    var total_text=document.createElement("p")
    total_text.innerText="Total"
    total_text_box.append(total_text,total_price)
    checkout_text_box0.append(total_text_box,checkout_text_box)

    document.querySelector("#checkout_cart").append(checkout_text_box0)
}

else{

    var cart_item_0box=document.createElement("div")
    cart_item_0box.style.display="flex"
    cart_item_0box.style.justifyContent="space-between"
    cart_item_0box.style.fontWeight="bold"
    cart_item_0box.style.margin="0px 10px 0px 10px"
    var cart_item_1box=document.createElement("div")
    var cart_item_2box=document.createElement("div")

    var cart_item_1box_txt=document.createElement("p")
    cart_item_1box_txt.innerText="My cart (Items 0)"
    cart_item_1box.append(cart_item_1box_txt)

    var cart_item_2box_txt=document.createElement("p")
    cart_item_2box_txt.innerText="X"
    cart_item_2box_txt.style.cursor="pointer"
    cart_item_2box_txt.addEventListener("click",function(){
        window.location.href="index.html"
    })
    
    
    cart_item_2box.append(cart_item_2box_txt)
    cart_item_0box.append(cart_item_1box,cart_item_2box)
    document.querySelector("#cart_head").append(cart_item_0box)

    var cart_em_box=document.createElement("div")
    // cart_em_box.style.border="2px solid red"
    cart_em_box.style.textAlign="center"
    cart_em_box.style.margin="10px"
    
    var cart_em_box_img=document.createElement("div")
    var cart_oppps_img=document.createElement("img")
    cart_oppps_img.style.width="250px"
    cart_oppps_img.style.height="auto"

    cart_oppps_img.setAttribute("src","https://fraazo.com/static/empty_cart-179e6f6fba16d735b11c40893e733492.png")
    cart_em_box_img.append(cart_oppps_img)

    var cart_em_box_txt=document.createElement("div")
    var cart_em_opps_txt=document.createElement("h5")
    cart_em_opps_txt.innerText="Whoops... Cart is empty"
    cart_em_box_txt.append(cart_em_opps_txt)

    var cart_em_box_txt_para1=document.createElement("p")
    cart_em_box_txt_para1.innerText="Add some fruits, veggies and"
    var cart_em_box_txt_para2=document.createElement("p")
    cart_em_box_txt_para2.innerText="dairy products to your cart."
    cart_em_box_txt_para2.style.margin="0px"
    cart_em_box_txt_para2.style.padding="0px"
    cart_em_box_txt_para1.style.margin="0px"
    cart_em_box_txt_para1.style.padding="0px"
    var br=document.createElement("br")

    var cart_em_box_letsshopping=document.createElement("div")
    
    var cart_em_box_letsshopping_button=document.createElement("button")
    cart_em_box_letsshopping_button.addEventListener("click",function(){
        window.location.href="index.html"
    })
    cart_em_box_letsshopping_button.innerText="Let's Shop!"
    cart_em_box_letsshopping_button.style.fontWeight="bold"
    cart_em_box_letsshopping.append(cart_em_box_letsshopping_button)
    cart_em_box_letsshopping_button.style.backgroundColor="aqua"
    cart_em_box_letsshopping_button.style.padding="10px"
    cart_em_box_letsshopping_button.style.marginTop="20px"
    cart_em_box_letsshopping_button.style.border="0px"
    cart_em_box_letsshopping_button.style.borderRadius="10px"


    cart_em_box.append(cart_em_box_img,cart_em_box_txt,cart_em_box_txt_para1,cart_em_box_txt_para2,cart_em_box_letsshopping)
    document.querySelector("#cart_item").append(cart_em_box)

}

function gotofunc(){
//    window.location.href="index.html"
}
