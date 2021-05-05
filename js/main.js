const responsive = {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    560: {
        items: 2
    },
    960: {
        items: 3
    }
}

//var userName = prompt("What Is Your Name?");
//var lastName = prompt("What Is Your Last Name?")
//var age = prompt("How Old Are You?")
//var days = age * 365.25;
//alert("Nice To Meet You, " + userName + " " + lastName + " ," + " Your age is " + age + " Years, " + " Press Ok To Continue");
//console.log("Also nice to know you, " + userName + lastName + age + " Years");


//DoCUMENT
$(document).ready(function(){
   
//Owl-Carousel-For-Blog
$('#banner-area .owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    dots: true,
    items: 1,
    nav: true,
    navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
    responsive: responsive
});

//Top-Sale Owl-Carousel
$('#top-sale .owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
});

//isotope filter
var $grid = $('.grid').isotope({
    itemSelector:'.grid-item',
    layoutMode:'fitRows'
});

//filter items on button click
$(".button-group").on("click", "button", function(){
    var filterValue = (this).attr('data-filter');
    $grid.isotope({filter: filterValue});
})

//New-Sneakers Owl-Carousel
$('#new-sneakers .owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    nav: false,
    dots: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
});

//blogs owl-carousel
$('#blogs .owl-carousel').owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        }
    }
})

//product quantity
let $qty_up = $('.qty .qty-up');
let $qty_down = $('.qty .qty-down');
//let $input = $('.qty .qty_input');

//click on qty up button
$qty_up.click(function(e){
    let $input = $(`.qty_input[data-id='${$(this).data("id")}']`);
    if($input.val() >= 1 && $input.val() <= 9){
        $input.val(function(i, oldval){
            return ++oldval;
        });
    }
});

//click on qty down button
$qty_down.click(function(e){
    let $input = $(`.qty_input[data-id='${$(this).data("id")}']`);
    if($input.val() > 1 && $input.val() <= 10){
        $input.val(function(i, oldval){
            return --oldval;
        });
    }
});

//Click On Top
$('.move-up span').click(function(){
    $('html,body').animate({
        scrollTop: 0
    },1000);
});

//AOS Instance
AOS.init();

});
