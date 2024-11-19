const display = document.getElementById("display");

// Append input to the display
function append(value) {
  display.value += value;
}

// Clear the display
function clearDisplay() {
  display.value = "";
}

// Delete the last character
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Calculate the result
function calculate() {
  try {
    if (display.value.includes('%')) {
      display.value = eval(display.value.replace('%', '/100'));
    } else {
      display.value = eval(display.value);
    }
  } catch {
    display.value = "Error";
  }
}

// Calculate square root
function calculateSquareRoot() {
  try {
    display.value = Math.sqrt(eval(display.value));
  } catch {
    display.value = "Error";
  }
}

// Keyboard support
document.addEventListener("keydown", (e) => {
  const allowedKeys = "0123456789+-*/.%√";
  if (allowedKeys.includes(e.key)) {
    if (e.key === "√") {
      calculateSquareRoot();
    } else {
      append(e.key);
    }
  } else if (e.key === "Enter") {
    calculate();
  } else if (e.key === "Backspace") {
    deleteLast();
  } else if (e.key === "Escape") {
    clearDisplay();
  }
});
