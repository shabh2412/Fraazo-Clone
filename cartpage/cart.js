var aman_cart_data=JSON.parse(localStorage.getItem("cart_data")) 
console.log(aman_cart_data)

displaydata(aman_cart_data)

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

        prod_h_count.innerText=ele.quantity;
        div_count.append(prod_h_count)

        btn1.innerText="-"
        btn2.innerText="+"

        btn1div.append(btn1)
        btn2div.append(btn2)

        prod_count.append(btn1div,div_count,btn2div)
// prod_price of price data
        var price_h4=document.createElement("h6")
        price_h4.innerText= "₹"+ele.price;
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


// total cost
var total_bill=JSON.parse(localStorage.getItem("totalcart_coast")) || 0
var total_price=0;
var total_price=aman_cart_data.reduce(function(acc,ele){
    return acc+Number(ele.price);
},0);

if(total_price>0){
    var discount=0.1;
    //price saving 
    var pricesaving=Math.floor(total_price*discount);
    //delivery charge
    var del_cahrge=30;
    //total_bill
    var total_bill=del_cahrge+total_price-pricesaving;
}else{
    total_bill=0;
}
console.log(total_price)
// discount coupan

localStorage.setItem("totalcart_coast",JSON.stringify(total_bill))
if(total_bill>0 ){
var checkout_text_box=document.createElement("div")
var checkout_text=document.createElement("p")
checkout_text.innerText="Checkout"
checkout_text_box.append(checkout_text)


var total_text_box=document.createElement("div")
var total_text=document.createElement("p")
total_text.innerText="Total"
total_text_box.append(total_text,total_bill)
document.querySelector("#total_bill").append(total_text_box)
document.querySelector("#checkout").append(checkout_text_box)
}
else{
    var checkout_text_box=document.createElement("div")
    var checkout_text=document.createElement("p")
    checkout_text.innerText="start shopping"
    checkout_text.style.cursor="pointer"
    checkout_text.addEventListener("click",gotofunc())
    checkout_text_box.append(checkout_text)
    
    
    var total_text_box=document.createElement("div")
    var total_text=document.createElement("p")
    // total_text.innerText="Total"
    // total_text_box.append(total_text,total_bill)
    document.querySelector("#total_bill").append(total_text_box)
    document.querySelector("#checkout").append(checkout_text_box)
}

function gotofunc(){
//    window.location.href="index.html"

}
function delfun(ele,index){
    aman_cart_data.splice(index,1)
    localStorage.setItem("cart_data",JSON.stringify(aman_cart_data))
    console.log(aman_cart_data)
    window.location.reload();
}