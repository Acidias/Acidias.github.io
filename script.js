$(document).ready(function() {
    $(window).scroll(function() {

        if(this.scrollY > 10){
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
    })

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    }); 
});

function aboutTextAni(){
    document.getElementById("moving-text").className = "about-text-ani";
    document.getElementById("moving-text1").className = "about-text-ani1";
    document.getElementById("moving-text1").style.display = "block";
    document.getElementById("about-button").style.display = "none";
}