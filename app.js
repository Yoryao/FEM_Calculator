console.log("app Working");

let numero1 = 0;
let numero2 = 0;
let operation = 0;
let resultado = 0;

function print(value) {
  if (operation == 0) {
    if (numero1 == 0) {
      numero1 = value;
      console.log("Primer Ingreso1: " + numero1);
    } else {
      numero1 += value;
      console.log("Numero1: " + numero1);
    }
  } else {
    if (numero2 == 0) {
      numero2 = value;
      console.log("Primer Ingreso2: " + numero2);
    } else {
      numero2 += value;
      console.log("Numero2: " + numero2);
    }
  }
}

function operator(x, value) {
  operation = 0;
  console.log("Se ha presionado: " + value);
  operation = x;
}

function result() {
  switch (operation) {
    case 1:
      resultado = numero1 - numero2;
      break;
    case 2:
      resultado = numero1 + numero2;
      break;
    case 3:
      resultado = numero1 / numero2;
      break;
    case 4:
      resultado = numero1 * numero2;
      break;
  }

  console.log("Resultado: " + resultado);
}

function reset() {
  console.log("Presion Reset.");
  numero1 = 0;
  numero2 = 0;
  operation = 0;
  resultado = 0;
}
