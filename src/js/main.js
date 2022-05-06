// Custom scripts
let buttonsArray = ['#one', '#two', '#three', '#add', '#four', '#five', '#six', '#sub', '#seven', '#eight', '#nine', '#mul', '#clear', '#zero', '#doit', '#div'];

const output = document.getElementById('output');
console.log(output.innerText);

let elementsArr = initBtns(buttonsArray);
asigntFuncToBtn(elementsArr);

function initBtns(arr) {
    try {
        var elemets = new Array();
        for (let i = 0; i < arr.length; i++) {
            elemets[i] = document.querySelector(arr[i]);
            console.log(elemets[i].innerText);
        }
    } catch (error) {
        console.log('Error of reading id' + error);
    }
    return elemets;
}

function asigntFuncToBtn(elementsBtn){
    for(let i = 0; i < elementsBtn.length; i++){
        elementsBtn[i].addEventListener("click", function() {
            output.innerText = elementsBtn[i].innerText;
          });
    }
}