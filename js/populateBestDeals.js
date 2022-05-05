var bestDeals = [
    {
        "name": "Alphonso Mango Devgad",
        "image": "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/329/original/data?1616795305",
        "qty": "6 pcs",
        "price": "449",
        "oldPrice": "600"
    },
    {
        "name": "Coconut Tender / Nariyal Pani",
        "image": "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/257/original/data?1612448669",
        "qty": "1 Pc",
        "price": "39",
        "oldPrice": "49"
    },
    {
        "name": "Tomato (1 Kg)",
        "image": "https://s3.ap-south-1.amazonaws.com/fraazo-prod/images/images/000/006/605/original/data?1649242645",
        "qty": "1 kg",
        "price": "42",
        "oldPrice": "45"
    },
    {
        "name": "Cabbage",
        "image": "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/VCAB12.png",
        "qty": "1 pc",
        "price": "9"
    },
    {
        "name": "Onion",
        "image": "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/BONI11.png",
        "qty": "1 kg",
        "price": "16",
        "oldPrice": "20"
    },
    {
        "name": "Bottle Gourd (Dudhi / Lauki)",
        "image": "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/VBOT12.png",
        "qty": "1 pc",
        "price": "9",
        "oldPrice": "12"
    },
    {
        "name": "Carrot Orange (Local)",
        "image": "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/FCAR1.png",
        "qty": "500 g",
        "price": "22",
        "oldPrice": "28"
    },
    {
        "name": "Capsicum (Shimla), Green Shimla Mirchi",
        "image": "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/VCAP12.png",
        "qty": "250 g",
        "price": "11",
        "oldPrice": "13"
    },
    {
        "name": "Potato / Batata",
        "image": "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/BPOT11.png",
        "qty": "1 kg",
        "price": "27",
        "oldPrice": "29"
    },
    {
        "name": "Garlic Bunch / Lahsun / Vellulipaya",
        "image": "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/VGAR12.png",
        "qty": "100 g",
        "price": "7",
        "oldPrice": "10"
    },
    {
        "name": "Chillies Green",
        "image": "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/VCHI22.png",
        "qty": "100 g",
        "price": "10",
        "oldPrice": "12"
    },
    {
        "name": "Sweet Corn Bunch (Bhutta)",
        "image": "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/ESWE13.png",
        "qty": "1 pc",
        "price": "16",
        "oldPrice": "22"
    },
    {
        "name": "Brinjal Black / Nagpur",
        "image": "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/VBRI22.png",
        "qty": "500 g",
        "price": "17",
        "oldPrice": "24"
    },
    {
        "name": "Beans Chawli",
        "image": "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/VCHA12.png",
        "qty": "250 g",
        "price": "14",
        "oldPrice": "19"
    },
    {
        "name": "Banana Robusta",
        "image": "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/FBAN14.png",
        "qty": "1 kg",
        "price": "41"
    },
    {
        "name": "Mango Badami",
        "image": "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/135/original/data?1612689931",
        "qty": "1 kg",
        "price": "109",
        "oldPrice": "119"
    },
    {
        "name": "Tasty Combo (2 Pcs Apple Royal Gala + 1 Kg Banana Robust...",
        "image": "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/240/original/data?1642616123",
        "qty": "1 unit",
        "price": "112",
        "oldPrice": "115"
    },
    {
        "name": "Mango Lalbhag Sindhura",
        "image": "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/250/original/data?1621065378",
        "qty": "1 Kg",
        "price": "225"
    },
    {
        "name": "Radish",
        "image": "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/VMUL12.png",
        "qty": "500 g",
        "price": "25",
        "oldPrice": "28"
    },
    {
        "name": "Beans Cluster (Gavar)",
        "image": "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/VGAV12.png",
        "qty": "250 g",
        "price": "12",
        "oldPrice": "16"
    },
    {
        "name": "Brinjal Kateri, Baingan",
        "image": "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/028/original/data?1616765740",
        "qty": "250 g",
        "price": "10",
        "oldPrice": "15"
    },
    {
        "name": "Drumstick",
        "image": "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/VDRU12.png",
        "qty": "100 g",
        "price": "4",
        "oldPrice": "6"
    },
    {
        "name": "Spring Onion",
        "image": "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/LSPR11.png",
        "qty": "250 g",
        "price": "14",
        "oldPrice": "20"
    }
]

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
        qty.innerText = el.qty;
        qty.className = 'qty fs-13';

        priceDiv = document.createElement('div');
        priceDiv.className = 'price fw-500';
        price = document.createElement('p');
        price.innerText = "₹"+el.price;
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
        btnDiv.append(btn);

        priceQtyBtn.append(priceQtyDiv,btnDiv);

        cardBody.append(productName,priceQtyBtn);

        card.append(img,cardBody);
        console.log(card);
        slickDiv.append(card);
    });
    console.log(slickDiv);
}
