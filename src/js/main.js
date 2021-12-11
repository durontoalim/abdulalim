/* MIx it up */
$(document).ready(function(){
    var mixer = mixitup ('.mixitup-container');
});

$(document).ready(function(){
    var mixer = mixitup ('.mixitup-js');
});

/*--------------Testimonial Slider-----------------------*/
// (() =>{
//     const silderContainer = document.querySelector(".testi-slider-container"),
//     slides = silderContainer.querySelectorAll(".testimonial-list"),
//     slideWidth = silderContainer.offsetWidth,
//     prevBtn = document.querySelector(".testimonial-icon .prev"),
//     nextBtn = document.querySelector(".testimonial-icon .next");
//     let slideIndex = 0;

//     // Set Width of all slides
//     slides.forEach((slide) =>{
//         slide.getElementsByClassName.width = slideWidth + "px";
//     })
//     //set Widh of slider Container
//     silderContainer.getElementsByClassName.width = slideWidth * slides.length + "px";

//     nextBtn.addEventListener("click", () =>{
//         if(slideIndex === slides.length-1){
//             slideIndex = 0;
//         }
//         else {
//             slideIndex++;
//         }
//         silderContainer.style.marginLeft = - (slideWidth * slideIndex) + "px";
//     })

//     prevBtn.addEventListener("click", () =>{
//         if(slideIndex === 0){
//             slideIndex = slides.length-1;
//         }
//         else {
//             slideIndex--;
//         }
//         slider();
//     })
//     function slider(){
//         silderContainer.style.marginLeft = - (slideWidth * slideIndex) + "px";
//     }
// })();


/* MIx it up */
$(document).ready(function(){
    var mixer = mixitup ('.mixitup-container');
});


/*NAvigation Menu */

function openNav(){
    document.getElementById("myNav").style.display="block";
    document.getElementById("myNav").style.width="100%";
    
}
function closeNav(){
    document.getElementById("myNav").style.width="0%";
}