const input_name = document.formInputInfo.inputName;
const input_problem = document.formInputInfo.inputProblem;

const waiting_room = document.formWaiterOutput.textview;
const doctors_room = document.formDoctorOutput.textview;

const doctorBorder = document.getElementById('doctor-block');

const hallway_left_top = document.getElementsByClassName('hallway-y')[0];
const hallway_left_bot = document.getElementsByClassName('hallway-x')[0];
const hallway_right_bot = document.getElementsByClassName('hallway-x')[1];
const hallway_right_top = document.getElementsByClassName('hallway-y')[1];

const GREEN = '#00FF00';
const RED = '#FF0000';

let waitList = new Array();
let isBusyDoc = false;

function addNewClient() {
    let client = input_name.value + ': ' + input_problem.value;
    if (client != ': ') {
        console.log('Пришел новый клиент: ' + client);
        distributeClient(client);
    } else {
        console.log('Пустой ввод');
    }
}

function addNewClientToWaitList(client) {
    console.log('Клиент ' + client + ' ожидает');
    goToLeftHallway();
    waitList.push(client);
    waiting_room.value = waitList.toString();
}

function displayNextClient(client) {
    if (client) {
        doctors_room.value = client;
    } else if (waitList.length != 0) {
        doctors_room.value = 'Next client: ' + waitList[0];
    } else {
        doctors_room.value = 'Im free';
    }

}

function pushClientToDoc(client) {
    healClient(client);
    displayNextClient(client);
}

async function healClient(client) {
    console.log('Доктор лечит: ' + client);
    isBusyDoc = true;
    doctorBorder.style.borderColor = RED;
    waiting_room.value = waitList.toString();
    setTimeout(() => {
        isBusyDoc = false;
        doctorBorder.style.borderColor = GREEN;
        displayNextClient();
        console.log('Доктор закончил');
    }, 8000);
}

function distributeClient(client) {
    if (!isBusyDoc && waitList.length == 0) {
        goToRightHallway();
        pushClientToDoc(client);
    } else {
        addNewClientToWaitList(client);
    }
}

function pushClientToDocFromWaitList() {
    if (waitList.length != 0) {
        if (!isBusyDoc) {
            client = waitList.shift();
            console.log('Вызван клиент: ' + client);
            pushClientToDoc(client);
        } else {
            console.log('Доктор занят!');
        }

    } else {
        console.log('Больше нет клиентов');
    }
}

async function goToLeftHallway() {
    hallway_left_top.style.background = 'rgba(0, 255, 0, 0.7)';
    hallway_left_bot.style.background = ' rgba(0, 255, 0, 0.7)';
    setTimeout(() => {
        hallway_left_top.style.background = ' #C4C4C4';
        hallway_left_bot.style.background = ' #C4C4C4';
    }, 2000);
}

async function goToRightHallway() {
    hallway_right_bot.style.background = ' rgba(0, 255, 0, 0.7)';
    hallway_right_top.style.background = ' rgba(0, 255, 0, 0.7)';
    setTimeout(() => {
        hallway_right_bot.style.background = ' #C4C4C4';
        hallway_right_top.style.background = ' #C4C4C4';
    }, 2000);
}