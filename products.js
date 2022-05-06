 var sampleData = 
   
     {
         name : "Alphonso Mango Devgad",
         image : "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/329/original/data?1616795305",
         quantity : 6,
         price : 449,
         stprice : 455,
         benefits:"- Devgad Alphanso mangoes are naturally grown in the Devgad district of Maharashtra region of India. - Devgad Alphonso has a stronger and thicker coat. Hence, they’re less prone to getting wrinkles. - 'Alphonso' originated from a Portuguese general’s name 'Afonso de Albuquerque'. - Alphonso mango is a very costly variety of fruit in the world also know for best in taste and aroma fruit.",
         info:"- Alphanso mango also very healthy highly contains vitamins like Vitamin E, Vitamin A, Carotene and minerals like Magnesium, Manganese, Phosphorus. - Did you know it helps to regulating cholestrol levels in body and digestion process by adding mango in your diet during summer season. It can be used in dried form as well and used as part of salads. - It is also season best fruit to increases eye sight, prevents night blindness and dry eyes health issues."
     }
   
   





 displayData(sampleData)
   function displayData(sampleData){
     var pic=document.createElement("img")
     pic.setAttribute("src",sampleData.image);

 var name=document.createElement("h4");
 name.innerText=sampleData.name;

 var qty=document.createElement("div");
 qty.innerText=sampleData.quantity+" pcs";

 var sym=document.createElement("div");
 sym.setAttribute("id","sym")
 sym.innerHTML="<i class='fa-solid fa-circle-info'></i>";

 var combo=document.createElement("div");
 combo.setAttribute("id","comb")
 combo.append(qty,sym);

 var price=document.createElement("p");
 price.innerText="₹"+sampleData.price;

 var stprice=document.createElement("p");
 stprice.innerText="₹"+sampleData.stprice;

 var btn=document.createElement("button");
 btn.innerHTML="<i class='fa-solid fa-cart-plus'></i><span> ADD</span>";
 
 var sub=document.createElement("div");
 sub.setAttribute("id","sub")
 sub.append(price,stprice);

 var fs=document.querySelector("#fs");
 fs.append(name,combo,sub,btn)

 var first=document.querySelector("#first").append(pic);

 var dsc=document.createElement("h5")
 dsc.setAttribute("id","ds")
 dsc.innerText="Description";
 dsc.style.cursor="pointer";
 dsc.addEventListener("click",dscFunction)
  
 var ben=document.createElement("h5")
 ben.innerText="Benefits";
 ben.setAttribute("id","bn")
 ben.style.cursor="pointer";
 ben.addEventListener("click",function(){
  benFunction()
 })

 var info=document.createElement("h5")
 info.innerText="Info";
 info.setAttribute("id","inf")
 info.style.cursor="pointer";
 info.addEventListener("click",function(){
  infoFunction()
 })

 var sc=document.querySelector("#sc");
 sc.append(dsc,ben,info);

 var th=document.querySelector("#th");
 
var second=document.querySelector("#second").append(fs,sc,th);

   
  }
  function dscFunction()
  {
    th.innerText=sampleData.name;
    document.querySelector("#ds").style.color="black";
    document.querySelector("#bn").style.color="grey";
    document.querySelector("#inf").style.color="grey";
    document.querySelector("#ds").style.u="green";
    document.querySelector("#bn").style.u="none";
    document.querySelector("#inf").style.u="none";
   
  }

  function benFunction()
  {
    
    th.innerText=sampleData.benefits;
    document.querySelector("#ds").style.color="grey";
    document.querySelector("#bn").style.color="black";
    document.querySelector("#inf").style.color="grey";
    document.querySelector("#ds").style.u="none";
    document.querySelector("#bn").style.u="green";
    document.querySelector("#inf").style.u="none";
  }

  function infoFunction()
  {
    th.innerText=sampleData.info;
    document.querySelector("#ds").style.color="grey";
    document.querySelector("#bn").style.color="grey";
    document.querySelector("#inf").style.color="black";
    document.querySelector("#ds").style.u="none";
    document.querySelector("#bn").style.u="none";
    document.querySelector("#inf").style.u="green";
  }


