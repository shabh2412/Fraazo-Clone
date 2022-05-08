var bestDeals = [];

var products = JSON.parse(localStorage.getItem('products')) || [];

const shuffled = products.sort(()=> 0.5 - Math.random());
bestDeals = shuffled.slice(0,20);

var slickDiv = document.querySelector('.slick-content');
console.log(slickDiv);

displaySlick(bestDeals);
function displaySlick(data) {
    slickDiv.innerHTML = null;
    data.forEach(el => {
        // console.log(el);
        card = document.createElement('div');
        card.className = 'card';

        img = document.createElement('img');
        img.className = 'card-img-top bg-light';

        img.src = el.image;
        img.alt = el.name;

        cardBody = document.createElement('div');
        cardBody.className = 'card-body bg-white';
        
        productName = document.createElement('p');
        productName.innerText = el.name;
        productName.className = 'productName fs-14';

        priceQtyBtn = document.createElement('div');
        priceQtyBtn.className = 'price-qty-btn d-flex justify-content-between align-items-center';

        priceQtyDiv = document.createElement('div');
        priceQtyDiv.className = 'price-qty';
        qty = document.createElement('p');
        qty.innerText = el.qty + " " + el.metric;
        qty.className = 'qty fs-13';

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
        btnDiv = document.createElement('div');
        btnDiv.className = 'addToCartButton';
        
        btn = document.createElement('div');
        btn.className = 'btn btn-outline-cart rounded-pill text-uppercase px-3 py-1 d-flex align-items-center';
        btn.innerHTML = `
            <i class="fa-solid fa-cart-plus"></i>
            <p>ADD</p>
        `;
        btn.addEventListener('click',function() {
            addToCart(el);
        })
        btnDiv.append(btn);

        priceQtyBtn.append(priceQtyDiv,btnDiv);

        cardBody.append(productName,priceQtyBtn);

        card.append(img,cardBody);
        console.log(card);
        slickDiv.append(card);
    });
    console.log(slickDiv);
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