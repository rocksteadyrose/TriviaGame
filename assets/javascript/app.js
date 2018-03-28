var count = 0;
var restartReady = false;
var secondsTimer = 16;
var gameOn = false;
var correctAnswer = 0;
var incorrectAnswer = 0;
var incorrectResponse = false;
var unAnswered = 0;
var questionAsked = false;
var secondsInterval;
var friendsTheme = new Audio("assets/audio/friendstheme.wav");

function startGame() {
    gameOn = true;
    var startGif = "assets/images/startgame.gif";
    var imgforGif = $("<img>");
    friendsTheme.play();
    $("#start").click(startQuestions);
}

function startQuestions() {
    friendsTheme.pause();
    $("#start").hide();
    $("#startsection").hide();
    $("#friendstitle").hide();
    displayQuestion();

function displayQuestion() {

    var choices = [
        {question: "To get over Richard, what did Monica start making?",     
        options: ["Pancakes", "Marmalade", "Jam", "Candy"],
        image: "assets/images/question1.gif",
        correct: 3,
        incorrect: [1, 2, 4]},
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
        image: "assets/images/question6a.gif",
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

        secondsTimer = 15;
        $("#seconds").text("Time Remaining: " + secondsTimer + " Seconds");
        secondsInterval = setInterval(countdownTimer, 1000);
        function countdownTimer() {          
            secondsTimer--;
            $("#seconds").text("Time Remaining: " + secondsTimer + " Seconds");
        if (secondsTimer <= 0) {
            clearInterval(secondsInterval);
            questionNotAnswered();
            }}

        $("#questions").text(choices[count].question);
        $("#choices").html("<div class='buttons'>" + "<button value='1' id='button1'>" + choices[count].options[0] + "</button>" + "<br>"  + "<button value='2' id='button2'>" + choices[count].options[1] + "</button>" + "<br>" + "<button value='3' id='button3'>" + choices[count].options[2] + "</button>" + "<br>" + "<button value='4' id='button4'>" + choices[count].options[3] + "</button>" + '</div>');

        questionAsked = true;
        questionPoints(secondsTimer);

function questionPoints(secondsTimer) {
    if (questionAsked) {
        $("button").click(function(){
            var idInput = $(this).attr('value');
            var correctResponse = choices[count].correct;
            
            if (idInput == correctResponse) {
                correctResponse = true;                  
                questionRight();
            }
            else if (jQuery.inArray(idInput, choices[count].incorrect)) {  
                incorrectResponse = true;                  
                questionWrong(idInput); 
            }
            })       
        }}       

function questionRight() {
    correctAnswer++;
    clearInterval(secondsInterval);
    $("#questions").text("");
    $("#choices").html("<div class='choicestyling'>" + "Correct!" + '</div>');
    var gifdiv = $("<div>").attr("id", "gifid" + count);
    gifdiv.append("<img id='answergif' src=" + choices[count].image + '>');
    $("#choices").append(gifdiv);
    setTimeout(displayQuestion, 5000);
    secondsTimer = 16;
    nextQuestion();
}
function questionWrong(idInput) {
    //Re-define correctResponse so it gives us one less since the 'correct' objects start at 1 but the array index starts at 0
    var correctResponse = choices[count].correct - 1;
    incorrectAnswer++;
    clearInterval(secondsInterval);
    $("#questions").text("");
    $("#choices").html("<div class='choicestyling'>" + "Nope! The correct answer was " + "<br>" + choices[count].options[correctResponse] + "!" + '</div>');
    var gifdiv = $("<div>").attr("id", "gifid" + count);
    gifdiv.append("<img id='answergif' src=" + choices[count].image + '>');
    $("#choices").append(gifdiv);
    setTimeout(displayQuestion, 5000);
    secondsTimer = 16;
    nextQuestion();
    }

function questionNotAnswered(idInput) {
    var correctResponse = choices[count].correct - 1;
    unAnswered++;
    clearInterval(secondsInterval);
    $("#questions").text("");
    $("#choices").html("<div class='choicestyling'>" + "Out of time!" + "<br>" + "The correct answer was " + "<br>" + choices[count].options[correctResponse] + "!" + '</div>');
    var gifdiv = $("<div>").attr("id", "gifid" + count);
    gifdiv.append("<img id='answergif' src=" + choices[count].image + '>');
    $("#choices").append(gifdiv);
    setTimeout(displayQuestion, 5000);
    secondsTimer = 16;
    nextQuestion();
} 

function nextQuestion(secondsInterval) {
    count++;
    if (count === choices.length) {
        setTimeout(tally, 5000);
        count = 0;
        }
            }             

function tally() {
    clearInterval(secondsInterval);
    $("#seconds").text("");
    $("#questions").html("<div class='gamedone'>" + "Could this game BE anymore over?" + "<br>" + "Here's your score:" +  '</div>');
    $("#choices").html("<div class='pointsstyling'>" + "Correct answers: " + correctAnswer + "<br>"  + "Incorrect answers: " + incorrectAnswer + "<br>" + "Unanswered questions: " + unAnswered +  '</div>');
    var gifdiv = $("<div>").attr("id", "gifending");
    gifdiv.append("<img src='assets/images/win.gif'>");
    $("#choices").append(gifdiv);
    var restartButton = $("<button>");
    restartButton.attr('id', 'buttonrestart');
    restartButton.addClass("btn btn-primary btn-md");
    var buttonTitle = $("<h2>");
    buttonTitle.text("Restart?");
    restartButton.append(buttonTitle);
    var buttonDiv = $("<buttondiv>");
    buttonDiv.append(restartButton);
    $('#restart').append(buttonDiv);
    restartReady = true;
    if (restartReady) {
        $('#buttonrestart').click(function(){
            reset(secondsInterval);
        })}}

function reset(secondsInterval) {
    $('#buttonrestart').remove();
    correctAnswer = 0;
    incorrectAnswer = 0;
    unAnswered = 0;
    count = 0;
    secondsTimer = 16;
    displayQuestion();       
    } 

        }
    }

startGame();