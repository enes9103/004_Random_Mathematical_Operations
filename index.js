let number1 = document.querySelector(".number1");
let operation = document.querySelector(".operation");
let number2 = document.querySelector(".number2");
let result = document.querySelector(".result");
let button = document.querySelector(".button");
let true1 = document.querySelector(".true1");
let false1 = document.querySelector(".false1");



button.addEventListener("click", hesaplama)

function hesaplama() {
   if (operation.value == "+" ) {
        if (Number(number1.value) + Number(number2.value) == Number(result.value)) {
            true1.value ++;
        } else {
            false1.value ++;
        }
    }

    if (operation.value == "-" ) {
        if (Number(number1.value) - Number(number2.value) == Number(result.value)) {
            true1.value ++;
        } else {
            false1.value ++;
        }
    }

    if (operation.value === "/" ) {
        if (Number(number1.value) / Number(number2.value) == Number(result.value)) {
            true1.value ++;
        } else {
            false1.value ++;
        }
    }

    if (operation.value == "*" ) {
        if (Number(number1.value) * Number(number2.value) == Number(result.value)) {
            true1.value ++;
        } else {
            false1.value ++;
        }
    }
    
    result.value = ""
    
    
    
    let mylist = ["-", "*", "/", "+"]
    let choice = Math.floor(Math.random()*4)
    operation.value = mylist[choice]
    

    number1.value = Math.floor(Math.random()*100)
    number2.value = Math.floor(Math.random()*100)
}