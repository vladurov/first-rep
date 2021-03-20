// var a = 35;
// var b = 'Hello,VOVA!'
// var c = true;
// var d = 5;


// if (a == 35) {
//     alert('All is correct!');
// }


//

// const element = document.querySelector('.hat_1');
// element.style.setProperty('--animate-duration', '1s');
// element.classList.add('animate__animated', 'animate__flip');

// const element = document.querySelector('.logo');
// element.style.setProperty('--animate-duration', '1s');
// element.classList.add('animate__animated', 'animate__rubberBand');

// $(window).scroll(function() {
// $('.secondheader').each(function() {
//     var imagePos = $(this).offset().top;

//     var topOfWindow = $(window).scrollTop();
//     if (imagePos < topOfWindow + 650) {
//         $(this).addClass("fadeInUp");
//     }
// });
// });
// })
// Example 1: From an element in DOM
$('.open-popup-link').magnificPopup({
    type: 'inline',
    midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
});