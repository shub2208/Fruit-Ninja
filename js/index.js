var playing = false;
var score;
var trialleft = 3;
var step;
var action;
var fruits = ['apple', 'cherry', 'grapes', 'mango', 'orange',
    'pineapple', 'pomegranate', 'strawberry', 'watermelon'
];
$(function() {
    debugger;
    $("#startreset").click(function() {

        if (playing == true) {
            
            location.reload();
        } else {
            
            playing = true;
            $("#trialsleft").show();
            trialleft = 3;
            score = 0; 
            $("#score-value").html(score);
            $("#gameover").hide();
            addhearts();
            $("#startreset").html("Reset Game");
            startaction();
        }
    });

    $("#fruit1").mouseover(function() {
        score++;
        $("#score-value").html(score); 
        clearInterval(action);
        $("#fruit1").hide('explode', 500); 
        setTimeout(startaction, 550);
    });

    function addhearts() {
        $("#trialsleft").empty();

        for (var i = 0; i < trialleft; i++) {
            $("#trialsleft").append('<img src="img/heart.png" class="life">');
        }
    }
    function startaction() {
        $("#fruit1").show();
        chooseFruit();
        $("#fruit1").css({ 'left': Math.round(600 * Math.random()), 'top': -30 });
        step = 1 + Math.round(5 * Math.random());
        action = setInterval(function() {
            $("#fruit1").css('top', $("#fruit1").position().top + step);
            if ($("#fruit1").position().top > $("#fruitsContainer").height()) {
                if (trialleft > 1) {
                    $("#fruit1").show();
                    chooseFruit();

                    $("#fruit1").css({ 'left': Math.round(600 * Math.random()), 'top': -30 });
                    step = 1 + Math.round(5 * Math.random());
                    trialleft--;
                    addhearts();

                }
                else {
                    playing = false;
                    $("#gameover").show();
                    $("#gameover").html('<p>game over</p><p>your score is: ' + score + '</P>');
                    $("#trialsleft").hide();
                    $("#startreset").html("Start Game");
                    stopaction();

                }

            }
        }, 10);

    }
    function chooseFruit() {
        $("#fruit1").attr('src', 'img/' + fruits[Math.round(8 * Math.random())] + '.png')
    }
    function stopaction() {
        clearInterval(action);
        $("#fruit1").hide();
    }
});