/*Function that makes the mobile menu visible*/
function hamburgerMenu(){
    let a = document.querySelector("#mobile-menu");
    a.classList.toggle("hide");
}

/*Function that brings the user back to top of page when clicking the arrow button*/
function backToTop(){
    let a = document.querySelector("#header");
    a.scrollIntoView(true);
}



/*Jquery function that changes the color of the text when hovering the menu items on min-width 1024px*/
$("#header-large-screens a").hover(function(){
    $(this).toggleClass("change-color-on-hover");
});

/*Jquery function that changes the state of text color to red on hover, screens min-width 1024px*/
$("#back-to-top").hover(function(){
    $(this).toggleClass("change-color-on-hover");
});


/*Workplaces*/
/*Functions that reaveal more info when clicking the "Read more"*/
$(".read-more1").click(function(){
    $(".card-article1").toggle("fast");
});

$(".read-more2").click(function(){
    $(".card-article2").toggle("fast");
});

$(".read-more3").click(function(){
    $(".card-article3").toggle("fast");
});

$(".read-more4").click(function(){
    $(".card-article4").toggle("fast");
});

$(".read-more5").click(function(){
    $(".card-article5").toggle("fast");
});

$(".read-more6").click(function(){
    $(".card-article6").toggle("fast");
});

/*Functions that changes the text of the "Read more" to "Show less"*/

$(".read-more1").click(function(){
    let toggleText = document.querySelector(".read-more1");
    if(toggleText.innerHTML == "Read More"){
        toggleText.innerHTML = "Show Less";
    }
    else{
        toggleText.innerHTML = "Read More";
    }
});

$(".read-more2").click(function(){
    let toggleText = document.querySelector(".read-more2");
    if(toggleText.innerHTML == "Read More"){
        toggleText.innerHTML = "Show Less";
    }
    else{
        toggleText.innerHTML = "Read More";
    }
});

$(".read-more3").click(function(){
    let toggleText = document.querySelector(".read-more3");
    if(toggleText.innerHTML == "Read More"){
        toggleText.innerHTML = "Show Less";
    }
    else{
        toggleText.innerHTML = "Read More";
    }
});

$(".read-more4").click(function(){
    let toggleText = document.querySelector(".read-more4");
    if(toggleText.innerHTML == "Read More"){
        toggleText.innerHTML = "Show Less";
    }
    else{
        toggleText.innerHTML = "Read More";
    }
});

$(".read-more5").click(function(){
    let toggleText = document.querySelector(".read-more5");
    if(toggleText.innerHTML == "Read More"){
        toggleText.innerHTML = "Show Less";
    }
    else{
        toggleText.innerHTML = "Read More";
    }
});

$(".read-more6").click(function(){
    let toggleText = document.querySelector(".read-more6");
    if(toggleText.innerHTML == "Read More"){
        toggleText.innerHTML = "Show Less";
    }
    else{
        toggleText.innerHTML = "Read More";
    }
});

/*Hover effect "Read Me"*/
$(".on-hover").hover(function(){
    $(this).toggleClass("background-readmore");
});

/*Testimonials*/

/*Function that toggles the text when clicking*/

$("#testimonial-1-keep-reading").click(function(){
    $("#testimonial-1-keep-reading").nextAll("p").toggle("fast");
    let toggleText = document.getElementById("testimonial-1-keep-reading");
    if(toggleText.innerHTML == "Continue reading"){
        toggleText.innerHTML = "Show less";
    }
    else{
        toggleText.innerHTML = "Continue reading";
    }
});

/*Google Map*/

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 57.72103500000001, lng: 12.939818999999943 },
    zoom: 12,
  });
}

/*contact*/

/*Change color on hover over button*/

$(".form-button").hover(function(){
    $(this).toggleClass("form-button-bg-color");
});







