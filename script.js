const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const result = document.getElementById("result");
const numberButtons = document.getElementById("numberButtons");
const textButtons = document.getElementById("textButtons");

document.getElementById("numberMode").addEventListener("click", () => {
  // Ukryj przyciski tekstowe i pokaż przyciski liczbowe
  textButtons.style.display = "none";
  numberButtons.style.display = "block";

  // Funkcje do trybu liczb
  document.getElementById("double").addEventListener("click", () => {
    const num1 = parseFloat(input1.value);
    const num2 = parseFloat(input2.value);
    result.textContent = "Wynik: " + (num1 * 2 + num2 * 2);
  });
  document.getElementById("square").addEventListener("click", () => {
    const num1 = parseFloat(input1.value);
    const num2 = parseFloat(input2.value);
    result.textContent = "Wynik: " + (num1 * num1 + num2 * num2);
  });
});

document.getElementById("textMode").addEventListener("click", () => {
  // Ukryj przyciski liczbowe i pokaż przyciski tekstowe
  numberButtons.style.display = "none";
  textButtons.style.display = "block";

  // Funkcje do trybu tekstu
});

document.getElementById("changeBackground").addEventListener("click", () => {
  // Funkcja do zmiany losowego tła strony
});
