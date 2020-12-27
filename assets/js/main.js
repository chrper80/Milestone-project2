/*Function that makes the mobile menu visible when clicking the hamburger icon*/
function hamburgerMenu() {
    let a = document.querySelector("#mobile-menu");
    a.classList.toggle("hide");
}

/*Function that brings the user back to top of page when clicking the up-arrow button*/
function backToTop() {
    let a = document.querySelector("#header");
    a.scrollIntoView(true);
}

/*Functions that changes the color of the text when hovering the menu and footer items*/
$("#header-large-screens a").hover(function () {
    $(this).toggleClass("change-color-on-hover");
});


$("#footer i").hover(function () {
    $(this).toggleClass("change-color-on-hover");
});

/*Function that changes the background-color when hovering over buttons*/
function changeBackgroundColorOfButtons(a) {
    $(a).toggleClass("background-readmore");
}


/*Function that reveals info on workplace-cards and testimonials*/
function readMore(a) {
    $(a).toggle("fast");
}

/*Function that changes the text of the "Read more" to "Show less" in the workplaces section*/
function changeText(a) {
    let toggleText = document.querySelector(a);
    if (toggleText.innerHTML == "Read More") {
        toggleText.innerHTML = "Show Less";
    }
    else {
        toggleText.innerHTML = "Read More";
    }
}

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

/*Reveals hidden text in the testimonial-cards*/
function slideToggle(a) {
    $(a).slideToggle("fast");
}









