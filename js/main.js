
$(function () {
    $(document).ready(function () {

        $(".menu__list").on("click", "a", function (event) {
            event.preventDefault();
            var id = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({ scrollTop: top }, 700);
        });

    });

});

let scrollUp = document.querySelector('.scrollup-btn');
let header = document.querySelector('.header');

if (scrollUp) {
    scrollUp.addEventListener('click', () => {
        header.scrollIntoView({ block: "center", behavior: "smooth" });
    });
}

let windowLocation = window.location.href;
console.log(windowLocation);
let engPage = document.querySelector('.eng');
let ruPage = document.querySelector('.ru');


if(windowLocation === 'http://localhost:3000/index-eng.html'){
    engPage.classList.add('is-active');
    ruPage.classList.remove('is-active');
}
else if(windowLocation === 'http://localhost:3000/index.html'){
    engPage.classList.remove('is-active');
    ruPage.classList.add('is-active');
}