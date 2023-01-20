console.log("app Working");

let numero1 = 0;
let numero2 = 0;
let operation = 0;
let resultado = 0;
let displayNumber = 0;


function print(value) {
  if (operation == 0) {
    if (numero1 == 0) {
      numero1 = value;
      display(numero1)
    } else {
      numero1 += value;
      display(numero1)
    }
  } else {
    if (numero2 == 0) {
      numero2 = value;
      display(numero2)
    } else {
      numero2 += value;
      display(numero2)
    }
  }
}

function display(num) {
  let display = document.getElementById("display");
  display.innerText = num; 
}


function operator(x) {
  operation = x;
}

function result() {
  switch (operation) {
    case 1:
      resultado = numero1 - numero2;
      break;
    case 2:
      resultado = parseInt(numero1) + parseInt(numero2);
      break;
    case 3:
      resultado = numero1 / numero2;
      break;
    case 4:
      resultado = numero1 * numero2;
      break;
  }
  reset();
  display(resultado);
}

function reset() {
  console.log("Presion Reset.");
  numero1 = 0;
  numero2 = 0;
  operation = 0;
  display(0);
}

