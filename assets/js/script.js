/*Menu*/
$(".hamburgerIcon").click(function(){
    $("nav").toggleClass("hide");
});

$("#toTopButton").click(function(){
    document.getElementById("header").scrollIntoView(true);
});

/*Cards*/ 
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
/*Testimonials*/

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

