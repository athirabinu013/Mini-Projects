let expression = document.querySelector(".expression");
let answer = document.querySelector(".answer");

let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
let six = document.querySelector(".six");
let seven = document.querySelector(".seven");
let eight = document.querySelector(".eight");
let nine = document.querySelector(".nine");
let zero = document.querySelector(".zero");

let double = document.querySelector(".double-zero");
let decimal = document.querySelector(".decimal");

let ac = document.querySelector("#ac");
let percent = document.querySelector("#percent");
let backspace = document.querySelector("#backspace");
let divide = document.querySelector("#divide");
let multiply = document.querySelector("#multiply");
let subtract = document.querySelector("#subtract");
let add = document.querySelector("#add");
let equals = document.querySelector("#equals");


// NUMBER BUTTONS
one.addEventListener("click", function () {
    expression.innerText += "1";
});

two.addEventListener("click", function () {
    expression.innerText += "2";
});

three.addEventListener("click", function () {
    expression.innerText += "3";
});

four.addEventListener("click", function () {
    expression.innerText += "4";
});

five.addEventListener("click", function () {
    expression.innerText += "5";
});

six.addEventListener("click", function () {
    expression.innerText += "6";
});

seven.addEventListener("click", function () {
    expression.innerText += "7";
});

eight.addEventListener("click", function () {
    expression.innerText += "8";
});

nine.addEventListener("click", function () {
    expression.innerText += "9";
});

zero.addEventListener("click", function () {
    expression.innerText += "0";
});

double.addEventListener("click", function () {
    expression.innerText += "00";
});


// SYMBOLS
decimal.addEventListener("click", function () {

    let currentExpression = expression.innerText;

    if (!currentExpression.endsWith(".")) {
        expression.innerText += ".";
    }
});

add.addEventListener("click", function () {
    expression.innerText += "+";
});

subtract.addEventListener("click", function () {
    expression.innerText += "−";
});

multiply.addEventListener("click", function () {
    expression.innerText += "×";
});

divide.addEventListener("click", function () {
    expression.innerText += "÷";
});

percent.addEventListener("click", function () {
    expression.innerText += "%";
});


// AC
ac.addEventListener("click", function () {
    expression.innerText = "";
    answer.innerText = "";
});


// BACKSPACE
backspace.addEventListener("click", function () {
    expression.innerText = expression.innerText.slice(0, -1);
});


// EQUALS
equals.addEventListener("click", function () {
    let calculation = expression.innerText;

    if (calculation === "") {
        return;
    }
    calculation = calculation.replaceAll("×", "*");
    calculation = calculation.replaceAll("÷", "/");
    calculation = calculation.replaceAll("−", "-");

    let result = eval(calculation);
    answer.innerText = result;
});