document.querySelector("#createA").addEventListener("submit",createAccount)
var arr=JSON.parse(localStorage.getItem("myLocal"))||[]

function createAccount(event){
    event.preventDefault();

    var number=document.querySelector("#mobile").value
    console.log(otp)
    if(OTP =="1137" ){
          window.location.href = "signup1.html";
        }
       


    var userData={
    userOTP:1137
    
  }
  arr.push(userData)
localStorage.setItem("myLocal",JSON.stringify(arr))

  }