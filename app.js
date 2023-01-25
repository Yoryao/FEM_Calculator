console.log("app Working");

// change theme operation

let themes = document.querySelectorAll(".selector");
themes.forEach((element) => {
  element.addEventListener("click", () => {
    switch (element.innerHTML) {
      case "1": {
        let ele = document.querySelectorAll(".dos");

        ele.forEach((element) => {
          element.classList.remove("dos");
          element.classList.add("uno");
        });

        ele = document.querySelectorAll(".tres");
        console.log(ele);
        ele.forEach((element) => {
          element.classList.remove("tres");
          element.classList.add("uno");
        });
        break;
      }
      case "2": {
        let ele = document.querySelectorAll(".tres");

        ele.forEach((element) => {
          element.classList.remove("tres");
          element.classList.add("dos");
        });
        ele = document.querySelectorAll(".uno");

        ele.forEach((element) => {
          element.classList.remove("uno");
          element.classList.add("dos");
        });

        break;
      }
      case "3": {
        let ele = document.querySelectorAll(".uno");

        ele.forEach((element) => {
          element.classList.remove("uno");
          element.classList.add("tres");
        });

        ele = document.querySelectorAll(".dos");

        ele.forEach((element) => {
          element.classList.remove("dos");
          element.classList.add("tres");
        });

        break;
      }
    }
  });
});

let numero1 = 0;
let numero2 = 0;
let operation = 0;
let resultado = 0;
let displayNumber = 0;

function print(value) {
  if (operation == 0) {
    if (numero1 == 0) {
      numero1 = value;
      display(numero1);
    } else {
      numero1 += value;
      display(numero1);
    }
  } else {
    if (numero2 == 0) {
      numero2 = value;
      display(numero2);
    } else {
      numero2 += value;
      display(numero2);
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
