var bestDeals = [];

var products = JSON.parse(localStorage.getItem('products')) || [];

const shuffled = products.sort(()=> 0.5 - Math.random());
bestDeals = shuffled.slice(0,20);
// for (let i = 0; i < 20; i++) {
//     index = Math.floor((Math.random() * 19) + 1);
//     bestDeals.push(products[index]);
// }

function displaySlick(data, slickDiv) {
    slickDiv.innerHTML = null;
    data.forEach(el => {
        // console.log(el);
        card = document.createElement('div');
        card.className = 'card';

        img = document.createElement('img');
        img.className = 'card-img-top bg-light';

        img.src = el.image;
        img.alt = el.name;
        img.addEventListener('click',function(){
            saveItem(el);
        })
        
        cardBody = document.createElement('div');
        cardBody.className = 'card-body bg-white';
        
        productName = document.createElement('p');
        productName.innerText = el.name;
        productName.className = 'productName fs-14';
        productName.addEventListener('click',function(){
            saveItem(el);
        })
        
        priceQtyBtn = document.createElement('div');
        priceQtyBtn.className = 'price-qty-btn d-flex justify-content-between align-items-center';
        
        priceQtyDiv = document.createElement('div');
        priceQtyDiv.className = 'price-qty';
        qty = document.createElement('p');
        qty.innerText = el.qty;
        qty.className = 'qty fs-13';
        units= document.createElement('span');
        if(el.metric=='g') {
            units.innerText = el.metric;
        }
        else {
            units.innerText = " " + el.metric;
        }
        qty.append(units);
        
        priceDiv = document.createElement('div');
        priceDiv.className = 'price fw-500';
        price = document.createElement('p');
        price.innerText = "₹"+el.currentPrice;
        price.className = 'fs-16';
        // console.log(el.oldPrice);
        priceDiv.append(price);
        if(el.oldPrice!==undefined) {
            oldPrice = document.createElement('p');
            oldPrice.className = 'fs-16';
            oldPrice.innerText = "₹"+el.oldPrice;
            priceDiv.append(oldPrice);
        }
        
        
        priceQtyDiv.append(qty,priceDiv);
        priceQtyDiv.addEventListener('click',function(){
            saveItem(el);
        })
        btnDiv = document.createElement('div');
        btnDiv.className = 'addToCartButton';
        
        btn = document.createElement('div');
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
        slickDiv.append(card);
    });
    // console.log(slickDiv);
}

function addToCart(el) {
    cart = JSON.parse(localStorage.getItem('cart')) || [];
    alreadyAdded = false;
    index = undefined;
    cart.forEach(function (elem,ind) {
        if(elem.id==el.id) {
            alreadyAdded = true;
            index = ind;
        }
    });
    if(alreadyAdded) {
        cart[index].count++;
    }
    else {
        el.count = 1;
        cart.push(el);
    }
    localStorage.setItem('cart',JSON.stringify(cart));
}

function saveItem(el){
    localStorage.setItem('currentItem',JSON.stringify(el));
    window.location.href="products.html";
}

var currentSlickDiv = document.querySelector('#bestDeals > .slick-content');
// console.log(slickDiv);

displaySlick(bestDeals, currentSlickDiv);


products = JSON.parse(localStorage.getItem('products')) || [];
// console.log(products);

fruits = products.filter(function (el) {
    return el.category == "fruits";
})
currentSlickDiv = document.querySelector('#fruitSection > .slick-content');
displaySlick(fruits, currentSlickDiv);

vegetables = products.filter( function (el) {
    return el.category == 'vegetables';
});
currentSlickDiv = document.querySelector('#vegetableSection > .slick-content');
displaySlick(vegetables, currentSlickDiv);

herbs = products.filter( function (el) {
    return el.category == 'herbs';
});
currentSlickDiv = document.querySelector('#herbSection > .slick-content');
displaySlick(herbs, currentSlickDiv);

dryFruits = products.filter( function (el) {
    return el.category == 'dry fruits';
});
currentSlickDiv = document.querySelector('#dryFruitSection > .slick-content');
displaySlick(dryFruits,currentSlickDiv);

kitchenStaples = products.filter( function (el) {
    return el.category == 'kitchen staples';
});
currentSlickDiv = document.querySelector('#kitchenStapleSection > .slick-content');
displaySlick(kitchenStaples, currentSlickDiv);

var mangoes = document.querySelector('#mangoes');
mangoes.addEventListener('click',function(){
    localStorage.setItem('currentFilter','mangoes');
});

var fruits = document.querySelector('#fruits');
fruits.addEventListener('click',function(){
    localStorage.setItem('currentFilter','fruits');
});

var vegetables = document.querySelector('#vegetables');
vegetables.addEventListener('click',function(){
    localStorage.setItem('currentFilter','vegetables');
});
var herbs = document.querySelector('#herbs');
herbs.addEventListener('click',function(){
    localStorage.setItem('currentFilter','herbs');
});

var dryFruits = document.querySelector('#dryFruits');
dryFruits.addEventListener('click',function(){
    localStorage.setItem('currentFilter','dry fruits');
});

var kitchenStaples = document.querySelector('#kitchenStaples');
kitchenStaples.addEventListener('click',function(){
    localStorage.setItem('currentFilter','kitchen staples');
});
