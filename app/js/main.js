;$(document).ready(function(){
    $(".input-field input").on("focus", function(ev){
        var parent = ev.target.parentNode;
        $(parent).addClass("active");
    });
    $(".input-field input").on("blur", function(ev){
        var parent = ev.target.parentNode;
        $(parent).removeClass("active");
    });
});