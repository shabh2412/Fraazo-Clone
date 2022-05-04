 var sampleData = 
   
     {
         name : "Alphonso Mango Devgad",
         image : "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/329/original/data?1616795305",
         quantity : 6+"pcs",
         price : 479,
         stprice : 600,
         benefits:"- Devgad Alphanso mangoes are naturally grown in the Devgad district of Maharashtra region of India. - Devgad Alphonso has a stronger and thicker coat. Hence, they’re less prone to getting wrinkles. - 'Alphonso' originated from a Portuguese general’s name 'Afonso de Albuquerque'. - Alphonso mango is a very costly variety of fruit in the world also know for best in taste and aroma fruit.",
         info:"- Alphanso mango also very healthy highly contains vitamins like Vitamin E, Vitamin A, Carotene and minerals like Magnesium, Manganese, Phosphorus. - Did you know it helps to regulating cholestrol levels in body and digestion process by adding mango in your diet during summer season. It can be used in dried form as well and used as part of salads. - It is also season best fruit to increases eye sight, prevents night blindness and dry eyes health issues."
     }
   
   





 displayData(sampleData)
   function displayData(sampleData){
     var pic=document.createElement("img")
     pic.setAttribute("src",sampleData.image);

 var name=document.createElement("h4");
 name.innerText=sampleData.name;

 var qty=document.createElement("p");
 qty.innerText=sampleData.quantity;

 var price=document.createElement("p");
 price.innerText=sampleData.price;

 var stprice=document.createElement("p");
 stprice.innerText=sampleData.stprice;

 var btn=document.createElement("button");
 btn.innerHTML="<i class='fa-solid fa-cart-circle-plus'></i> ADD";

 
 var sub=document.createElement("div");
 sub.setAttribute("id","sub")
 sub.append(price,stprice);

 var fs=document.querySelector("#fs");
 fs.append(name,qty,sub,btn)

 var first=document.querySelector("#first").append(pic);

 var dsc=document.createElement("p")
 dsc.innerText="Description";
 dsc.style.cursor="pointer";
 dsc.addEventListener("click",function(){
  dscFunction()
 })

 
 var ben=document.createElement("p")
 ben.innerText="Benefits";
 ben.style.cursor="pointer";
 ben.addEventListener("click",function(){
  benFunction()
 })

 var info=document.createElement("p")
 info.innerText="Info";
 info.style.cursor="pointer";
 info.addEventListener("click",function(){
  infoFunction()
 })

 var sc=document.querySelector("#sc");
 sc.append(dsc,ben,info);

 var th=document.querySelector("#th");
 

 

     

 var second=document.querySelector("#second").append(fs,sc,th);

    //document.querySelector("#main").append(first);
  }
  function dscFunction()
  {
    th.innerText=sampleData.name;
  }

  function benFunction()
  {
    th.innerText=sampleData.benefits;
  }

  function infoFunction()
  {
    th.innerText=sampleData.info;
  }


