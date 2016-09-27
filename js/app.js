"use strict";

var FlowEnum = {
    SPLASH: 0,
    QUESTION: 1
}

function State() {
    return {
        flow: FlowEnum.SPLASH
    };
}

function App(element, questionPool) {
    var state = State();
    var splashPage = SplashPage();
    var questionPage = QuestionPage(state);

    var app = {}
    app.render = function () {
        switch (state.flow) {
            case FlowEnum.SPLASH:
                element.append(splashPage);
                break;
            case FlowEnum.QUESTION:
                element.append(questionPage);
                break;
        }
    }

    splashPage.startGame = function () {
        splashPage.detach();
        state.flow = FlowEnum.QUESTION;
        app.render();
    }

    return app;
}

function SplashPage() {
    var page = $('<div class="row">' +
        '<div class="col-12">' +
        '<a href="#" id="start-game">Start Quiz!</a>' +
        '</div>' +
        '</div>');
    page.find('#start-game').click(function (event) {
        event.preventDefault();
        if (page.startGame) page.startGame();
    });
    return page;
}

function QuestionPage(state) {
    var page = $('<div class="row">' +
        '<div class="col-12">' +
        '<span>What is the answer?</span>' +
        '</div>'
    );
    return page;
}

$(function () {
    var app = App($(".js-app"));
    app.render();
});