function scaleDown() {
 
    $('#projects > figure').removeClass('current').addClass('not-current');
    $('#portNav > ul > li').removeClass('current-li');
 
}

function show(category) {
 
    scaleDown();
 
    $('#' + category).addClass('current-li');
    $('.' + category).removeClass('not-current');
    $('.' + category).addClass('current');
 
    if (category == "all") {
        $('#portNav > ul > li').removeClass('current-li');
        $('#all').addClass('current-li');
        $('#projects > figure').removeClass('current, not-current');
    }
 
}

$(document).ready(function(){
 
    $('#all').addClass('current-li');
 
    $("#portNav > ul > li").click(function(){
        show(this.id);
    });
 
});