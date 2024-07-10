var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;

$(document).keypress(function() {
    if (!started) {
      $("#level-title").text("Level " + level);
      nextSequence();
      started = true;
    }
  });


$(".btn").click(function() {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    animatePress(userChosenColour);
    playSound(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
  });

function nextSequence(){
    $("h1").text("Level " + level);
    level++;
    userClickedPattern = [];
    var randomNumber = Math.floor(Math.random() * 4);
    console.log(randomNumber);
    var randomChoosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChoosenColor);

    animatePress(randomChoosenColor)

    playSound(randomChoosenColor);
}

function playSound(name){
    var audio = new Audio("sounds/"+name+".mp3");
    audio.play();
}

function animatePress(currentColor){
    var activeButton = $("#"+currentColor);
    activeButton.addClass("pressed");
    setTimeout(function(){ 
        activeButton.removeClass("pressed");
    }, 100);
}

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        if(gamePattern.length === userClickedPattern.length){
            setTimeout(function(){
                nextSequence();
            },1000
            );
        }
    }
    else{
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game-Over, Press any key to start again!");

        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 200);

        startOver();
    }

    function startOver() {
        level = 0;
        gamePattern = [];
        started = false;
    }
}



