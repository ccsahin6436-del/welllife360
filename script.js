const questions = [
    "Genel olarak gün içinde enerjin nasıl?",
    "Uyku düzenin nasıl? Sabah dinç uyanıyor musun?",
    "Sık sık baş ağrısı, yorgunluk veya halsizlik hisseder misin?",
    "Günlük adım sayın ortalama kaç?",
    "Haftada kaç gün spor yapıyorsun?",
    "Beslenme düzenin nasıl? Öğün atlar mısın?",
    "Şekerli veya paketli gıdaları ne sıklıkla tüketirsin?",
    "Bir işte odaklanmakta zorlanıyor musun?",
    "Kaygı, stres veya duygusal dalgalanmalar yaşıyor musun?",
    "Gün içinde ne kadar su içiyorsun?",
    "Sosyal ilişkilerin seni mutlu ediyor mu?",
    "Kendini ne kadar güçlü ve dayanıklı hissediyorsun?",
    "Kilo kontrolünde zorlanıyor musun?",
    "Nefes darlığı, çarpıntı gibi sorunların var mı?",
    "Sindirim sistemin (şişkinlik, kabızlık, hassasiyet) düzenli mi?",
    "Dış görünüşün seni tatmin ediyor mu?",
    "Günlük hayatında hareketli misin yoksa daha çok oturuyor musun?",
    "Telefon ve sosyal medya kullanımın günde kaç saat?",
    "Kendine ayırdığın kişisel zaman yeterli mi?",
    "Hayatında motivasyonunu düşüren şeyler çok mu?",
    "Kendini ruhsal olarak güçlü hissediyor musun?",
    "Vücudunda sürekli ağrıyan bölgeler var mı?",
    "Haftada kaç gün ev dışında yürüyüş yaparsın?",
    "Kendini geliştirme (kitap, eğitim vb) alışkanlığın var mı?",
    "Genel sağlık durumunu nasıl değerlendirirsin?"
];

let current = 0;
let answers = [];

function startTest() {
    document.getElementById("testArea").innerHTML = showQuestion();
}

function showQuestion() {
    if (current >= questions.length) {
        return showResult();
    }

    return `
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
    document.getElementById("testArea").innerHTML = showQuestion();
}

function showResult() {
    const total = answers.reduce((a, b) => a + b, 0);
    const avg = total / answers.length;

    let analysis = "";

    if (avg <= 2) {
        analysis += "<h2>Genel Durum: Kritik ⚠️</h2>";
        analysis += "<p>Hem fiziksel hem ruhsal olarak ciddi destek ihtiyacın var.</p>";
        analysis += "<p><b>Öneri:</b> Hafif yürüyüş + temel beslenme düzeni + stres yönetimi çalışmaları.</p>";
    } 
    else if (avg <= 3) {
        analysis += "<h2>Genel Durum: Zayıf ⚠️</h2>";
        analysis += "<p>Dengeli bir programa ihtiyacın var.</p>";
        analysis += "<p><b>Öneri:</b> 3 gün spor, düzenli su, daha iyi uyku rutini.</p>";
    }
    else if (avg <= 4) {
        analysis += "<h2>Genel Durum: Orta 🙂</h2>";
        analysis += "<p>Potansiyelin var, biraz düzen şart.</p>";
        analysis += "<p><b>Öneri:</b> 4 gün spor, sağlıklı beslenme, sosyal aktivite.</p>";
    }
    else {
        analysis += "<h2>Genel Durum: Çok İyi 💚</h2>";
        analysis += "<p>Sağlık durumun çok iyi, fitness rutinini geliştirebilirsin.</p>";
        analysis += "<p><b>Öneri:</b> Kas geliştirme + HIIT + Mental gelişim aktiviteleri.</p>";
    }

    return `
        <h2>Test Tamamlandı 🎉</h2>
        <p>Ortalama Puanın: <b>${avg.toFixed(2)}</b></p>
        ${analysis}
        <button onclick="restart()">Tekrar Dene</button>
    `;
}

function restart() {
    current = 0;
    answers = [];
    startTest();
}
