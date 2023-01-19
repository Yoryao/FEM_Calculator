console.log("app Working")

let resultado = 0;
let operation = "";




function operator(value) {
    console.log("Se ha presionado:" + value);
    resultado = value;
}

function reset() {
    console.log("Presion Reset.")
resultado += 0;
operation = "";

}

function result() {
    console.log("Presion Result." + resultado)

}
    
    function print(value) {
        console.log("Se ha presionado:" + value);
        resultado = resultado + operation + value;
    }