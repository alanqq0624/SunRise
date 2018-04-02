var roAngle = 190;//rotate angle
var beginX = 0;
var beginY = 50;
var peakX = 50;
var peakY = 20;
var endX = 100;
var endY = 50;

var a = (endX-beginX)/2;
var b = ((endY+beginY)/2)-peakY;
var rotateR = ((a*a)+(b*b))/(2*b);
var rotateDeg = (Math.asin(a/rotateR)*360)/Math.PI;

$("#sun").css("transform-origin", "50vw " + (rotateR-b) + "vw");
$("#O").css("left", a + "vw").css("top", (peakY+rotateR) + "vw");


$("#start").click(function(){
    if($("#start").text() == "start"){
        $("#start").text("stop");

        //reset position and move
        $("#sun").animate({ borderSpacing: rotateDeg},{
            step: function(now,fx) {
                $("p").text("now = " + now);
                $(this).css('transform','rotate('+now+'deg)');
            },
            duration: 1000
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
            duration: 1000
        }, 'linear');

    }
    else{
        $("#start").text("7122");
    }
});