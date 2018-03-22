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
["Pancakes", "Marmalade", "Jam", "Candy",], ["Be Your Own Person", "Be Your Own Cleaning Pool", "Be Your Own Windkeeper", "Be Your Own Lightning Bearer"], ["Monica's dollhouse", "Phoebe's dollhouse", "Monica's apartment", "Phoebe's apartment"], ["The color was wrong", "It had a stain", "It was cut in half", "It was torn"], ["Tanya", "Leslie", "Tilly", "Tara"], ["72", "52", "100", "86"], ["Cups and food", "Ice and food", "Balloons and ice", "Cups and ice"], ["12", "14", "13", "6"], ["A fur coat", "A chair", "A dollhouse", "A puppy"]
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


function startGame () {
    gameOn = true;

    $("#start").click(startQuestions);

    function displayQuestion() {
        $("#questions").text(questions[count]);
        $("#choices").text(choices[count]);
      }

      function nextQuestion() {
        //  Increment the count by 1.
        count++;
        //Use a setTimeout to run displayQuestion after 1 second.
        setTimeout(displayQuestion, 1000);
        //If the count is the same as the length of the question array, reset the count to 0.
        if (count === questions.length && choices.length) {
          count = 0;
        }

       var secondsInterval = setInterval(countdownTimer, 1000);           
               function countdownTimer() {
                secondsTimer--;
                $("#seconds").text("Time Remaining: " + secondsTimer + "Seconds");
                if (secondsTimer <= 0) {
                    clearInterval(secondsInterval);
                    secondsTimer = 6;
                    secondsInterval();}}
      }

      function startQuestions() {
        $("#start").hide();
        //Use showQuestions to hold the setInterval to run nextQuestion.
        showQuestions = setInterval(nextQuestion, 5000);
      }
      function stopQuestion() {
        //Put our clearInterval here:
        clearInterval(showQuestions); 
      }
      // This will run the display question function as soon as the page loads.
    displayQuestion();
    }

    startGame();
