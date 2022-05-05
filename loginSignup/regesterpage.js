document.querySelector("#createA").addEventListener("submit",createAccount)
var arr=JSON.parse(localStorage.getItem("myLocal"))||[]

function createAccount(event){
    event.preventDefault();

    var name=document.querySelector("#name").value
  var last=document.querySelector("#last").value
  var emailAdd=document.querySelector("#emailAdd").value
  
console.log(name,last,emailAdd)

  var userData={
    nameuser:name,
    lastname:last,
    email:emailAdd
    
  }

  // console.log(dataObj)
  arr.push(userData)
localStorage.setItem("myLocal",JSON.stringify(arr))

  }