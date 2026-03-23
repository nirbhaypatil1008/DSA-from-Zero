// Store all questions
const questions = [
    {
        question: "1. Which Language are You interested?",
        options: ["Java", "C++", "Python"]
    },
    {
        question: "2. Which field do you like?",
        options: ["Web Development", "Data Science", "AI/ML"]
    },
    {
        question: "3. Your experience level?",
        options: ["Beginner", "Intermediate", "Advanced"]
    },
    {
        question: "4. Preferred learning style?",
        options: ["Videos", "Practice", "Reading"]
    },
    {
        question: "5. Goal?",
        options: ["Job", "Projects", "DSA"]
    },
    {
        question: "6. are u vergien?",
        options:["in past days","No","may be"]
    }
];

let currentIndex = 0;

// Load question
function loadQuestion() {
    const qBox = document.querySelector(".question-box h2");
    const list = document.querySelector(".question-box ul");

    qBox.innerText = questions[currentIndex].question;

    list.innerHTML = "";
    questions[currentIndex].options.forEach(opt => {
        const li = document.createElement("li");
        li.innerText = opt;
        list.appendChild(li);
    });
}

// Next button
function nextQuestion() {
    if (currentIndex < questions.length - 1) {
        currentIndex++;
        loadQuestion();
    }
}

// Previous button
function prevQuestion() {
    if (currentIndex > 0) {
        currentIndex--;
        loadQuestion();
    }
}

// Load first question on page load
window.onload = loadQuestion;