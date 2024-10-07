//1 Task

    //  plan A
    let degree = 25; 
    if (degree < 0) {
        console.log("Опасно холодно!");
    } else if (degree < 5) {
        console.log("Очень холодно");
    } else if (degree < 20) {
        console.log("Прохладно");
    } else {
        console.log("Тепло");
    }

    // plan B
    let сelsius = 6;
    let weather = сelsius < 0 ? console.log("Опасно холодно") : сelsius < 5 ? console.log("Очень холодно") : сelsius < 20 ? console.log("Прохладно") : console.log("Тепло");

// 2 Task

    let price = 13500;
    let totalPrice;
    if( price > 1000 ) {
        console.log(totalPrice = price - price * 0.05 );
    } else if (price > 5000) {
        console.log(totalPrice = price - price * 0.1);
    } else {
        console.log(totalPrice = price);
    }

// 3 Task

    let age = 27;

    if(age < 18) {
        console.log("Подросток");
    } else if (age < 65) {
        console.log("Взрослый");
    } else {
        console.log("Пенсионер");
    }

// 4 Task 

    let hour = 4;
    if( hour > 9 && hour < 18) {
        console.log("The shop is open");
    } else {
        console.log("The shop is closer, get out!");
    }

// 5 Task

    let point = 101;


    if (point >= 50 && point < 70) {
        console.log("удовлетворительно");
    } else if (point >= 70 && point < 90 ) {
        console.log("хорошо");
    } else if (point >= 90 && point <=100) {
        console.log("отлично");
    } else if (point > 0 && point < 50) {
        console.log("неудачно");
    }

    if (point > 100) {
        console.log("are you kidding me?!");
    }

console.log('----------------------------');

// Function


function checkAge(yearsOld) {
    if (yearsOld < 18) {
        console.log("you are not allowed");
    } else {
        console.log("you are welcome!");
    }
}

checkAge(37);
checkAge(27);
checkAge(17);
checkAge(18);
checkAge(3);

// Create Calculator


function calc(operation, a, b) {
    if (operation == 'add') {
        return a + b;
    }

    if (operation == 'multi') {
        return a * b;
    }

    if (operation == 'subtract') { 
        return a - b;
    }
}

console.log(calc('add', 1, 2));
console.log(calc('multi', 1, 2));
console.log(calc('subtract', 3, 2));


