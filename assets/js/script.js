$(".hamburgerIcon").click(function(){
    $("nav").toggleClass("hide");
});

$("nav li").click(function(){
    $(this).toggleClass("addBackgroundColorOnClick")
});

$("#toTopButton").click(function(){
    document.getElementById("header").scrollIntoView(true);
});

