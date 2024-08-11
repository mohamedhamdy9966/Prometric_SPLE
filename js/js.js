function getQuestions() {
    let myRequest = new XMLHttpRequest();
    myRequest.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            try {
                let questionsObject = JSON.parse(this.responseText);
                questions = shuffle(questionsObject).slice(0, 105);
                createBullets(questions.length);
            } catch (error) {
                console.error("Error parsing JSON:", error);
                // Handle the error gracefully, e.g., display an error message
            }
        }
    };
    myRequest.open("GET", "js/questions.json", true);
    myRequest.send();
}

// Call getQuestions to fetch and process the questions
getQuestions();

const questionElement = document.getElementById("question");
const answersButton = document.getElementById("answer_btn");
const photo = document.getElementById("photo");
const nextButton = document.getElementById("next_btn");
const previousButton = document.getElementById("previous_btn");
const finishButton = document.getElementById("finish_btn");
const flagButton = document.getElementById("flag_btn");
const navigationButtons = document.getElementById("navigation_buttons");
const calculator = document.getElementById("helper-calculator");
const calculator_button = document.getElementById("calculator_button");
const timerElement = document.getElementById("timer");
const instructions = document.getElementById("instructions");
const sidebar = document.getElementById("sidebar");
const contact = document.getElementById("contact");
const progressContainer = document.getElementById("progressContainer");
let bulletsSpanContainer = document.querySelector(".bullets .spans");
let bulletsContainer = document.querySelector(".bullets .spans");

let currentQuestionIndex = 0;
let sofa = 0;
let timer;

const quizDuration = 7200;

// Create form element
var loginForm = document.createElement("form");
loginForm.setAttribute("id", "loginForm");

// Create username input field
var usernameInput = document.createElement("input");
usernameInput.setAttribute("type", "text");
usernameInput.setAttribute("placeholder", "Username");
usernameInput.setAttribute("id", "username");
usernameInput.setAttribute("pattern", "[A-Za-z]+"); // Ensure only letters
usernameInput.required = true;
usernameInput.classList.add("user-input");

// Create password input field
var passwordInput = document.createElement("input");
passwordInput.setAttribute("type", "password");
passwordInput.setAttribute("placeholder", "Password");
passwordInput.setAttribute("id", "password");
passwordInput.required = true;
passwordInput.classList.add("user-input");

// Create submit button
var submitButton = document.createElement("input");
submitButton.setAttribute("type", "submit");
submitButton.setAttribute("value", "Login");
submitButton.classList.add("login-input");

// Append elements to form
loginForm.appendChild(usernameInput);
loginForm.appendChild(passwordInput);
loginForm.appendChild(submitButton);

// Append form to the document body
document.body.appendChild(loginForm);

document.getElementById("username").addEventListener("input", function() {
    const usernameError = document.getElementById("usernameError");
    if (!/^[A-Za-z]*$/.test(this.value)) {
        usernameError.textContent = "Username must contain only letters.";
    } else {
        usernameError.textContent = "";
    }
});

// login function
loginForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    const enteredUsername = usernameInput.value;
    const enteredPassword = passwordInput.value;
    login(enteredUsername, enteredPassword); // Call the login function with entered credentials
});

function login(usernameInput, passwordInput) {
    const validCredentials = {
        "m": "m",
        "rawan": "othman@2024",
        "malaz": "malaz@2024",
        // "hawary": "hawary@2024",
        "ranakarim" : "rana@2024",
        // "ahmed" : "samir@2024",
        // ends in 8/8
        "moaz" : "moaz@2024",
        // ends in 14/8
        // "amein" : "elkamalei@2024"
        // ends in 4/8
    };

    if (validCredentials[usernameInput] === passwordInput) {
        alert(`Hello, ${usernameInput}! You can close the browser and reopen the website again to change the questions module. Best of luck!`);
        startQuiz(); // Call startQuiz if credentials are correct
    } else {
        alert("Please enter your username and password correctly.");
    }
};

//createBullets
function createBullets(questionsCount) {
    bulletsSpanContainer.innerHTML = ""; // Clear existing bullets
    for (let i = 1; i <= questionsCount; i++) {
        let theBullet = document.createElement("span");
        theBullet.textContent = i;
        if (i === currentQuestionIndex + 1) {
            theBullet.classList.add("on");
        }
        theBullet.addEventListener("click", () => handleBulletClick(i)); // Add event listener
        bulletsSpanContainer.appendChild(theBullet);
    }
};

//scroll the bullets
bulletsContainer.addEventListener("wheel", function(event) {
    let deltaY = event.deltaY;
    let scrollSpeed = 20; // Adjust this value to control scroll speed

    bulletsContainer.scrollTop += deltaY > 0 ? scrollSpeed : -scrollSpeed;

    // Prevent default scrolling behavior
    event.preventDefault();
});

// Create a function to handle bullet span click
function handleBulletClick(index) {
    currentQuestionIndex = index - 1; // Adjust index to match array index
    showQuestion();
    highlightSelectedAnswer();
};

// Shuffle the questions array to ensure randomness
function shuffle(questions) {
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }
    return questions;
}

let questions = [];

