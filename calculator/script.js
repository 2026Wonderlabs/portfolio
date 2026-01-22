const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let current = "";
let previous = "";
let operator = null;
let justCalculated = false;

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const value = btn.textContent;

        // CLEAR
        if (btn.dataset.action === "clear") {
            current = "";
            previous = "";
            operator = null;
            justCalculated = false;
            display.textContent = "0";
            return;
        }

        // DELETE
        if (btn.dataset.action === "delete") {
            current = current.slice(0, -1);
            display.textContent = current || "0";
            return;
        }

        // NUMBER OR DECIMAL
        if (!btn.classList.contains("operator") && !btn.classList.contains("equals")) {
            if (justCalculated) {
                current = "";
                justCalculated = false;
            }

            if (value === "." && current.includes(".")) return;

            current += value;
            display.textContent = current;
            return;
        }

        // OPERATOR
        if (btn.classList.contains("operator")) {
            if (current === "") return;

            if (previous !== "") {
                // Perform intermediate calculation
                const a = parseFloat(previous);
                const b = parseFloat(current);
                previous = calculate(a, b, operator).toString();
                display.textContent = previous;
            } else {
                previous = current;
            }

            operator = value;
            current = "";
            return;
        }

        // EQUALS
        if (btn.classList.contains("equals")) {
            if (!operator || current === "" || previous === "") return;

            const a = parseFloat(previous);
            const b = parseFloat(current);

            const result = calculate(a, b, operator);

            display.textContent = result;
            current = result.toString();
            previous = "";
            operator = null;
            justCalculated = true;
        }
    });
});

function calculate(a, b, operator) {
    switch (operator) {
        case "+": return a + b;
        case "-": return a - b;
        case "*": return a * b;
        case "/": return b === 0 ? "Error" : a / b;
    }
}