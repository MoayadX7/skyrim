function myFunction() {
    // Your code here
    console.log("Page and all its resources have finished loading.");
    const typingArea = document.getElementById('typingArea');
    const typingSound = document.getElementById('typingSound');

    typingArea.addEventListener('input', () => {
        typingSound.currentTime = 0;
        typingSound.play();
    });

    var audio = document.getElementById("backgroundMusic");

    // Play the audio


    // Loop the audio

    function checkAndPlayAudio() {
        if (audio.paused) {
            audio.play();
        }
    }

    // Check and play audio every 1000ms (1 second)
    setInterval(checkAndPlayAudio, 1000);
};

function transform(x) {
    indel = [1, 2, 18, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
    x = x.toLowerCase();
    x = x.replace(/[^a-zA-Z\s]/g, '');
    x = x.replace(/\s+/g, ' ');
    var ans = "";
    var full_ans = "";
    for (var i = 0; i < x.length; i++) {
        ans = '';
        if (x[i] == " ") {
            full_ans += '<img src="letters/space.png" class="sq_image" alt="">\n';
            continue;
        }
        ans += '<img src="letters/letter';


        ans += indel[x.charCodeAt(i) - 97]
        ans += '.png" class="sq_image" alt="">\n';
        full_ans += ans;
    }
    return full_ans;
};

function click_trig() {
    var texta = transform(document.getElementById("typingArea").value);
    localStorage.setItem('texta', texta);
    window.location.href = 'translation.html';


}