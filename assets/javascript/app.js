var gameOn = false;
var correctAnswer = 0;
var incorrectAnswer = 0;
var unAnswered = 0;
var questionAsked = false;

function startGame () {
    gameOn = true;
    $("#start").click(startQuestions);
}

var choices = [
    {question: "To get over Richard, what did Monica start making?",     
    options: ["Pancakes", "Marmalade", "Jam", "Candy"],
   // image1: '' ,
    correct: 3},
    {question: "What was the name of the self help book that the girls loved?",
    options: ["Be Your Own Person", "Be Your Own Cleaning Pool", "Be Your Own Windkeeper", "Be Your Own Lightning Bearer"],
    //  image2: '' ,
    correct: 3},
    {question: "Where was the 'Aroma' room?",
    options: ["Monica's dollhouse ", "Phoebe's dollhouse", "Chandler and Joey's apartment", "The Chick and The Duck's cabinet"],
    // image3: '' ,
    correct: 2},
    {question: "What was wrong with the couch Ross returned to the store?",
    options: ["The color was wrong", "It had a stain", "It was cut in half", "It was torn"],
    // image4: '' ,
    correct: 1},
    {question: "What was the name of Eddie's ex-girlfriend?",
    options: ["Tanya", "Leslie", "Tilly", "Tara"],
    //  image5: '' ,
    correct: 3},
    {question: "How many long-stemmed roses did Ross send to Emily?",
    options: ["72", "52", "100", "86"],
    //  image6: '' ,
    correct: 1},
    {question: "What was Phoebe in charge of at Rachel's suprise party?",
    options: ["Cups and food", "Ice and food", "Balloons and ice", "Cups and ice"], 
    //  image7: '' ,
    correct: 1},
    {question: "How many lasagnas did Monica make for her aunt?",
    options: ["12", "14", "13", "6"], 
    //  image8: '' ,
    correct: 1},
    {question: "What heirloom did Phoebe inherit?",
    options: ["A fur coat", "A chair", "A dollhouse", "A puppy"],
    //  image9: '' ,
    correct: 1}
]; 

// Variable showQuestion will hold the setInterval when we start the game
var showQuestion;
var startQuestions;
// Count will keep track of the index of the currently displaying question.
var count = 0;
var showChoices;
var startChoices;
var secondsTimer = 16;



function startQuestions() {
        $("#start").hide();
        displayQuestion();
        //Use showQuestions to hold the setInterval to run nextQuestion.
        showQuestions = setInterval(nextQuestion, 15000);

    function displayQuestion() {
        var secondsInterval = setInterval(countdownTimer, 1000);           
        function countdownTimer() {
        secondsTimer--;
        $("#seconds").text("Time Remaining: " + secondsTimer + "Seconds");
        if (secondsTimer <= 1) {
            clearInterval(secondsInterval);
            secondsTimer;
            }}

        $("#questions").text(choices[count].question);
        $("#choices").html("<div class='buttons'>" + "<button id='1'>" + choices[count].options[0] + "</button>" + "<br>"  + "<button id='2'>" + choices[count].options[1] + "</button>" + "<br>" + "<button id='3'>" + choices[count].options[2] + "</button>" + "<br>" + "<button id='4'>" + choices[count].options[3] + "</button>" + '</div>');

        questionAsked = true;
        questionPoints();

        function questionPoints() {
        if (questionAsked) {  
            $("button").click(function(){
                var idInput = $(this).attr('id');
                var correctresponse = choices[count].correct;
                if (idInput == correctresponse) {
                    questionRight();
                } else {   
                questionWrong(idInput); 
                    }
                })}}       

    function questionRight() {
        correctAnswer++;
        clearInterval(secondsInterval);
        $("#questions").text("");
        $("#choices").html("<div class='choicestyling'>" + "Correct!" + '</div>');
        count++;
        setTimeout(displayQuestion, 3000);
        secondsTimer = 16; 
    }

    function questionWrong(idInput) {
        var correctresponse = choices[count].correct - 1;
        console.log(correctresponse);
        correctAnswer--;
        incorrectAnswer++;
        clearInterval(secondsInterval);
        $("#questions").text("");
        $("#choices").html("<div class='choicestyling'>" + "Nope! The correct answer was " + choices[count].options[correctresponse] + "!" + '</div>');
        count++;
        setTimeout(displayQuestion, 3000);
        secondsTimer = 16; 
    }
}
   
    function nextQuestion() {
    //  Increment the count by 1.
    count++;
    //Use a setTimeout to run displayQuestion after 1 second.
   // setTimeout(displayQuestion, 1000);
    //If the count is the same as the length of the question array, reset the count to 0.
   if (count === questions.length && choices.length) {
      count = 0;
    }
    }

    //   function stopQuestion() {
    //     //Put our clearInterval here:
    //     clearInterval(showQuestions); 
    //   }     
    }

    startGame();
    
