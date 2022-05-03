var sampleData = 
   
    {
        name : "Alphonso Mango Devgad",
        image : "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/329/original/data?1616795305",
        quantity : 6+"pcs",
        price : 479,
        stprice : 600,
    }
   
   





displayData(sampleData)
  function displayData(sampleData){
    var pic=document.createElement("img");
    pic.setAttribute("src",sampleData.image);
    var name=document.createElement("h2");
    name.innerText=sampleData.name;
    var qty=document.createElement("p");
    qty.innerText=sampleData.quantity;
    var price=document.createElement("p");
    price.innerText=sampleData.price;
    var stprice=document.createElement("p");
    stprice.innerText=sampleData.stprice;
    var btn=document.createElement("button");
    btn.innerText="ADD";

  var sub=document.createElement("div");
  sub.append(price,stprice);
  
  var fs=document.querySelector("#fs").append(name,qty,sub,btn);


    var first=document.querySelector("#first").append(pic);
    var second=document.querySelector("#second").append(fs);
          document.querySelector("#main").append(first,second);
  }

