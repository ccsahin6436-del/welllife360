const questions = [
    "1) Genel ruh halini nasıl değerlendirirsin?",
    "2) Günlük stres seviyen nasıl?",
    "3) Uyku düzenin ne kadar yeterli?",
    "4) Günlük enerjin nasıl?",
    "5) Kendine ayırdığın vakitten memnun musun?",
    "6) Son 1 ayda fiziksel ağrı yaşadın mı?",
    "7) Günlük su tüketimin yeterli mi?",
    "8) Haftalık spor yapma sıklığın?",
    "9) Beslenme düzenin ne kadar sağlıklı?",
    "10) Mevsimsel hastalıklara yakalanma sıklığın?",
    "11) Sosyal ilişkilerinden memnun musun?",
    "12) Kendini motive hissediyor musun?",
    "13) Gün içinde ne kadar hareket ediyorsun?",
    "14) Kafein tüketimin nasıl?",
    "15) Psikolojik olarak kendini güçlü hissediyor musun?",
    "16) Nefes egzersizi veya meditasyon yapıyor musun?",
    "17) Kendine güven seviyen nasıl?",
    "18) İş/okul stresin ne durumda?",
    "19) Günlük yorgunluk seviyen?",
    "20) Sağlık kontrollerini aksatır mısın?",
    "21) Genel fiziksel gücünü nasıl değerlendirirsin?",
    "22) Kendine koyduğun hedefleri uygulayabiliyor musun?",
    "23) Gün içinde odaklanma seviyen nasıl?",
    "24) Kişisel bakım alışkanlıkların nasıl?",
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
