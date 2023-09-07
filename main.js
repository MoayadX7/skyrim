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
    var audio = new Audio('assets/effect.mp3'); 
    audio.play();
    var texta = transform(document.getElementById("typingArea").value);
    var html = document.createElement('html');
    html.innerHTML = `<html><head> <link rel="stylesheet" href="styles.css"></head><body style='background-image: url("assets/stone_texture.jpg");background-repeat: repeat;background-size: auto;'> <!-- /* ------------------------- fog -------------------------- */ --> <div id="foglayer_01" class="fog"> <div class="image01"></div> <div class="image02"></div> </div> <div id="foglayer_02" class="fog"> <div class="image01"></div> <div class="image02"></div> </div> <div id="foglayer_03" class="fog"> <div class="image01"></div> <div class="image02"></div> </div> <!-- /* ------------------------- fog -------------------------- */ --> </div> <div class="the_centerer"> <div class="letter_container" id="fill_here"> ` + texta + `</div> </div></body></html>`;

    document.replaceChild(html, document.documentElement);

}