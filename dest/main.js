let btmenu = document.querySelector('.btnmenu__list');
let overlaynav = document.querySelector('.overlaynav');

let menu = document.querySelector('.menu')
let header = document.querySelector('header')

menu.addEventListener('click', function (e) {
    e.stopPropagation();
    btmenu.style.display = 'block';
    this.style.display = 'none'
    header.style.display = 'none'
    overlaynav.style.display = 'block';
});

function preventDefault(e) {
    e.preventDefault();
}
document.querySelector('.overlaynav').addEventListener('click', function (e) {
    e.stopPropagation();
    btmenu.style.display = 'none'
    menu.style.display = "block";
    header.style.display = 'block'
    this.style.display = 'none';

})

$('.homefurnitown__list').flickity({
    prevNextButtons: false,
    pageDots: false,
});

$('.homefurnitown__bottom .homefurnitown__bottom-control .-next').on('click', function () {
    $('.homefurnitown__list').flickity('next');
});

$('.homefurnitown__bottom .homefurnitown__bottom-control .-prev').on('click', function () {
    $('.homefurnitown__list').flickity('previous');
});

$('.list1').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 300,
    // autoplay: true,
    // autoplaySpeed: 2000,
    arrows: false
});

$('.--work .sp__bottom .sp__bottom-control .-next').on('click', function () {
    $('.list1').slick('slickNext');
});

$('.--work .sp__bottom .sp__bottom-control .-prev').on('click', function () {
    $('.list1').slick('slickPrev');
});

$('.list2').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 300,
    // autoplay: true,
    // autoplaySpeed: 2000,
    arrows: false
});

$('.--kitchens .sp__bottom .sp__bottom-control .-next').on('click', function () {
    $('.list2').slick('slickNext');
});

$('.--kitchens .sp__bottom .sp__bottom-control .-prev').on('click', function () {
    $('.list2').slick('slickPrev');
});

// $(".abc-carousel").slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
// })

////srollTo nav
let nav = document.querySelector('.nav')
let heightHeader = header.clientHeight;
// let heightSilder = document.querySelector('.homefurnitown').clientHeight;
// console.log(heightSilder);



document.addEventListener('scroll', () => {
    let scrollY = window.pageYOffset
    if (scrollY > 200 - heightHeader) {
        nav.classList.add('active');
    }
    else {
        nav.classList.remove('active');
    }


})

/// srollTo section


// let main = $('main').attr('class');
// let a = $('.nav .' + main)
// a.addClass('active');

// hoặc


window.addEventListener('load', function () {
    let arttm = document.querySelector('main').getAttribute('data-page-id');

    let artta = document.querySelectorAll('.nav a');
    artta.forEach(function (item) {
        let idb = item.getAttribute('data-page-id');
        console.log(item);
        if (idb === arttm) {
            item.classList.add('active');

        }

    })
})












