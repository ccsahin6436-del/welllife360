const questions = [
    "1) Genel ruh halini nasıl değerlendirirsin?",
    "2) Günlük stres seviyen nasıl?",
    "3) Uyku düzenin ne kadar yeterli?",
    "4) Günlük enerjin nasıl?",
    ...
    "25) Genel sağlık durumunu nasıl değerlendirirsin?"
];

let current = 0;
let answers = [];

function startTest() {
    document.getElementById("startBtn").style.display = "none";
    showQuestion();
}

function showQuestion() {
    if (current >= questions.length) {
        return showResult();
    }

    document.getElementById("testArea").innerHTML = `
        <h3>${questions[current]}</h3>
        <button onclick="answer(1)">1 - Çok Kötü</button>
        <button onclick="answer(2)">2 - Kötü</button>
        <button onclick="answer(3)">3 - Orta</button>
        <button onclick="answer(4)">4 - İyi</button>
        <button onclick="answer(5)">5 - Çok İyi</button>
    `;
}

function answer(val) {
    answers.push(val);
    current++;
    showQuestion();
}

function showResult() {
    const total = answers.reduce((a, b) => a + b, 0);
    const maxScore = questions.length * 5;
    const percent = Math.round((total / maxScore) * 100);

    let message = "";

    if (percent >= 80) message = "Harika! Sağlık ve yaşam kaliten çok iyi.";
    else if (percent >= 60) message = "İyi durumdasın ama geliştirilebilecek alanlar var.";
    else if (percent >= 40) message = "Dikkat! Daha sağlıklı alışkanlıklara ihtiyacın var.";
    else message = "Önemli uyarı! Sağlık ve yaşam tarzını güçlendirmen gerekiyor.";

    document.getElementById("testArea").innerHTML = `
        <div class="resultBox">
            Sonuç: %${percent}<br><br>
            ${message}
        </div>
    `;
}
