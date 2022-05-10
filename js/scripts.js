const display = document.formOutputInfo.textview;
const input_name = document.formInputInfo.inputName;
const input_problem = document.formInputInfo.inputProblem;

let waitList = new Array();
let isBusyDoc = false;

function addNewClient() {
    console.log(input_name.value);
    console.log(input_problem.value);

    let client = 'Client name: ' + input_name.value + 'Client problem: ' + input_problem.value;
    console.log('Пришел новый клиент: ' + client);
    distributeClient(client);
}

function addNewClientToWaitList(client) {
    console.log('Клиент ' + client + ' ожидает');
    waitList.push(client);
}

function displayNextClient(client) {
    display.value = client;
}

function pushClientToDoc(client) {
    healClient(client);
    displayNextClient(client);
}

async function healClient(client){
    console.log('Доктор лечит: ' + client);
    isBusyDoc = true;
    setTimeout(() => {
        isBusyDoc = false;
        console.log('Доктор закончил');
    }, 5000);
}

function distributeClient(client) {
    if (!isBusyDoc) {
        pushClientToDoc(client);
    } else {
        addNewClientToWaitList(client);
    }
}

function pushClientToDocFromWaitList() {
    if (waitList.length != 0) {
        if (!isBusyDoc) {
            client = waitList.pop();
            console.log('Вызван клиент: ' + client);
            pushClientToDoc(client);
        } else {
            console.log('Доктор занят!');
        }
        
    } else {
        console.log('Больше нет клиентов');
    }
    
}