// startQuiz function
function startQuiz() {
    // Perform actions to start the quiz
    currentQuestionIndex = 0;
    sofa = 0;
    nextButton.innerHTML = "Next >";
    previousButton.innerHTML = "< Previous";
    showQuestion();
    startTimer();
    hideLoginForm();
    sidebar.style.display ="flex";
    contact.style.display ="none";
    progressContainer.style.display="flex";
}

//function to hide the login form after logging in
function hideLoginForm() {
    loginForm.classList.add("hidden");
    usernameInput.classList.add("hidden");
    passwordInput.classList.add("hidden");
    submitButton.classList.add("hidden");
    instructions.classList.add("hidden");
}

function startTimer() {
    let timeRemaining = quizDuration;

    timer = setInterval(function () {
        const hours = Math.floor(timeRemaining / 3600);
        const minutes = Math.floor((timeRemaining % 3600) / 60);
        const seconds = timeRemaining % 60;

        timerElement.innerHTML = `<i class="fa-solid fa-clock"></i> Section Time Remaining: ${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;

        if (timeRemaining <= 0) {
            clearInterval(timer);
            Score();
        }

        timeRemaining--;
    }, 1000);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    
    // Check if the current question has an image
    if (currentQuestion.image) {
        // Create an image element
        const imageElement = document.createElement("img");
        imageElement.src = currentQuestion.image;
        imageElement.classList.add("question-image");
        questionElement.appendChild(imageElement);
    }


    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answersButton.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });

    updateProgressBar(); // Update progress bar when showing a question
}

function updateProgressBar() {
    const totalQuestions = questions.length;
    const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;
    const progressBar = document.getElementById("progressBar");
    progressBar.style.width = progress + "%";
}

function resetState() {
    nextButton.style.display = "block";
    navigationButtons.style.display = "flex";
    flagButton.style.display = "block";
    previousButton.style.display = "block";
    finishButton.style.display = "block";
    calculator_button.style.display = "block";
    while (answersButton.firstChild) {
        answersButton.removeChild(answersButton.firstChild);
    }
}

document.addEventListener('mousedown', function(event) {
    // Check if the right mouse button is clicked (button 2) and prevent default context menu
    if (event.button === 2) {
        // Prevent the default context menu from appearing
        event.preventDefault();
        
        // Check if the clicked element is a button
        if (event.target.classList.contains('btn')) {
            // Add line-through style to the clicked button's text
            event.target.style.textDecoration = 'line-through';      
        }
    }
});

let answers = JSON.parse(sessionStorage.getItem("answers")) || Array(questions.length).fill(null);

function selectAnswer(e) {
    const selectedButton = e.target;
    const selectedIndex = Array.from(answersButton.children).indexOf(selectedButton);
    answers[currentQuestionIndex] = selectedIndex; // Save the selected answer index
    sessionStorage.setItem("answers", JSON.stringify(answers)); // Save answers to session storage
    updateSelectedAnswer(selectedButton); // Update UI to highlight selected answer
    const isCorrect = selectedButton.dataset.correct === "true";
    if (isCorrect) {
        selectedButton.classList.add("perfecto");
        sofa++;
    } else {
        selectedButton.classList.add("shit");
    }
    Array.from(answersButton.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("perfecto")
        }
        button.disabled = true;
    });
    showNavigationButtons();
    nextButton.style.display = "block";
}

function updateSelectedAnswer(selectedButton) {
    Array.from(answersButton.children).forEach(button => {
        button.classList.remove("selected");
    });
    selectedButton.classList.add("selected");
    const bulletIndex = currentQuestionIndex;
    const bulletSpan = document.querySelector(`.bullets .spans span:nth-child(${bulletIndex + 1})`);
    bulletSpan.classList.add("answered");
}

function finishQuiz() {
    Score();
    currentQuestionIndex = questions.length;
}

function addEventListeners() {
    finishButton.addEventListener("click", finishQuiz);
    nextButton.addEventListener("click", startNext);
    previousButton.addEventListener("click", previewPreviousQuestion);
}

addEventListeners();

function previewPreviousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
        highlightSelectedAnswer();
        showNavigationButtons();
        nextButton.style.display = "block";
    }
}

function startNext() {
    if (currentQuestionIndex < questions.length) {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
        showQuestion();
        highlightSelectedAnswer();
        showNavigationButtons();
    } else {
        Score();
    } 
    }
    else {
        // Restart the quiz
        startQuiz();
    }
}

function highlightSelectedAnswer() {
    const selectedIndex = answers[currentQuestionIndex];
    if (selectedIndex !== null && selectedIndex !== undefined) {
        const selectedButton = answersButton.children[selectedIndex];
        updateSelectedAnswer(selectedButton);
        Array.from(answersButton.children).forEach(button => {
            button.disabled = true;
        });
    }
}

function showNavigationButtons() {
    if (currentQuestionIndex === 0) {
        previousButton.style.display = "none";
    } else {
        previousButton.style.display = "block";
    }
}

function Score() {
    clearInterval(timer);
    resetState();
    questionElement.innerHTML = `Congratulations! You scored ${sofa} out of ${questions.length}`;
    nextButton.innerHTML = "Try Again...";
    nextButton.style.display = "block";
    navigationButtons.style.display = "flex";
    previousButton.style.display = "none";
    flagButton.style.display = "none";
    finishButton.style.display = "none";
    calculator_button.style.display = "none";
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