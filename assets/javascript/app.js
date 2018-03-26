// Variable showQuestion will hold the setInterval when we start the game
var showQuestion;
var startQuestions;
// Count will keep track of the index of the currently displaying question.
var count = 0;
var showChoices;
var startChoices;
var restartReady = false;
var secondsTimer = 16;
var gameOn = false;
var correctAnswer = 0;
var incorrectAnswer = 0;
var unAnswered = 0;
var questionAsked = false;
var secondsInterval;



var choices = [
    {question: "To get over Richard, what did Monica start making?",     
    options: ["Pancakes", "Marmalade", "Jam", "Candy"],
    image: "assets/images/question1.gif",
    correct: 3,
    incorrect: [1, 2, 4]
},
    {question: "What was the name of the self help book that the girls loved?",
    options: ["Be Your Own Person", "Be Your Own Cleaning Pool", "Be Your Own Windkeeper", "Be Your Own Lightning Bearer"],
    image: "assets/images/question2.gif",
    correct: 3,
    incorrect: [1, 2, 4]},
    {question: "Where was the 'Aroma' room?",
    options: ["Monica's dollhouse ", "Phoebe's dollhouse", "Chandler and Joey's apartment", "The Chick and The Duck's cabinet"],
    image: "assets/images/question3.gif",
    correct: 2,
    incorrect: [1, 3, 4]},
    {question: "What was the name of Eddie's ex-girlfriend?",
    options: ["Tanya", "Leslie", "Tilly", "Tara"],
    image: "assets/images/question4.gif",
    correct: 3,
    incorrect: [1, 2, 4]},
    {question: "How many long-stemmed roses did Ross send to Emily?",
    options: ["72", "52", "100", "86"],
    image: "assets/images/question5.gif",
    correct: 1,
    incorrect: [2, 3, 4]},
    {question: "What was Phoebe in charge of at Rachel's suprise party?",
    options: ["Cups and food", "Ice and food", "Balloons and ice", "Cups and ice"], 
    image: "assets/images/question6.gif",
    correct: 1,
    incorrect: [2, 3, 4]},
    {question: "How many lasagnas did Monica make for her aunt?",
    options: ["12", "14", "13", "6"], 
    image: "assets/images/question7.gif",
    correct: 1,
    incorrect: [2, 3, 4]},
    {question: "What heirloom did Phoebe inherit?",
    options: ["A fur coat", "A chair", "A dollhouse", "A puppy"],
    image: "assets/images/question8.gif",
    correct: 1,
    incorrect: [2, 3, 4]},
    {question: "What was wrong with the couch Ross returned to the store?",
    options: ["The color was wrong", "It had a stain", "It was cut in half", "It was torn"],
    image: "assets/images/question9.gif",
    correct: 1,
    incorrect: [2, 3, 4]}
]; 

function startGame () {
    gameOn = true;
    $("#start").click(startQuestions);
}

function startQuestions() {
        $("#start").hide();
        displayQuestion();
        // showQuestions = setInterval(nextQuestion, 16000);         
        // Use showQuestions to hold the setInterval to run nextQuestion.

    function displayQuestion() {
        secondsTimer = 16;
        secondsInterval = setInterval(countdownTimer, 1000);  
        function countdownTimer() {
        secondsTimer--;
        $("#seconds").text("Time Remaining: " + secondsTimer + "Seconds");
        if (secondsTimer <= 1) {
            clearInterval(secondsInterval);
            questionNotAnswered();
            }}

        $("#questions").text(choices[count].question);
        $("#choices").html("<div class='buttons'>" + "<button id='1'>" + choices[count].options[0] + "</button>" + "<br>"  + "<button id='2'>" + choices[count].options[1] + "</button>" + "<br>" + "<button id='3'>" + choices[count].options[2] + "</button>" + "<br>" + "<button id='4'>" + choices[count].options[3] + "</button>" + '</div>');

        questionAsked = true;

        questionPoints(secondsTimer);

        function questionPoints(secondsTimer) {
        if (questionAsked) {
            
            $("button").click(function(){
                var idInput = $(this).attr('id');
                var correctResponse = choices[count].correct;
                if (idInput == correctResponse) {
                    questionRight();
                }
                else if (jQuery.inArray(idInput, choices[count].incorrect)) {                    
                    //incorrectResponse;
                    questionWrong(idInput); 
                }
                
                }) 
                
            }}       

    function questionRight() {
        correctAnswer++;
        clearInterval(secondsInterval);
        $("#questions").text("");
        $("#choices").html("<div class='choicestyling'>" + "Correct!" + '</div>');
        $("#choices").append("<img src=" + choices[count].image + '>');
        setTimeout(displayQuestion, 5000);
       // secondsTimer = 5;
        nextQuestion();
    }

    function questionWrong(idInput) {
        var correctResponse = choices[count].correct - 1;
        //Re-define correctresponse so it gives us one less since the 'correct' objects start at 1 but the array index starts at 0
        incorrectAnswer++;
        clearInterval(secondsInterval);
        $("#questions").text("");
        $("#choices").html("<div class='choicestyling'>" + "Nope! The correct answer was " + choices[count].options[correctResponse] + "!" + '</div>');
        $("#choices").append("<img src=" + choices[count].image + '>');
        setTimeout(displayQuestion, 5000);
        //secondsTimer = 5;
        nextQuestion();
    }

    function questionNotAnswered(idInput) {
        var correctResponse = choices[count].correct - 1;
        unAnswered++;
        clearInterval(secondsInterval);
        $("#questions").text("");
        $("#choices").html("<div class='choicestyling'>" + "Out of time! The correct answer was " + choices[count].options[correctResponse] + "!" + '</div>');
        $("#choices").append("<img src=" + choices[count].image + '>');
        setTimeout(displayQuestion, 5000);
        //secondsTimer = 5;
        nextQuestion(secondsInterval);
    } 

}
    
function nextQuestion(secondsInterval) {
        //  Increment the count by 1.       
        count++;
        //Use a setTimeout to run displayQuestion after 1 second.
     //setTimeout(displayQuestion, 1000);
        //If the count is the same as the length of the question array, reset the count to 0.
    if (count === choices.length) {
    //count = 0;
   //clearInterval(nextQuestion);
    tally(secondsInterval);
     }
        }


        function tally(secondsInterval) {
            clearInterval(secondsInterval);
            $("#seconds").text("''");
            $("#questions").text("All done! Here's how you did:");
            $("#choices").html("<div class='pointsstyling'>" + "Correct answers: " + correctAnswer + "<br>"  + "Incorrect answers: " + incorrectAnswer + "<br>" + "Unanswered questions: " + unAnswered +  '</div>');
            var restartButton = $("<button>");
            restartButton.attr('id', 'buttonrestart');
            var buttonTitle = $("<h2>");
            buttonTitle.text("Restart");
            restartButton.append(buttonTitle);
            var buttonDiv = $("<buttondiv>");
            buttonDiv.append(restartButton);
            $('#restart').append(buttonDiv);
            restartReady = true;
            if (restartReady) {
                $('#buttonrestart').click(function(){
                    reset(secondsInterval);
                })}
            
        }

        function reset(secondsInterval) {
            $('#buttonrestart').hide();
            correctAnswer = 0;
            incorrectAnswer = 0;
            unAnswered = 0;
            count = 0;
            secondsTimer = 16;
            displayQuestion(secondsInterval);

        }
  }  
 

//   function stopQuestion() {
//     //     //     //Put our clearInterval here:
//         clearInterval(displayQuestion); 
//           }
    

    startGame();
    //stopQuestion();
    
