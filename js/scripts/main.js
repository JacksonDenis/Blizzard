var slide_thumbnail = new Swiper(".slide-thumbnail", {
    slidesPerView: 5,
    direction: "vertical",
    spaceBetween: 20,
    watchSlidesProgress: true,
    breakpoints : {
        320 : {
            direction: 'horizontal'
        },
        991 : {
            direction: 'vertical'
        }
    }
});

const barraProgress = document.querySelector('.swiper-progress-bar');

var slide_hero = new Swiper(".slide-principal", {
    effect: "fade",
    thumbs: {
        swiper: slide_thumbnail,
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    on : {
        init: function() {
            barraProgress.classList.remove('animate')
            barraProgress.classList.remove('active')
            barraProgress.classList.add('animate')
            barraProgress.classList.add('active')
        },
        slideChangeTransitionStart: function() {
            barraProgress.classList.remove('animate')
            barraProgress.classList.remove('active')
            barraProgress.classList.add('active')
        },
        slideChangeTransitionEnd: function() {
            barraProgress.classList.add('animate')

        }
        

    }
});

const allFilter = document.querySelectorAll(".nav-games li a");
const tapPane = document.querySelectorAll(".pane-games");

allFilter.forEach((filter, index) => {
    filter.addEventListener("click", (e) => {
        e.preventDefault();

        allFilter.forEach((item) => {
            item.classList.remove("active");
        });

        tapPane.forEach((tab) => {
            tab.classList.remove("active");
        });

        tapPane[index].classList.add("active");
        filter.classList.add("active");
    });
});


const logar = document.querySelector ('.logar')
const CloseLogar = document.querySelector ('.close')

logar.addEventListener('click', (e) => {
    e.preventDefault();

    document.documentElement.classList.add('show-modal')
})

CloseLogar.addEventListener('click', e => {
    e.preventDefault();

    document.documentElement.classList.remove('show-modal')
})

const btnMenu = document.querySelectorAll('.menuFlutuante')
const menuFlutuante = document.querySelectorAll('.menu')

btnMenu.forEach((btn,index) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();

        menuFlutuante.forEach(item => {
            item.classList.remove('active');
            item.addEventListener('mouseleave', () => {
                item.classList.remove('active');
            })
        })
        menuFlutuante[index].classList.add('active')
    })
})