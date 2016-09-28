"use strict";

$(function () {
    var views = getViews();
    $(".container").append(views.startGame);
    console.log(views.startGame);
});

function getViews() {
    return {
        startGame: $(".templates").find(".js-view-start-game").clone()
    }
}

function getQuestions() {
    var questions = [
        "How many seasons was Tasha Yar on the Enterprise as a main character?",
        "What is Worf's favorite drink?",
        "What ship was Picard on before the Enterprise?",
        "Data can be disabled by a switch. Where is it?",
        "What does Deanna love almost as much as life itself?",
        "What kind of tea does Picard drink?",
        "What is the name of Data's cat?",
        "At what age did Geordi become blind?",
        "What kind of music does Riker like?",
        "Where does Chief O'Brien work?"
    ];
    var answers = [
        ["3", "1", "5", "2"],
        ["root beer", "milk", "ale", "prune juice"],
        ["The Melbourne", "The Yamato", "The Stargazer", "The Potekin"],
        ["behind the ear", "small of the back", "back of the head", "under the arm"],
        ["pizza", "goulash", "candy", "chocolate"],
        ["earl gray", "black tea", "green tea", "white tea"],
        ["Rover", "Stripes", "Tiger", "Spot"],
        ["3", "10", "20", "birth"],
        ["classical", "jazz", "blues", "rock"],
        ["transporter room", "engineering", "ten forward", "sick bay"]
    ];
    var correctIndex = [1, 3, 2, 1, 3, 0, 3, 3, 1, 0];
    return questions.map(function (elem, i) {
        return {
            text: questions[i],
            answers: answers[i],
            correctIndex: correctIndex[i]
        };
    });
}

function getRandomQuestions(num) {
    var questions = getQuestions().slice();
    for (var i = questions.length - 1; i > 0; i--) {
        var r = Math.floor(Math.random() * (questions.length));
        var j = questions[r];
        questions[r] = questions[i];
        questions[i] = j;
    }
    return questions.slice(0, num);
}