$("#start").click(function(){
    if($("#start").text() == "start"){
        $("#start").text("stop");

        //reset position and move
    }
    else if($("#start").text() == "stop"){
        $("#start").text("start");

        //let move stop
    }
    else{
        $("#start").text("7122");
    }
});

var xSun, ySun;

