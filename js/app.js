"use strict";

var QUIZ_LENGTH = 5;

$(function () {
    var views = getViews();
    var startGameView = views.startGame;
    var questionPromptView = views.questionPrompt;
    var summaryView = views.summary;
    var state = {};
    setView(startGameView);

    startGameView.find("#js-start-game").click(function (event) {
        event.preventDefault();
        startGame(state, questionPromptView);
    });

    questionPromptView.find(".js-answer").click(function (event) {
        event.preventDefault();
        submitAnswer(state, summaryView, event);
    });

    summaryView.find("#js-continue").click(function (event) {
        event.preventDefault();
        continueQuiz(state, questionPromptView, event);
    });
});

function startGame(state, view) {
    clearState(state);
    setRandomQuestions(state);
    updateQuestionPrompt(state, view);
    setView(view);
}

function submitAnswer(state, view, event) {
    var currentQuestion = state.questions[state.currentQuestion];
    var answer = $(event.currentTarget).text();
    state.lastQuestionAnswer = answer;
    if (answer === currentQuestion.answers[currentQuestion.correctIndex]) {
        state.questionsCorrect++;
        state.lastQuestionCorrect = true;
    } else {
        state.questionsWrong++;
        state.lastQuestionCorrect = false;
    }
    updateSummaryView(state, view);
    setView(view);
}

function continueQuiz(state, view, event) {
    state.currentQuestion++;
    if (state.currentQuestion == QUIZ_LENGTH) {
        alert("done");
        return;
    }
    updateQuestionPrompt(state, view);
    setView(view);
}

function updateQuestionPrompt(state, view) {
    view.find("#js-quiz-progress").text(state.currentQuestion + 1 + " out of " + QUIZ_LENGTH);
    view.find("#js-question-text").text(state.questions[state.currentQuestion].text);
    view.find(".js-answer").each(function (i) {
        $(this).text(state.questions[state.currentQuestion].answers[i]);
    });
    view.find("#js-stats").text(
        state.questionsCorrect + " correct, " + (state.questionsWrong) + " wrong"
    );
}

function updateSummaryView(state, view) {
    var question = state.questions[state.currentQuestion];
    view.find("h1").text(state.lastQuestionCorrect ? "Correct!" : "Wrong!");
    view.find("h2").text(question.text);
    view.find("#js-user-answer-header").text("Your Answer");
    view.find("#js-user-answer").text(state.lastQuestionAnswer);
    var expectedHeader = view.find("#js-expected-header");
    var expected = view.find("#js-expected");
    if (state.lastQuestionCorrect) {
        expectedHeader.addClass("hidden");
        expected.addClass("hidden");
    } else {
        expectedHeader.removeClass("hidden");
        expected.removeClass("hidden");
        expectedHeader.text("Correct Answer");
        expected.text(question.answers[question.correctIndex]);
    }
}

function clearState(state) {
    state.currentQuestion = 0;
    state.questionsCorrect = 0;
    state.questionsWrong = 0;
}

function getViews() {
    return {
        startGame: $(".templates").find("#js-view-start-game").clone(),
        questionPrompt: $(".templates").find("#js-view-question-prompt").clone(),
        summary: $(".templates").find("#js-view-summary").clone()
    }
}

function setView(view) {
    $(".container").children().detach();
    $(".container").append(view);
}

function setRandomQuestions(state) {
    state.questions = getRandomQuestions(QUIZ_LENGTH);
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