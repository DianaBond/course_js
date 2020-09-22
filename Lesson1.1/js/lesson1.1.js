let input1 = +prompt("Введите целое число1:");
let operation = prompt("Введите символ операции(-,+,*):");
let input2 = +prompt("Введите целое число2:");

switch (operation) {
    case "-":
        alert(`Result ${input1} - ${input2} = ${input1 - input2}`);
        break;
    case "+":
        alert(`Result ${input1} + ${input2} = ${input1 + input2}`);
        break;
    case "*":
        alert(`Result ${input1} * ${input2} = ${input1 * input2}`);
        break;
}
