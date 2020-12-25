/*Function that makes the mobile menu visible*/
function hamburgerMenu() {
    let a = document.querySelector("#mobile-menu");
    a.classList.toggle("hide");
}

/*Function that brings the user back to top of page when clicking the up-arrow button*/
function backToTop() {
    let a = document.querySelector("#header");
    a.scrollIntoView(true);
}

/*Jquery function that changes the color of the text when hovering the menu items on min-width 1024px*/
$("#header-large-screens a").hover(function () {
    $(this).toggleClass("change-color-on-hover");
});

/*Jquery function that changes the text color when hovering over footer items*/
$("#footer i").hover(function () {
    $(this).toggleClass("change-color-on-hover");
});


/*Workplaces*/
/*Functions that reveal more info when clicking the "Read more button"*/
$(".read-more1").click(function () {
    $(".card-article1").toggle("fast");
});

$(".read-more2").click(function () {
    $(".card-article2").toggle("fast");
});

$(".read-more3").click(function () {
    $(".card-article3").toggle("fast");
});

$(".read-more4").click(function () {
    $(".card-article4").toggle("fast");
});

$(".read-more5").click(function () {
    $(".card-article5").toggle("fast");
});

$(".read-more6").click(function () {
    $(".card-article6").toggle("fast");
});

/*Functions that changes the text of the "Read more" to "Show less"*/
$(".read-more1").click(function () {
    let toggleText = document.querySelector(".read-more1");
    if (toggleText.innerHTML == "Read More") {
        toggleText.innerHTML = "Show Less";
    }
    else {
        toggleText.innerHTML = "Read More";
    }
});

$(".read-more2").click(function () {
    let toggleText = document.querySelector(".read-more2");
    if (toggleText.innerHTML == "Read More") {
        toggleText.innerHTML = "Show Less";
    }
    else {
        toggleText.innerHTML = "Read More";
    }
});

$(".read-more3").click(function () {
    let toggleText = document.querySelector(".read-more3");
    if (toggleText.innerHTML == "Read More") {
        toggleText.innerHTML = "Show Less";
    }
    else {
        toggleText.innerHTML = "Read More";
    }
});

$(".read-more4").click(function () {
    let toggleText = document.querySelector(".read-more4");
    if (toggleText.innerHTML == "Read More") {
        toggleText.innerHTML = "Show Less";
    }
    else {
        toggleText.innerHTML = "Read More";
    }
});

$(".read-more5").click(function () {
    let toggleText = document.querySelector(".read-more5");
    if (toggleText.innerHTML == "Read More") {
        toggleText.innerHTML = "Show Less";
    }
    else {
        toggleText.innerHTML = "Read More";
    }
});

$(".read-more6").click(function () {
    let toggleText = document.querySelector(".read-more6");
    if (toggleText.innerHTML == "Read More") {
        toggleText.innerHTML = "Show Less";
    }
    else {
        toggleText.innerHTML = "Read More";
    }
});

/*Hover effect "Read More button"*/
$(".on-hover").hover(function () {
    $(this).toggleClass("background-readmore");
});

/*Contact*/
/*Google map with marker*/
function initMap() {
    const myWorkPlace = { lat: 57.75241232432578, lng: 12.944106040386254 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: myWorkPlace,
    });
    new google.maps.Marker({
        position: myWorkPlace,
        map,
        title: "Norra Sjöbogatan 34, 50643 Borås. That´s my home",
    });
}

/*Change color on hover over submit button*/

$(".form-button").hover(function () {
    $(this).toggleClass("form-button-bg-color");
});

/*testimonials*/

$(".right-arrow").click(function () {
    let current = $(".active");
    let next = current.next();

    if (next.length) {
        current.removeClass("active");
        next.addClass("active");
    }
});

$(".left-arrow").click(function () {
    let current = $(".active");
    let prev = current.prev();

    if (prev.length) {
        current.removeClass("active");
        prev.addClass("active");
    }
});

$("#read-full-testimonial").click(function () {
    $(".testimonial-text").toggle("fast");
});

$("#read-full-testimonial2").click(function () {
    $(".testimonial-text").toggle("fast");
});

$("#read-full-testimonial3").click(function () {
    $(".testimonial-text").toggle("fast");
});

$("#read-full-testimonial4").click(function () {
    $(".testimonial-text").toggle("fast");
});

$("#read-full-testimonial").click(function () {
    $("#read-full-testimonial").nextAll("p").toggle("fast");
    let toggleText = document.getElementById("read-full-testimonial");
    if (toggleText.innerHTML == "Read") {
        toggleText.innerHTML = "Show less";
    }
    else {
        toggleText.innerHTML = "Read";
    }
});

$("#read-full-testimonial2").click(function () {
    $("#read-full-testimonial2").nextAll("p").toggle("fast");
    let toggleText = document.getElementById("read-full-testimonial2");
    if (toggleText.innerHTML == "Read") {
        toggleText.innerHTML = "Show less";
    }
    else {
        toggleText.innerHTML = "Read";
    }
});

$("#read-full-testimonial3").click(function () {
    $("#read-full-testimonial3").nextAll("p").toggle("fast");
    let toggleText = document.getElementById("read-full-testimonial3");
    if (toggleText.innerHTML == "Read") {
        toggleText.innerHTML = "Show less";
    }
    else {
        toggleText.innerHTML = "Read";
    }
});

$("#read-full-testimonial4").click(function () {
    $("#read-full-testimonial4").nextAll("p").toggle("fast");
    let toggleText = document.getElementById("read-full-testimonial4");
    if (toggleText.innerHTML == "Read") {
        toggleText.innerHTML = "Show less";
    }
    else {
        toggleText.innerHTML = "Read";
    }
});









