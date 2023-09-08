function myFunction() {

    console.log("Page and all its resources have finished loading.");
    // const typingArea = document.getElementById('typingArea');
    // const typingSound = document.getElementById('typingSound');

    // typingArea.addEventListener('input', () => {
    //     typingSound.currentTime = 0;
    //     typingSound.play();
    // });


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
    if (document.getElementById('typingArea').value.replace(' ', '').replace(/\s+/g, '') == "") return;
    localStorage.setItem('was', document.getElementById('typingArea').value);
    var audio = new Audio('assets/effect.mp3');
    audio.play();
    var texta = transform(document.getElementById("typingArea").value);
    var html = document.createElement('html');
  html.innerHTML = `<html><head> <link rel="preconnect" href="https://fonts.googleapis.com"> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> <link href="https://fonts.googleapis.com/css2?family=Cinzel&display=swap" rel="stylesheet"><link rel="stylesheet" href="styles.css"></head><body style='background-image: url("assets/abc.jpg");background-repeat: repeat;background-size: auto;'> </div> <div class="the_centerer"> <button class="button" onclick="click_trig2()">Go back</button><div class="letter_container" id="fill_here"> ` + texta + `</div> </div></body></html>`;

    document.replaceChild(html, document.documentElement);

};

function click_trig2() {
    var audio = new Audio('assets/effect.mp3');
    audio.play();
    var html = document.createElement('html');
    html.innerHTML = `<!DOCTYPE html><html lang="en"><head> <script type="text/javascript" src="main.js"></script> <link rel="preconnect" href="https://fonts.googleapis.com"> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> <link href="https://fonts.googleapis.com/css2?family=Cinzel&display=swap" rel="stylesheet"> <meta charset="UTF-8"> <link rel="stylesheet" href="styles.css"> <title>Translator</title></head><body onload="myFunction()"> <div class="back"></div> <div class="main-center"> <img src="assets/logo.png" class="logo" alt=""> <textarea class="tarea" id="typingArea" cols="30" rows="10" spellcheck="false">` + localStorage.getItem('was') + `</textarea> <button class="button" onclick="click_trig()">Translate to Dovahzul</button> </div> <!-- /* ------------------------- audio -------------------------- */ --> <!--audio id="typingSound"> <source src="assets/type.mp3" type="audio/mpeg"> Your browser does not support the audio element. </audio--></body></html>`
    document.replaceChild(html, document.documentElement);
    // const typingArea = document.getElementById('typingArea');
    // const typingSound = document.getElementById('typingSound');

    // typingArea.addEventListener('input', () => {
    //     typingSound.currentTime = 0;
    //     typingSound.play();
    // });
};

