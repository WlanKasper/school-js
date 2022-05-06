const display = document.form.textview;

let nextTimeClean = false;

function insert(input) {
    playSoundClickSmall();

    if (nextTimeClean) {
        clean();
        nextTimeClean = false;
    }

    display.value = display.value + input;
}

function clean() {
    playSoundClickBig();
    display.value = '';
}

function back() {
    playSoundClickBig();
    let exp = display.value;
    display.value = exp.substring(0, exp.length - 1);
}

function equal() {
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

async function playSoundClickSmall(){
    let sound = new Audio();
    sound.src = 'audio/click-small.mp3';
    sound.volume = 0.2;
    sound.autoplay = true;
}

async function playSoundClickBig(){
    let sound = new Audio();
    sound.src = 'audio/click-big.mp3';
    sound.volume = 0.2;
    sound.autoplay = true;
}