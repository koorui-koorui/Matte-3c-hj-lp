// Sätt aktuell årtal i sidfoten
function year() {
  const yearElement = document.getElementById("year");
  yearElement.textContent = new Date().getFullYear();
}

// Lyssna på formulärets submit-event och visa användarens text säkert
document.getElementById("secureForm")?.addEventListener("submit", function (event) {
  event.preventDefault(); // hindra att sidan laddas om

  const text = document.getElementById("userInput").value.trim();
  const result = document.getElementById("formResult");

  // Visa texten som ren text istället för HTML för att undvika XSS
  result.textContent = text ? "Du skrev: " + text : "Skriv något först.";
});

// Kör funktionen när sidan laddas
year();

