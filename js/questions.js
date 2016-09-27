'use strict';

function QuizQuestion(question, answers, correctIndex, tidbit) {
    return {
        question: question,
        answers: answers.map(function (item, i) {
            return {
                text: item,
                correct: correctIndex === i
            }
        }),
        tidbit: tidbit
    }
}

function QuizQuestionPool() {
    return [
        quizQuestion(
            "How many seasons was Tasha Yar on the Enterprise as a main character?",
            [
                "3",
                "1",
                "5",
                "2"
            ],
            1,
            "Tasha died before season one ended."
        ),
        quizQuestion(
            "What is Worf's favorite drink?",
            [
                "root beer",
                "milk",
                "ale",
                "prune juice"
            ],
            3,
            "In \"Yesterday's Enterprise\" Guinan offered him prune juice to which he replied \"a warrior's drink\"."
        ),
        quizQuestion(
            "What ship was Picard on before the Enterprise?",
            [
                "The Melbourne",
                "The Yamato",
                "The Stargazer",
                "The Potemkin"
            ],
            2,
            "In several episodes throughout the seasons, Picard mentioned his old ship, The Stargazer."
        ),
        quizQuestion(
            "Data can be disabled by a switch. Where is it?",
            [
                "behind the ear",
                "small of the back",
                "back of the head",
                "under the arm"
            ],
            1,
            "Data told the doctor about his on/off switch and that it was located on his back."
        ),
        quizQuestion(
            "What does Deanna love almost as much as life itself?",
            [
                "pizza",
                "goulash",
                "candy",
                "chocolate"
            ],
            3,
            "In many episodes we see Deanna in Ten Forward eating a variety of chocolate concoctions."
        ),
        quizQuestion(
            "What kind of tea does Picard drink?",
            [
                "earl gray",
                "black tea",
                "green tea",
                "white tea"
            ],
            0,
            "In almost every episode we can see Picard ordering \"tea, Earl Gray, hot.\""
        ),
        quizQuestion(
            "What is the name of Data's cat?",
            [
                "Rover",
                "Stripes",
                "Tiger",
                "Spot"
            ],
            3,
            "In several episodes we can see Data and spot together. He even composed a poem to spot in one of episode."
        ),
        quizQuestion(
            "At what age did Geordi become blind?",
            [
            "3",
            "10",
            "20",
            "birth"
            ],
            3,
            "Geordi has told several people that he was born blind."
        ),
        quizQuestion(
            "What kind of music does Riker like?",
            [
                "classical",
                "jazz",
                "blues",
                "rock"
            ],
            1,
            "There have been several episodes in which Riker's preference in music was mentioned."
        ),
        quizQuestion(
            "Where does Chief O'Brien work?",
            [
                "transporter room",
                "engineering",
                "ten forward",
                "sick bay"
            ],
            0,
            "We saw him on the bridge a few times but the main place we saw him was in the transporter room."
        )
    ]
}
