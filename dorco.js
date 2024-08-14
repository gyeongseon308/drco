$(document).ready(function(){

    let i = 0;
    let count = $(".dorco_text>ul").length;

    $(".next").click(function(){
        $(".dorco_img").stop().animate({"margin-top":"-200vh"},1000,function(){
            $(".dorco_img>li:first-child").appendTo(".dorco_img");
            $(".dorco_img").css({"margin-top":"-100vh"});
        });

        if(i == count-1){
            i = 0;
        }else{
            i++;
        }
        show();

    });

    $(".prev").click(function(){
        $(".dorco_img").stop().animate({"margin-top":"0vh"},1000,function(){
            $(".dorco_img>li:last-child").prependTo(".dorco_img");
            $(".dorco_img").css({"margin-top":"-100vh"});
        });

        if(i == 0){
            i = count-1;
        }else{
            i--;
        }
        show();
    
});

    function show(){
        $(".txt_1").stop().css({"top":"-300px"});
        $(".txt_2").stop().css({"top":"-250px"});
        $(".banner_txt").stop().fadeOut();
        $(".banner_txt").eq(i).stop().fadeIn(function(){
            $(".txt_1").stop().animate({"top":"0px"});
            $(".txt_2").stop().animate({"top":"0px"});
        });
}

function asd(){
    $(".dorco_img").stop().animate({"margin-top":"-200vh"},function(){
        $(".dorco_img>li:first-child").appendTo(".dorco_img");
        $(".dorco_img").css({"margin-top":"-100vh"});
    });
}

    let autoe = setInterval(function(){
    asd();
    
    if(i == count-1){
        i = 0;
    }else{
        i++;
    }
    show();
    
},3000);


$(".main1_banner").mouseenter(function(){
    clearInterval(auto);
});


$(window).scroll(function(){
    if($(this).scrollTop() > 100){
        $("#top").stop().fadeIn(500);
    }else{
        $("#top").stop().fadeOut();
    }
});

$("#top").click(function(){
    $("html,body").stop().animate({scrollTop : 0}, 500);
});

$(".language").click(function(){
    $(".language>ul").stop().fadeIn(400);
});
$(window).click(function(event){
    const languageMenu = Boolean(event.target.closest(".language"));
    if(!languageMenu){
    $(".language>ul").stop().fadeOut(400);
    }
});

$(".familysite").click(function(){
    $(".site_btn>.site_sub").stop().fadeIn(400);
    $(".fa-angle-down").stop().hide();
    $(".fa-angle-up").stop().show();
});
$(window).click(function(event){
    const familyMenu = Boolean(event.target.closest(".familysite"));
    if(!familyMenu){
    $(".site_btn>.site_sub").stop().fadeOut(400);

    $(".fa-angle-up").stop().hide();
    $(".fa-angle-down").stop().show();
    }
    
    

});

});

    
