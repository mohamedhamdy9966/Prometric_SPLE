const questions = [
    {
        question: "what is used For Cough from Herbs ?" ,
        answers: [
            { text: "Anise" ,correct:false},
            { text: "Myrrh" ,correct:true},
            { text: "Ginger" ,correct:false},
            { text: "Peppermint" ,correct:false},
        ]
    },
    {
        question: "what is best Known For dry Cough ?" ,
        answers: [
            { text: "Guafincin" ,correct:false},
            { text: "Dextromethorphan" ,correct:true},
            { text: "Salbutmol" ,correct:false},
            { text: "Theophylline" ,correct:false},
        ] 
    },
    {
        question: "Warfarin Toxicity Treated with ?" ,
        answers: [
            { text: "Atropine" ,correct:false},
            { text: "Sodium BiCarbonate" ,correct:false},
            { text: "Calcium in Saline" ,correct:false},
            { text: "Vit k" ,correct:true},
        ]
    },
    {
        question: "Digoxin toxicity Treated with ?" ,
        answers: [
            { text: "Neostigamine" ,correct:"false"},
            { text: "Defab" ,correct:"true"},
            { text: "Pyridoxine" ,correct:"false"},
            { text: "Physostigamine" ,correct:"false"},
        ]
    },
    {
        question: "BerriBerri Comes from lack of ?" ,
        answers: [
            { text: "B2" ,correct:"false"},
            { text: "B1" ,correct:"true"},
            { text: "B6" ,correct:"false"},
            { text: "B12" ,correct:"false"},
        ]  
    },
    {
        question: "Drugs Can Induce their effects by all the following mechanisms except " ,
        answers: [
            { text: "inhibition of target enzymes" ,correct:"false"},
            { text: "Binding to plasma proteins" ,correct:"true"},
            { text: "Binding to target receptors" ,correct:"false"},
            { text: "Blockade of iron channel" ,correct:"false"},
        ]  
    },
    {
        question: "Pharmacokinetics  is the study of the kinetics of the drug which includes the following except " ,
        answers: [
            { text: "Absorbtion" ,correct:"false"},
            { text: "Uses" ,correct:"true"},
            { text: "Excretion" ,correct:"false"},
            { text: "Metabolism" ,correct:"false"},
        ]  
    },
    {
        question: "Advantages of the oral route of drug administration include the following except " ,
        answers: [
            { text: "Most Convenient" ,correct:"false"},
            { text: "Best Route in emergency" ,correct:"true"},
            { text: "Easiest Route" ,correct:"false"},
            { text: "Most economic" ,correct:"false"},
        ]  
    },
    {
        question: "The Sublingual Route of drug administration is suitable for" ,
        answers: [
            { text: "Drug Rapidly Destroyed By liver" ,correct:"true"},
            { text: "Drug used in large dose" ,correct:"false"},
            { text: "drug rapidly excreted by kidney" ,correct:"false"},
            { text: "Drug destroyed by salivary secretion" ,correct:"false"},
        ]  
    },
    {
        question: "Advantages of the intravenous route of drug administration include the following except " ,
        answers: [
            { text: "Rapid on set" ,correct:"false"},
            { text: "Best on shock" ,correct:"false"},
            { text: "Best for highly Irritant drugs" ,correct:"false"},
            { text: "least in toxic reactions" ,correct:"true"},
        ]  
    },
    {
        question: "The following route is the best method for administration of oily drugs " ,
        answers: [
            { text: "Intravenous" ,correct:"false"},
            { text: "Intramuscular" ,correct:"true"},
            { text: "Inhalation" ,correct:"false"},
            { text: "Sublingual" ,correct:"false"},
        ]  
    },
    {
        question: "Enteric Coated Tablets are used in " ,
        answers: [
            { text: "Drugs irritant to stomach" ,correct:"true"},
            { text: "Drugs destroyed by intestinal enzymes" ,correct:"false"},
            { text: "Antacids drugs" ,correct:"false"},
            { text: "Drugs destroyed by saliva" ,correct:"false"},
        ]  
    },
    {
        question: "Which of the following drugs is produced by recombinant Dna technology " ,
        answers: [
            { text: "Atropine" ,correct:"false"},
            { text: "Human Insulin" ,correct:"true"},
            { text: "Digoxin" ,correct:"false"},
            { text: "Aspirin" ,correct:"false"},
        ]  
    },
    {
        question: "All of the Following statements concerning (simple diffusion of drugs through lipid membranes) are true except " ,
        answers: [
            { text: "it occurs along a concentration gradient" ,correct:"false"},
            { text: "it does not require cellular energy" ,correct:"false"},
            { text: "ionized drugs is lipid soluble and diffusible" ,correct:"true"},
            { text: "it does not require carrier" ,correct:"false"},
        ]  
    }
];
const questionElement = document.getElementById("question");
const answersButton = document.getElementById("answer_btn");
const nextButton = document.getElementById("next_btn");
const calculator = document.getElementById("helper-calculator");
const calculator_button = document.getElementById("calculator_button");
const timerElement = document.getElementById("timer"); 

let currentQuestionIndex = 0;
let sofa = 0;
let timer;

const quizDuration = 7200;

function startQuiz() {
    currentQuestionIndex = 0;
    sofa = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
    startTimer();
}
function startTimer() {
    let timeRemaining = quizDuration;

    timer = setInterval(function () {
        timerElement.innerHTML = `Time: ${timeRemaining}s`;

        if (timeRemaining <= 0) {
            clearInterval(timer);
            Score();
        }

        timeRemaining--;
    }, 1000);
}
// setTimeout(() => {
//      startQuiz();   
// }, 60000);
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answersButton.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click" , selectAnswer);
    });
}

startQuiz();

function resetState() {
    nextButton.style.display = "none";
    calculator_button.style.display = "block";  // or "flex" depending on the display style you want
    while (answersButton.firstChild) {
        answersButton.removeChild(answersButton.firstChild);
    };
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === "true";
    if (isCorrect) {
        selectedButton.classList.add("perfecto");
        sofa++;
    }else{
        selectedButton.classList.add("shit");
    }
    Array.from(answersButton.children).forEach( button => {
        if (button.dataset.correct === "true") {
            button.classList.add("perfecto")
        }
        button.disabled = "true";
    });
    nextButton.style.display = "block";
}
nextButton.addEventListener("click" , () =>{
    if (currentQuestionIndex < questions.length) {
        startNext();
    }else{
        startQuiz();
    }
})

function startNext() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        Score();
    }
}

function Score() {
    clearInterval(timer);
    resetState();
    questionElement.innerHTML = `Congratulations ! you scored ${sofa} out of ${questions.length}`;
    nextButton.innerHTML = "try again";
    nextButton.style.display = "block";
    calculator_button.style.display = "none";  // or "flex" depending on the display style you want
}
calculator_button.addEventListener("click", () => {
    if (calculator.style.display === "none") {
        calculator.style.display = "block";  // or "flex" depending on the display style you want
        // calculator_button.classList.add("actived");
    } else {
        calculator.style.display = "none";
        // calculator_button.classList.remove("actived");
    }
});

