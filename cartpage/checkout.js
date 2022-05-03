var aman_cart_data=JSON.parse(localStorage.getItem("cart_data"))
console.log(aman_cart_data)

displaydata(aman_cart_data)

function displaydata(data){
    aman_cart_data.forEach(function(ele){
        console.log(ele)

        var box_cart=document.createElement("div");
        var cart_sub_cart=document.createElement("div")
        cart_sub_cart.setAttribute("id","subcart")
        
        var billbox=document.createElement("div")
        billbox.setAttribute("id","billbox")
        var coupan_box=document.createElement("div")
        var bill_details=document.createElement("div")
        var total_item_price=document.createElement("div")
        var price_saving=document.createElement("div")
        var cart_amout=document.createElement("div")
        var delivery_charge=document.createElement("div")
        var total_pay=document.createElement("div")


        var payment_box=document.createElement("div")


        var prod_img=document.createElement("div")
        var prod_dis=document.createElement("div")
        var prod_count=document.createElement("div")
        prod_count.setAttribute("id","counter")
        var prod_price=document.createElement("div")

        var img=document.createElement("img")
        img.setAttribute("src",ele.image)
        prod_img.append(img)

        var titlename=document.createElement("p")
        titlename.textContent=ele.name;
        
        var dic=document.createElement("p")
        dic.innerText=ele.quantity
        prod_dis.append(titlename,dic)

        var btn1=document.createElement("button")
        btn1.setAttribute("id","btn1")
        btn1.innerText="-";
        btn1.addEventListener("click",function(){
            decfunc(ele)
        })

        var btn2=document.createElement("button")
        btn2.setAttribute("id","btn2")
        btn2.innerText="+"

        var p_count=document.createElement("div")
        p_count.style.padding="0px 10px 0px 10px"
        p_count.style.border+="2px solid red"
        p_count.style.display="flex"
        p_count.style.justifyContent="center"
        p_count.style.alignItems="center"
        var p=document.createElement("p")
        p.innerText=1;
        p_count.append(p)
        
      


        prod_count.append(btn1,p_count,btn2)
        var price=document.createElement("p")
        price.innerText=ele.price
        prod_price.append(price)


        cart_sub_cart.append(prod_img,prod_dis,prod_count,prod_price)
        box_cart.append(cart_sub_cart)
        document.querySelector("#aman_checkout").append(box_cart)
        
    })
}

function decfunc(ele){
console.log("click")
}
