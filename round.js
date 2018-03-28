$("#sun2").css("background-color", "blue")
$("#sun").css("transform-origin", "50vw 0px");
$("#sun").css("transform", " translateX(-25px)");
$("#sun").css("transform", " translateY(-25px)");


$("#start").click(function(){
    if($("#start").text() == "start"){
        $("#start").text("stop");

        //reset position and move
        $("#sun").animate({ borderSpacing: 180},{
            step: function(now,fx) {
                $("p").text("now = " + now);
                $(this).css('transform','rotate('+now+'deg)');
            },
            duration:'slow'
        }, 'linear');

    }
    else if($("#start").text() == "stop"){
        $("#start").text("start");

        //let move stop
        $("#sun").animate({ borderSpacing: 0},{
            step: function(now,fx) {
                $("p").text("now = " + now);
                $(this).css('transform','rotate('+now+'deg)');
            },
            duration:'slow'
        }, 'linear');

    }
    else{
        $("#start").text("7122");
    }
});