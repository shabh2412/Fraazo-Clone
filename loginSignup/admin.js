document.querySelector("#form").addEventListener("submit", addItem);
  var prod = JSON.parse(localStorage.getItem("shoppingItems")) || [];
  function addItem(event) {
    event.preventDefault();
    var name = document.querySelector("#name").value;
    var unit = document.querySelector("#name").value;
    var price = document.querySelector("#price").value;

    var image = document.querySelector("#img").value;

    var prodObj = {
      name: name,
      unit:name,
      price: price,
    
      image: image,
    };
    prod.push(prodObj);
    localStorage.setItem("shoppingItems", JSON.stringify(prod));
  }

  document.querySelector("button").addEventListener("click", function () {
    window.location.href = "prod1.html";
  });