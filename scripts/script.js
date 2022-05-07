const display = document.form.textview;

let nextTimeClean = false;

function insert(input) {
    console.log('New input: ' + input);
    playSoundClickSmall();
    if (nextTimeClean) {
        clean(function () {});
        nextTimeClean = false;
    }
    display.value = display.value + input;
}

function clean(playSound = () => playSoundClickBig()) {
    console.log('Clearing all display...');
    playSound();
    display.value = '';
}

function back() {
    console.log('Clearing one simbol...');
    playSoundClickBig();
    let exp = display.value;
    display.value = exp.substring(0, exp.length - 1);
}

function equal() {
    console.log('Calculating result...');
    playSoundClickBig();
    let exp = display.value;
    if (exp) {
        try {
            display.value = eval(exp)
            nextTimeClean = true;
        } catch (error) {
            display.value = 'err';
            console.log(err);
        }
    }
}

async function playSoundClickSmall() {
    console.log('Playing sound small...');
    let sound = new Audio();
    sound.src = 'audio/click-small.mp3';
    sound.volume = 0.2;
    sound.autoplay = true;
}

async function playSoundClickBig() {
    console.log('Playing sound big...');
    let sound = new Audio();
    sound.src = 'audio/click-big.mp3';
    sound.volume = 0.2;
    sound.autoplay = true;
}

// function parsingDisplayData()