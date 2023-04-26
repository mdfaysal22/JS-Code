const sliderImgs = [
    './img/img1.jpg',
    './img/img2.jpg',
    './img/img3.jpg',
    './img/img4.jpg',
    './img/img5.jpg',
    './img/img6.jpg'
];

let imgIndex = 0;

const slider = document.getElementById('slider-img');

setInterval(() => {
    if(imgIndex === sliderImgs.length){
        imgIndex = 0;
    }
    const sliderImage = sliderImgs[imgIndex];
    slider.setAttribute('src', sliderImage)
    imgIndex++;
}, 1500)