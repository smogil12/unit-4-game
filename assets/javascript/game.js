$(document).ready(function(){
    
  
    var pinkjewel = 1 + Math.floor(Math.random() * 12);
    var bluejewel = 1 + Math.floor(Math.random() * 12);
    var redjewel = 1 + Math.floor(Math.random() * 12);
    var greenjewel = 1 + Math.floor(Math.random() * 12);
    var userResult = 0;
    var wins = 0;
    var losses = 0;
    
    console.log (pinkjewel, bluejewel, redjewel, greenjewel);
    var compnumber = 19 + Math.floor(Math.random() * 101);
    
    function win () {
        wins = wins +1;
        $("#wins").text(wins);
        alert ("You Win! Click on a gem to play again");
    }
    
    function lose () {
        losses = losses +1;
        $("#losses").text(losses);
        alert ("You Lose, try again by clicking on a gem");
    }
    
    function reset () {
       userResult = 0;
        compnumber =   19 + Math.floor(Math.random() * 101);
        pinkjewel = 1 + Math.floor(Math.random() * 12);
        bluejewel = 1 + Math.floor(Math.random() * 12);
        redjewel = 1 + Math.floor(Math.random() * 12);
        greenjewel = 1 + Math.floor(Math.random() * 12);
        console.log (pinkjewel, bluejewel, redjewel, greenjewel);
       $(".score-col").text(compnumber);
        
    }

    $(".score-col").append(compnumber);
     
   
    $("#styledImage").click(function() {
        userResult = userResult + pinkjewel;
        $(".final-col").text(userResult);
        if (userResult === compnumber) {
            win();
            reset ();
        } else if (userResult > compnumber) {
            lose();
            reset ();
        }
    });

    $("#styledImage2").click(function() {
        userResult = userResult + bluejewel;
        $(".final-col").text(userResult);
        if (userResult === compnumber) {
            win();
            reset ();
        } else if (userResult > compnumber) {
            lose();
            reset ();
        }
    });
  
    $("#styledImage3").click(function() {
        userResult = userResult + redjewel;
        $(".final-col").text(userResult);
        if (userResult === compnumber) {
            win();
            reset ();
        } else if (userResult > compnumber) {
            lose();
            reset ();
        }
    });
 
    $("#styledImage4").click(function() {
        userResult = userResult + greenjewel;
        $(".final-col").text(userResult);
        if (userResult === compnumber) {
            win();
            reset ();
        } else if (userResult > compnumber) {
            lose();
            reset ();
        }
    });



});