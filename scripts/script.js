const display = document.form.textview;

let nextTimeClean = false;

function insert(input) {
    if (nextTimeClean) {
        clean();
        nextTimeClean = false;
    }
    display.value = display.value + input;
}

function clean() {
    display.value = '';
}

function back() {
    let exp = display.value;
    display.value = exp.substring(0, exp.length - 1);
}

function equal() {
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