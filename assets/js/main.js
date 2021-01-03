/*Mobile menu*/
/*Makes it visible and hides it*/
function hamburgerMenu() {
    let a = document.querySelector("#mobile-menu");
    a.classList.toggle("hide");
}

/*Footer*/
/*Brings user back to top when clicking up-arrow*/
/*The tutor team gave me this one*/
function backToTop() {
    let a = document.querySelector("#header");
    a.scrollIntoView(true);
}

/*Menu and footer*/
/*Changes color on hover*/
$("#header-large-screens a").hover(function () {
    $(this).toggleClass("change-color-on-hover");
});


$("#footer i").hover(function () {
    $(this).toggleClass("change-color-on-hover");
});

/*Buttons*/
/*Changes bg color on hover*/
function changeBackgroundColorOfButtons(a) {
    $(a).toggleClass("background-readmore");
}

/*Workplaces*/
/*Reveals info on cards when clicking button*/
function readMore(a) {
    $(a).toggle("fast");
}

/*Workplaces and Testimonials*/
/*Changes the text of the "Read more" to "Show less"*/
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
/*Google map with marker, all code is from Google documentation*/
function initMap() {
    const myWorkPlace = { lat: 57.75241232432578, lng: 12.944106040386254 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: myWorkPlace,
    });
    new google.maps.Marker({
        position: myWorkPlace,
        map,
        title: "Norra Sjöbogatan 34, 50643 Borås",
    });
}

/*Testimonials*/
/*Reveals hidden text when clicking button*/
function slideToggle(a) {
    $(a).slideToggle("fast");
}

/*About*/
/*Changes bg-color and some other properties when hovering over items*/
function highlightAbout(a) {
    b = document.querySelector(a);
    b.classList.toggle("change-bg-color-about");
}

/*About*/
/*Reduces opacity on the other items when hovering over them*/
function reduceOpacity(a, b, c, d, e, f) {
    $(a).addClass("reduce-opacity-about");
    $(b).addClass("reduce-opacity-about");
    $(c).addClass("reduce-opacity-about");
    $(d).addClass("reduce-opacity-about");
    $(e).addClass("reduce-opacity-about");
    $(f).addClass("reduce-opacity-about");
}

/*Removes the class above*/
function resetOpacity(a, b, c, d, e, f) {
    $(a).removeClass("reduce-opacity-about");
    $(b).removeClass("reduce-opacity-about");
    $(c).removeClass("reduce-opacity-about");
    $(d).removeClass("reduce-opacity-about");
    $(e).removeClass("reduce-opacity-about");
    $(f).removeClass("reduce-opacity-about");
}










