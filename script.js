function checkAnswer() {
    const answer = document.getElementById('quiz-answer').value;
    const correct = Math.sqrt(5 * 5 + 12 * 12);
    const feedback = document.getElementById('feedback');
    if (Math.abs(answer - correct) < 0.01) {
        feedback.textContent = 'Rätt! Bra jobbat!';
        feedback.style.color = 'green';
    } else {
        feedback.textContent = `Fel. Rätt svar är ${correct.toFixed(2)}`;
        feedback.style.color = 'red';
    }
}

function calculateHypotenuse() {
    const a = parseFloat(document.getElementById('side-a').value);
    const b = parseFloat(document.getElementById('side-b').value);
    const resultElement = document.getElementById('calc-result');

    if (isNaN(a) || isNaN(b)) {
        resultElement.textContent = 'Vänligen fyll i giltiga värden för både a och b.';
        resultElement.style.color = 'red';
        return;
    }

    const c = Math.sqrt(a * a + b * b);
    resultElement.textContent = `Hypotenusan är ${c.toFixed(2)}`;
    resultElement.style.color = 'green';
}