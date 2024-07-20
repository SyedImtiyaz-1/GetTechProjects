document.addEventListener('DOMContentLoaded', () => {
    const audioFileInput = document.getElementById('audioFile');
    const playButton = document.getElementById('playButton');
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    let audioContext;
    let audioSource;
    let analyser;
    let dataArray;
    let bufferLength;


    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;


    playButton.addEventListener('click', () => {
        if (!audioFileInput.files.length) return alert('Please select an audio file first.');
        
        const audio = new Audio(URL.createObjectURL(audioFileInput.files[0]));
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        audioSource = audioContext.createMediaElementSource(audio);
        analyser = audioContext.createAnalyser();
        audioSource.connect(analyser);
        analyser.connect(audioContext.destination);
        analyser.fftSize = 256;
        bufferLength = analyser.frequencyBinCount;
        dataArray = new Uint8Array(bufferLength);


        audio.play();
        drawVisualizer();
    });


    function drawVisualizer() {
        requestAnimationFrame(drawVisualizer);
        analyser.getByteFrequencyData(dataArray);


        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);


        const barWidth = (canvas.width / bufferLength) * 2.5;
        let barHeight;
        let x = 0;


        for (let i = 0; i < bufferLength; i++) {
            barHeight = dataArray[i];
            ctx.fillStyle = `rgb(${barHeight + 100}, 50, 50)`;
            ctx.fillRect(x, canvas.height - barHeight / 2, barWidth, barHeight / 2);
            x += barWidth + 1;
        }
    }
});



