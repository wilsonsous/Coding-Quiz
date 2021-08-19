// --------------------Series of created questions---------------------
const questions = [
    {
        question: 'Can const be reassign/redeclared? ',
        answers: [
            { text: 'Yes', correct:false },
            { text: 'No', correct:true },
        ]
    },
    {
        question: 'Which of the follow is not a data type?',
        answers: [
            { text: 'alerts', correct:true },
            { text: 'booleans', correct:false },
            { text: 'strings', correct:false },
            { text: 'numbers', correct:false },
        ]
    },
    {
        question: 'Where should you insert script javascript link in HTML?',
        answers: [
            { text: 'Anywhere in HTML', correct:false },
            { text: 'Towards the bottom of body', correct:true},
            { text: 'Inside the head', correct:false },
            { text: 'Outside of body', correct:false },
        ]
    },
    {
        question: 'Do number data types need quotes?',
        answers: [
            { text: 'Yes', correct:false },
            { text: 'No', correct:true },
        ]
    },
    {
        question: 'How do you write "Hello World" in an alert box?',
        answers: [
            { text: 'msg("Hello World")', correct:false },
            { text: 'msgBox("Hello World")', correct:false },
            { text: 'alert("Hello World")', correct:true },
            { text: 'alertBox("Hello World")', correct:false },
        ]
    },
    {
        question: 'How do you call a function name "myFunction"?',
        answers: [
            { text: 'call myFunction()', correct:false },
            { text: 'call function myFunction()', correct:false },
            { text: 'myFunction()', correct:true },
        ]
    },

]


// --------------------------Question's functionality-------------------
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionsIndex

nextButton.addEventListener('click', () => {
    currentQuestionsIndex++
    setNextQuestion()
})
function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionsIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionsIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while(answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if(shuffledQuestions.length > currentQuestionsIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if(correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

function stopGame() {
    questionContainerElement.innerHTML = "<h2>GAME OVER</h2>";

}



// ---------------- Timer -------------
document.getElementById("start-btn").addEventListener("click", function(){
    var timeleft = 60;

    var downloadTimer = setInterval(function function1(){
    document.getElementById("countdown").innerHTML = timeleft;

    timeleft -= 1;
    if(timeleft <= 0){
        clearInterval(downloadTimer);
        document.getElementById("countdown").innerHTML = "Time is up!"
        stopGame()
    }
    }, 1000);

    console.log(countdown);
    startGame();
});