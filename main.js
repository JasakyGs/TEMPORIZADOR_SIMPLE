const segundos = document.getElementById("segundos");
const boton = document.getElementById("boton");
const resultado = document.getElementById("cuentaAtras");
let tiempo;
let cuentaRegresiva;

function inicioCuenta(tiempo) {
  if (tiempo == 0) {
    resultado.textContent = "¡Terminado!";
  } else {
    resultado.textContent = tiempo;
     return setTimeout(inicioCuenta, 1000, tiempo - 1);
  }  
}
boton.addEventListener("click", function() {
    tiempo =+segundos.value
      if (isNaN(tiempo) || tiempo <= 0) {
        alert("Ingrese un número de segundos válido");
      }
        else{
            inicioCuenta(tiempo);
        }
});