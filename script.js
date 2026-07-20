let screen;

window.onload = function() {
  screen = document.getElementById('display-screen');
};

window.press = function(value) {
  if (screen.value === '0') {
    screen.value = value;
  } else {
    screen.value += value;
  }
};

window.clearScreen = function() {
  screen.value = '0';
};

window.backspace = function() {
  if (screen.value.length > 1 && screen.value !== '0') {
    screen.value = screen.value.slice(0, -1);
  } else {
    screen.value = '0';
  }
};

window.calculate = function() {
  try {
    let expression = screen.value.replace(/÷/g, '/').replace(/×/g, '*');
    screen.value = eval(expression);
  } catch (error) {
    screen.value = "Error";
  }
};