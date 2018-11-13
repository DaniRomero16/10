$(function(){
    var dentro = $("dd");
    var container = $("dt");
    
    dentro.hide();
    
    container.hover(function(){
        $(this).next().show('fast');
    }, function(){
        $(this).next().hide('fast');
    });

})