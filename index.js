// $('first_room').on('click', () => {
//     location.href = 'https://google.com';
//   });

let first_room=document.querySelector('.func')
let allcards=document.querySelector('.allcards')


function show(){
    location.href = 'https://www.booking.com/hotel/am/gostevoi-dom-general.ru.html?aid=356980&label=gog235jc-1DCAsoB0IUZ29zdGV2b2ktZG9tLWdlbmVyYWxIM1gDaAeIAQGYASG4ARfIAQzYAQPoAQGIAgGoAgO4AsKts6cGwAIB0gIkMTBlNzNmNzktZWVmMi00NDM1LWEzMzUtNzVmY2E4Zjk3YTk02AIE4AIB&sid=81b097aca2a24f108b85bdbb9bb4a857&keep_landing=1&sb_price_type=total&type=total&auth_success=1';
}


// 


const slides = document.querySelectorAll('.slide');
let index = 0;

function prevSlide(){
    slides[index].classList.remove('active');
    index--;

    if(index < 0)
        index = slides.length -1;

    slides[index].classList.add('active');      
}

document.querySelector('.prev').addEventListener('click', e => {
    prevSlide();
});

function nextSlide(){
    slides[index].classList.remove('active');
    index++;

    if(index > slides.length -1)
        index = 0;

    slides[index].classList.add('active');      
}

document.querySelector('.next').addEventListener('click', e => {
    nextSlide();
});