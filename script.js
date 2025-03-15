const questions = [
    { question: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris", "Lisbon"], answer: "Paris" },
    { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], answer: "4" },
    { question: "What is the largest ocean?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], answer: "Pacific" },
    { question: "Who wrote 'Hamlet'?", options: ["Shakespeare", "Hemingway", "Tolkien", "Austen"], answer: "Shakespeare" },
    { question: "What is the boiling point of water?", options: ["90°C", "100°C", "110°C", "120°C"], answer: "100°C" }
];

function loadQuiz() {
    const quizContainer = document.getElementById("quiz");
    quizContainer.innerHTML = "";
    questions.forEach((q, index) => {
        let storedAnswer = sessionStorage.getItem("question_" + index) || "";
        let questionBlock = `<div class='question'>
            <p>${index + 1}. ${q.question}</p>
            <div class='options'>`;
        q.options.forEach(option => {
            let isChecked = storedAnswer === option ? "checked" : "";
            questionBlock += `<label><input type='radio' name='q${index}' value='${option}' ${isChecked} onchange='saveAnswer(${index}, this.value)'> ${option}</label>`;
        });
        questionBlock += "</div></div>";
        quizContainer.innerHTML += questionBlock;
    });
    displayStoredScore();
}

function saveAnswer(questionIndex, answer) {
    sessionStorage.setItem("question_" + questionIndex, answer);
}

function submitQuiz() {
    let score = 0;
    questions.forEach((q, index) => {
        let userAnswer = sessionStorage.getItem("question_" + index);
        if (userAnswer === q.answer) {
            score++;
        }
    });
    localStorage.setItem("score", score);
    document.getElementById("score").innerText = `Your score is ${score} out of 5.`;
}

function displayStoredScore() {
    let storedScore = localStorage.getItem("score");
    if (storedScore !== null) {
        document.getElementById("score").innerText = `Your score is ${storedScore} out of 5.`;
    }
}

window.onload = loadQuiz;
⌄
⌄
