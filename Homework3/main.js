var minNum = (num1 , num2) => {
    if (num1 < num2){
        console.log(num1);
    }else {
        console.log(num2);
    }
};

minNum(6, 12)


var str = prompt('Введите текст')

var hight = (value) => {
    console.log(value.length)
}

hight(str)



let operation = prompt("Введите операцию (+, -, *, /")
let num1 = Number(prompt("Введите первое число" ))
let num2 = Number(prompt(" Введите второе число"))

let calculator = (operation, num1, num2) => {
    let result
    switch (operation){
        case "+":
        result = num1 + num2
            break
        case "-":
        result = num1 - num2
            break
        case "*":
        result = num1 * num2
            break
        case "/":
            if (num2 !==0){
        result = num1 / num2
            }else {
                result = "Нельзя вводить ноль!"
            }
            break
        default:
                result = "Некорректная операция!"
    }
    return result
}

let result = calculator(operation, num1, num2)
alert(result)