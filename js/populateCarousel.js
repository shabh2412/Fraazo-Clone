var carouselImages = [
    "https://s3.ap-south-1.amazonaws.com/fraazo-prod/web_ban/2476.png?1651539391",
    "https://s3.ap-south-1.amazonaws.com/fraazo-prod/web_ban/2477.png?1651539464",
    "https://s3.ap-south-1.amazonaws.com/fraazo-prod/web_ban/2478.png?1651539527",
    "https://s3.ap-south-1.amazonaws.com/fraazo-prod/web_ban/2482.png?1651539592",
    "https://s3.ap-south-1.amazonaws.com/fraazo-prod/web_ban/2166.png?1651056728"
];

carousel = document.querySelector('#heroCarousel');
carouselIndicators = document.querySelector('.carousel-indicators');
carouselInner = document.querySelector('.carousel-inner');

carouselImages.forEach(function(el,index){
    carouselItem = document.createElement('div');
    li = document.createElement('li');
    li.setAttribute('data-bs-target','#heroCarousel');
    li.setAttribute('data-bs-slide-to',index.toString());

    carouselItem.setAttribute('class','carousel-item');
    if(index==0) {
        carouselItem.setAttribute('class','carousel-item active');
        li.setAttribute('class','active');
    }
    img = document.createElement('img');
    img.setAttribute('src',el);
    img.setAttribute('class','d-block w-100');
    carouselItem.append(img);
    carouselIndicators.append(li);
    carouselInner.append(carouselItem);
})