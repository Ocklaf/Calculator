const d = document,
    $valueBtn = [...d.querySelectorAll(".button")],
    $display = d.getElementById("display")

let num1 = 0, num2 = 0, result = 0, counter = 0, float = false, numbers = []

for (let btn of $valueBtn) {
    btn.addEventListener("click", () => {
        if ((/[0-9]/.test(btn.value)) && (counter === 0)) showScreen(btn.value)
        else if ((/[0-9]/.test(btn.value)) && (counter === 1)) {
            $display.textContent = ""
            showScreen(btn.value)
        }
        else if (btn.value === ".") {
            float = true
            showScreen(btn.value)
        }
        else operand(btn.value)
    })
}

function showScreen(value) {
    numbers.push(value)
    $display.textContent = numbers.join("")
}

function operand(operator) {
    if (operator === "AC") {
        numbers.length = 0
        num1 = num2 = result = 0
        $display.textContent = ""
    } else if ((operator === "delete")) {
        numbers.pop()
        $display.textContent = numbers.join("")
        if (result !== 0 && numbers.length === 0) {
            return
        }
    }
    else if (operator === "+") {
        if (float === true && counter === 0) {
            num1 = parseFloat(numbers.join(""))
            numbers.length = 0
            float = false
            counter = 1
            if (result !== 0) {
                result += num1
                num1 = result
                num1 = Number(num1.toFixed(2))
                result = Number(result.toFixed(2))
                $display.textContent = result

            }
        }
        else if (float === false && counter === 0) {
            num1 = parseInt(numbers.join(""))
            numbers.length = 0
            counter = 1
            if (result !== 0) {
                result += num1
                num1 = result
                $display.textContent = result

            }
        }
        else if (float === true && counter === 1) {
            num2 = parseFloat(numbers.join(""))
            numbers.length = 0
            float = false
            counter = 0
            result = num1 + num2
            result = Number(result.toFixed(2))
            $display.textContent = result

        }
        else if (float === false && counter === 1) {
            num2 = parseInt(numbers.join(""))
            numbers.length = 0
            counter = 0
            result = num1 + num2
            $display.textContent = result

        }
    }

}