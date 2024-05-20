// Funcion donde se selecciona el equipo aleatoriamente.
function SecretWord() {
    let equipment = ['barcelona', 'real madrid', 'milan', 'psg'];
    const random = Math.floor(Math.random() * equipment.length);
    const secretWord = equipment[random];
    return secretWord;
}

// Funcion del juego principal.
function Guess(secretWord) {
    let Attempts = 3;
    document.getElementById('message').textContent = `BIENVENIDO AL JUEGO DE ADIVINAR PALABRAS. VAS A TENER 3 INTENTOS PARA ADIVINAR. 
    UNA DE LAS PISTAS ES QUE SON EQUIPOS DE FUTBOL Y QUE COMIENZA CON ${secretWord[0]}.`;
    const guessButton = document.getElementById('guessButton');
    const guessInput = document.getElementById('guessInput');
    const result = document.getElementById('result');
    
    guessButton.addEventListener('click', function() {
        const assumption = guessInput.value.toLocaleLowerCase();
        if (assumption === secretWord) {
            result.textContent = 'Oh! Genial, has adivinado la palabra secreta.';
            guessButton.disabled = true;
            guessInput.disabled = true;
        } else {
            Attempts--;
            if(Attempts > 0) {
                result.textContent = `Cuidado! Te has equivocado, te quedan ${Attempts} intentos.`;
            } else {
                result.textContent = `Te has quedado sin intentos, tu palabra secreta era ${secretWord}.`;
                guessButton.disabled = true;
                guessInput.disabled = true;
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const secretWord = SecretWord();
    Guess(secretWord);
});
