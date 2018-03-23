//Variables for points system (8 questions - correct/incorrect/unaswered), arrays, etc
//START ONLICK loads first question to page
// Questions in array, written to DOM

//If Else statements for correct versus incorrect answers

//Points screen at end
//Start over - reset at end

var gameOn = false;
var correctAnswers = 0;
var incorrectAnswers = 0;
var unAnswered = 0;
var questions = ["To get over Richard, what did Monica start making?", "What was the name of the self help book that the girls loved?", "Where was the 'Aroma' room?", "What was wrong with the couch Ross returned to the store?", "What was the name of Eddie's ex-girlfriend?", "How many long-stemmed roses did Ross send to Emily?", "What was Phoebe in charge of at Rachel's suprise party?", "How many lasagnas did Monica make for her aunt?", "What heirloom did Phoebe inherit?"];
var choices = [
    ["Pancakes", "Marmalade", "Jam", "Candy"],
   // image1: '' ,
["Be Your Own Person", "Be Your Own Cleaning Pool", "Be Your Own Windkeeper", "Be Your Own Lightning Bearer"],
  //  image2: '' ,
["Monica's dollhouse", "Phoebe's dollhouse", "Monica's apartment", "Phoebe's apartment"],
   // image3: '' ,
["The color was wrong", "It had a stain", "It was cut in half", "It was torn"],
   // image4: '' ,
["Tanya", "Leslie", "Tilly", "Tara"],
  //  image5: '' ,
["72", "52", "100", "86"],
  //  image6: '' ,
["Cups and food", "Ice and food", "Balloons and ice", "Cups and ice"], 
  //  image7: '' ,
["12", "14", "13", "6"], 
  //  image8: '' ,
["A fur coat", "A chair", "A dollhouse", "A puppy"],
  //  image9: '' ,
];

// Variable showQuestion will hold the setInterval when we start the slideshow
var showQuestion;
var startQuestions;
// Count will keep track of the index of the currently displaying question.
var count = 0;
//Run "startSlideshow" when we click the "start" button.
var showChoices;
var startChoices;
var secondsTimer = 6;


console.log(choices[0][3]);

function startGame () {
    console.log(choices);
    gameOn = true;

    $("#start").click(startQuestions);

      function startQuestions() {
        $("#start").hide();
        displayQuestion();
        //Use showQuestions to hold the setInterval to run nextQuestion.
        showQuestions = setInterval(nextQuestion, 5000);
      }

      function displayQuestion() {
        $("#questions").text(questions[count]);
        $("#choices").html("<div class='choicestyling'>" + choices[count][0] + "<br>"  + choices[count][1] + "<br>" +choices[count][2] + "<br>" + choices[count][3] + "<br>");
        console.log(choices[count]);
            //"<div id='option" + [count] + "'" + '<p>' + '<h4>' + choices[count]);
    //   choiceSelections();
        var secondsInterval = setInterval(countdownTimer, 1000);           
               function countdownTimer() {
                secondsTimer--;
                $("#seconds").text("Time Remaining: " + secondsTimer + "Seconds");
                if (secondsTimer <= 0) {
                    clearInterval(secondsInterval);
                    secondsTimer = 5;
                   }}}

      function nextQuestion() {
        //  Increment the count by 1.
        count++;
        //Use a setTimeout to run displayQuestion after 1 second.
        setTimeout(displayQuestion, 1000);
        //If the count is the same as the length of the question array, reset the count to 0.
        if (count === questions.length && choices.length) {
          count = 0;
        }
      }

     
      function stopQuestion() {
        //Put our clearInterval here:
        clearInterval(showQuestions); 
      }        
    }


    






    // renderChoices();
    startGame();
    //choiceSelections();
   
