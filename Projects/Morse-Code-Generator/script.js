function generateMorse() {
    const inputText = document.getElementById('in').value.trim().toUpperCase();
    const morseCode = {
        'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....',
        'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.',
        'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
        'Y': '-.--', 'Z': '--..',
        '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...',
        '8': '---..', '9': '----.', '0': '-----',
        ' ': '/'
    };

    let morse = '';
    for (let i = 0; i < inputText.length; i++) {
        const char = inputText[i];
        if (morseCode[char]) {
            morse += morseCode[char] + ' ';
        } else {
            morse += char + ' ';
        }
    }

    document.getElementById('out').textContent = morse.trim();
}


