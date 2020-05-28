const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const questionsContainer = document.getElementById('questions-container');
let randomize, questionIndex;
const questionElement = document.getElementById('question');
const answerBtns = document.getElementById('answer-btns');

// Event handlers
startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', () => {
    questionIndex++;
    setQuestion();
    if (randomize.length > questionIndex + 1) {
        nextBtn.classList.remove('hide');
    } else {
        startBtn.innerHTML ='Restart';
        startBtn.classList.remove('hide');
    }
});

// Starts the quiz
function startQuiz() {
    startBtn.classList.add('hide');
    randomize = shuffleQuestions(questions);
    questionIndex = 0;
    questionsContainer.classList.remove('hide');
    
    setQuestion();
}

// Sets the current question
function setQuestion() {
    resetQuestions();
    displayQuestions(randomize[questionIndex]);
}

// Display questions
function displayQuestions(question) {
    questionElement.innerHTML = '<h3>' + question.question + '</h3>';
    question.answers.forEach(element => {
        const button = document.createElement('button');
        button.innerHTML = element.option;
        button.classList.add('btn');
        if (element.correct) {
            button.dataset.correct = element.correct;
        }
        button.addEventListener('click', checkAnswer);
        answerBtns.appendChild(button);
    });
}

// Removes the current options when the next button is clicked
function resetQuestions() {
    nextBtn.classList.add('hide');
    while (answerBtns.firstChild) {
        answerBtns.removeChild(answerBtns.firstChild);
    }
}

// Checks if the answer is correct
function checkAnswer(e) {
    const selectedAnswer = e.target;
    const correct = selectedAnswer.dataset.correct;
    Array.from(answerBtns.children).forEach(button => {
        setClassStatus(button, button.dataset.correct);
    });
    nextBtn.classList.remove('hide');
}

// Styles the options based on the option chosen
function setClassStatus(element, correct) {
    clearClassStatus(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('incorrect');
    }
}

// Removes the option styles when the next button is clicked
function clearClassStatus(element) {
    element.classList.remove('correct');
    element.classList.remove('incorrect');
}

// Shuffles array elements using the Fisher-Yates shuffle algorithm
function shuffleQuestions(array) {
    for (let i = array.length - 1;  i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        // We use destructuring assignment syntax to swap the array elements
         [array[i], array[j]] = [array[j], array[i]];
         return array;
    }
}

// Quiz questions
let questions = [
    {
        question: 'Who is the father of JavaScript?',
        answers: [
            {option: 'Charles Babbage', correct: false},
            {option: 'Brendan Eich', correct: true},
            {option: 'Douglas Crockford', correct: false},
            {option: 'Steve Jobs', correct: false}
        ]
    },
    {
        question: 'When was JavaScript invented?',
        answers: [
            {option: '1989', correct: false},
            {option: '1996', correct: false},
            {option: '1992', correct: false},
            {option: '1995', correct: true}
        ]
    },
    {
        question: 'What is the output of the following: NaN == NaN?',
        answers: [
            {option: 'false', correct: true},
            {option: 'NaN', correct: false},
            {option: 'true', correct: false},
            {option: 'undefined', correct: false}
        ]
    },
    {
        question: 'What is the value of typeof null?',
        answers: [
            {option: 'String', correct: false},
            {option: 'Null', correct: false},
            {option: 'Object', correct: true},
            {option: 'Undefined', correct: false}
        ]
    },
    {
        question: 'What was JavaScript\'s first code name?',
        answers: [
            {option: 'LiveScript', correct: false},
            {option: 'JavaScript', correct: false},
            {option: 'TypeScript', correct: false},
            {option: 'Mocha', correct: true}
        ]
    },
    {
        question: 'What is the value of typeof NaN?',
        answers: [
            {option: 'Object', correct: false},
            {option: 'Number', correct: true},
            {option: 'Null', correct: false},
            {option: 'String', correct: false}
        ]
    },
    {
        question: 'Identify the falsy value:',
        answers: [
            {option: "''", correct: true},
            {option: "'0'", correct: false},
            {option: "' '", correct: false},
            {option: "'null'", correct: false}
        ]
    },
    {
        question: 'When was the ES6 version of JavaScript realeased?',
        answers: [
            {option: '2018', correct: false},
            {option: '2017', correct: false},
            {option: '2016', correct: false},
            {option: '2015', correct: true}
        ]
    },
    {
        question: '0.1 + 0.2 != 0.3',
        answers: [
            {option: 'true', correct: true},
            {option: 'undefined', correct: false},
            {option: 'false', correct: false},
            {option: 'NaN', correct: false}
        ]
    },
    {
        question: 'Another name for the conditional operator is:',
        answers: [
            {option: 'Unary operator', correct: false},
            {option: 'Binary operator', correct: false},
            {option: 'Ternary operator', correct: true},
            {option: 'Conditional statement', correct: false}
        ]
    }
]
