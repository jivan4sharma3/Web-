const questions = [
    {
        question: "Which of the following is not an input device?",
        answers: [
            { text: "Keyboard", correct: false },
            { text: "Mouse", correct: false },
            { text: "Monitor", correct: true },
            { text: "Scanner", correct: false }
        ]
    },
    {
        question: "What does CPU stand for?",
        answers: [
            { text: "Central Process Unit", correct: false },
            { text: "Central Processing Unit", correct: true },
            { text: "Computer Power Unit", correct: false },
            { text: "Control Process Unit", correct: false }
        ]
    },
    {
        question: "Which language is used for web development?",
        answers: [
            { text: "C", correct: false },
            { text: "Python", correct: false },
            { text: "JavaScript", correct: true },
            { text: "Assembly", correct: false }
        ]
    },
    {
        question: "Which of the following uses FIFO structure?",
        answers: [
            { text: "Stack", correct: false },
            { text: "Queue", correct: true },
            { text: "Array", correct: false },
            { text: "Tree", correct: false }
        ]
    },
     {
    question: "HTML stands for?",
    answers: [
      { text: "Home Text Markup Language", correct: false },
      { text: "HyperText Markup Language", correct: true },
      { text: "Hyper Tool Markup Language", correct: false },
      { text: "Hyperlinks and Text Marking Language", correct: false }
    ]
  },
  {
    question: "Which is not a database model?",
    answers: [
      { text: "Hierarchical", correct: false },
      { text: "Network", correct: false },
      { text: "Relational", correct: false },
      { text: "Modular", correct: true }
    ]
  },
  {
    question: "Which memory is permanent?",
    answers: [
      { text: "RAM", correct: false },
      { text: "ROM", correct: true },
      { text: "Cache", correct: false },
      { text: "Register", correct: false }
    ]
  },
  {
    question: "Which protocol is used for web browsing?",
    answers: [
      { text: "SMTP", correct: false },
      { text: "HTTP", correct: true },
      { text: "FTP", correct: false },
      { text: "TCP", correct: false }
    ]
  },
  {
    question: "Which port is used by HTTP?",
    answers: [
      { text: "80", correct: true },
      { text: "21", correct: false },
      { text: "443", correct: false },
      { text: "25", correct: false }
    ]
  },
  {
    question: "Which is not a loop in C?",
    answers: [
      { text: "while", correct: false },
      { text: "repeat", correct: true },
      { text: "for", correct: false },
      { text: "do-while", correct: false }
    ]
  },
  {
    question: "In C, what does 'int' stand for?",
    answers: [
      { text: "Internal", correct: false },
      { text: "Integer", correct: true },
      { text: "Integral", correct: false },
      { text: "Intense", correct: false }
    ]
  },
  {
    question: "Which one is a primary key property?",
    answers: [
      { text: "Can be null", correct: false },
      { text: "Must be unique", correct: true },
      { text: "Must be duplicate", correct: false },
      { text: "Changes frequently", correct: false }
    ]
  },
  {
    question: "Which tag is used to add a link in HTML?",
    answers: [
      { text: "a", correct: true },
      { text: "link", correct: false },
      { text: "href", correct: false },
      { text: "url", correct: false }
    ]
  },
  {
    question: "Which of the following is system software?",
    answers: [
      { text: "MS Word", correct: false },
      { text: "Windows OS", correct: true },
      { text: "PowerPoint", correct: false },
      { text: "Excel", correct: false }
    ]
  },
  {
    question: "Which command compiles a C program?",
    answers: [
      { text: "compile", correct: false },
      { text: "run", correct: false },
      { text: "gcc", correct: true },
      { text: "exe", correct: false }
    ]
  },
  {
    question: "What is 10 % 3 in C language?",
    answers: [
      { text: "3", correct: false },
      { text: "1", correct: true },
      { text: "0", correct: false },
      { text: "10", correct: false }
    ]
  },
  {
    question: "Which keyword defines a constant in C?",
    answers: [
      { text: "static", correct: false },
      { text: "#define", correct: true },
      { text: "const", correct: false },
      { text: "value", correct: false }
    ]
  },
  {
    question: "Which one is not a type of OS?",
    answers: [
      { text: "Real-time", correct: false },
      { text: "Batch", correct: false },
      { text: "Cloud", correct: true },
      { text: "Time-sharing", correct: false }
    ]
  },
  {
    question: "Which language is best for frontend web dev?",
    answers: [
      { text: "Java", correct: false },
      { text: "Python", correct: false },
      { text: "HTML", correct: true },
      { text: "C", correct: false }
    ]
  },
  {
    question: "Which one is a valid IPv4 address?",
    answers: [
      { text: "192.168.1.1", correct: true },
      { text: "999.999.999.999", correct: false },
      { text: "abc.def.ghi.jkl", correct: false },
      { text: "256.300.1.1", correct: false }
    ]
  }
];

const questionElement = document.getElementById("question")
const answerButtons = document.getElementById("answer-buttons")
const nextbutton = document.getElementById("next-btn")
let currentQuestionIndex = 0; // renamed for clarity
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextbutton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    restState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);  // fixed variable name
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
    });
}

function restState() {
    nextbutton.style.display = "none";
    while (answerButtons.firstChild) {   // fixed variable name
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target
    const isCorrect = selectedBtn.dataset.correct === "true"
    if (isCorrect) {
        selectedBtn.classList.add("correct")
        score++
    }
    else {
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct")
        }
        button.disabled = true
    })
    nextbutton.style.display = "block"
}

function showScore() {
    restState()
    questionElement.innerHTML = `Your socred ${score} out of ${questions.length}`
    nextbutton.innerHTML = "Play Again"
    nextbutton.style.display = "block"
}

function handleNextButton() {
    currentQuestionIndex++
    if (currentQuestionIndex < questions.length) {
        showQuestion()
    } else {
        showScore()
    }
}

nextbutton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton()
    }
    else {
        startQuiz()
    }
})
startQuiz();