prod = {
    "id": 0,
    "name": "Rishabh Panesar",
    "image": "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/329/original/data?1616795305",
    "qty": "4",
    "metric": "pcs",
    "currentPrice": "200",
    "benefits": "- Alphanso mango also very healthy highly contains vitamins like Vitamin E, Vitamin A, Carotene and minerals like Magnesium, Manganese, Phosphorus. - Did you know it helps to regulating cholestrol levels in body and digestion process by adding mango in your diet during summer season. It can be used in dried form as well and used as part of salads. - It is also season best fruit to increases eye sight, prevents night blindness and dry eyes health issues.\n",
    "info": "- Alphanso mango also very healthy highly contains vitamins like Vitamin E, Vitamin A, Carotene and minerals like Magnesium, Manganese, Phosphorus. - Did you know it helps to regulating cholestrol levels in body and digestion process by adding mango in your diet during summer season. It can be used in dried form as well and used as part of salads. - It is also season best fruit to increases eye sight, prevents night blindness and dry eyes health issues.\n",
    "oldPrice": "150"
}

var categories = ['mangoes','fruits','vegetables','herbs','dry fruits','kitchen staples'];
var products = JSON.parse(localStorage.getItem('products')) || [];
arr = [prod,prod,prod,prod,prod,prod,prod];
var filterDiv = document.querySelector('#filterDiv');
var selectedFilter = localStorage.getItem('currentFilter') || categories[0];

categories.forEach(function (el) {
    let btnDiv = document.createElement('div');
    let btn = document.createElement('button');
    btn.classList = "btn text-capitalize";
    btn.id = el;
    btn.innerHTML = `<span>&minus;</span> ${el}`;
    btn.addEventListener('click',function() {
        applyFilter(el);
    });
    btnDiv.append(btn);
    filterDiv.append(btnDiv);
});

function applyFilter(elem) {
    selectedFilter = elem;
    console.log(selectedFilter);
    displayProducts();
}

var productSection = document.querySelector('#productSection');
var productsDisplay = document.querySelector('#productsDisplay');

displayProducts();

function displayProducts() {
    productsDisplay.innerHTML = null;
    // console.log(productsDisplay);
    let filterName = document.querySelector("#filterName");
    filterName.innerText = selectedFilter;
    let temp = products.filter(function(el) {
        return el.category == selectedFilter;
    })
    // console.log(temp);
    temp.forEach(function(el){
        // console.log(el);
        let col = document.createElement('div');
        col.className = 'col col-xl-3 col-lg-4 col-md-6 col-sm-12';
        let card = document.createElement('div');
        card.className = 'card';

        let img = document.createElement('img');
        img.className = 'card-img-top bg-light w-100';

        img.src = el.image;
        img.alt = el.name;
        img.addEventListener('click',function(){
            saveItem(el);
        })
        
        let cardBody = document.createElement('div');
        cardBody.className = 'card-body bg-white';
        
        let productName = document.createElement('p');
        productName.innerText = el.name;
        productName.className = 'productName fs-14';
        productName.addEventListener('click',function(){
            saveItem(el);
        })
        
        let priceQtyBtn = document.createElement('div');
        priceQtyBtn.className = 'price-qty-btn d-flex justify-content-between align-items-center';
        
        let priceQtyDiv = document.createElement('div');
        priceQtyDiv.addEventListener('click',function(){
            saveItem(el);
        })
        priceQtyDiv.className = 'price-qty';
        let qty = document.createElement('p');
        qty.innerText = el.qty;
        qty.className = 'qty fs-13';
        let units= document.createElement('span');
        if(el.metric=='g') {
            units.innerText = el.metric;
        }
        else {
            units.innerText = " " + el.metric;
        }
        qty.append(units);
        
        let priceDiv = document.createElement('div');
        priceDiv.className = 'price fw-500';
        let price = document.createElement('p');
        price.innerText = "₹"+el.currentPrice;
        price.className = 'fs-16';
        // console.log(el.oldPrice);
        priceDiv.append(price);
        if(el.oldPrice!==undefined) {
            let oldPrice = document.createElement('p');
            oldPrice.className = 'fs-16';
            oldPrice.innerText = "₹"+el.oldPrice;
            priceDiv.append(oldPrice);
        }
        
        
        priceQtyDiv.append(qty,priceDiv);
        let btnDiv = document.createElement('div');
        btnDiv.className = 'addToCartButton';
        
        let btn = document.createElement('div');
        btn.className = 'btn btn-outline-cart rounded-pill text-uppercase px-3 py-1 d-flex align-items-center';
        btn.innerHTML = `
            <i class="fa-solid fa-cart-plus"></i>
            <p>ADD</p>
        `;
        btnDiv.append(btn);
        btnDiv.addEventListener('click',function() {
            addToCart(el);
        })

        priceQtyBtn.append(priceQtyDiv,btnDiv);

        cardBody.append(productName,priceQtyBtn);

        card.append(img,cardBody);

        // console.log(card);
        col.append(card);
        productsDisplay.append(col);
    });
}

function saveItem(el){
    localStorage.setItem('currentItem',JSON.stringify(el));
    window.location.href="products.html";
}

// console.log(arr);