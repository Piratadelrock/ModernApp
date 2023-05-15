// let numeroUno = 123e3;
// alert(numeroUno);
// 123000   e3 es 10*10 = 1000 y lo multiplica por ese numero

// let numeroDos = 123e-3;
// 0.123 123/10=12.3 /10=1.23 /10 = 0.123
// alert(numeroDos);

// let texto = "Esta es la sesión numero 6";
// let arreglo = texto.split(" ", 3);
// alert(arreglo);

let num1;
let num2;
function leerNumero(mensaje, numDefect) {
  let numero;
  do {
    numero = parseInt(prompt(mensaje, numDefect));
  } while (isNaN(numero));

  return numero;
}
function sumar(num1, num2) {
  return num1 + num2;
}
function continuar(mensaje = "¿Desea continuar?") {
  return confirm(mensaje);
}
function colocarValor(boton) {
  boton.disabled = true;
  let cadena = prompt("Ingrese X o O").trim();
  boton.textContent = cadena.trim();

  //   alert("Trim: " + cadena.trim());
  //   alert("Trim end: " + cadena.trimEnd());
  //   alert("Trim left: " + cadena.trimLeft());
  //   alert("Trim start: " + cadena.trimStart());
  //   alert("Trim right: " + cadena.trimRight());

  document.getElementById("firstName").value = cadena.trim().padEnd(10, "-");
  document.getElementById("secName").value = cadena.trimEnd();
  document.getElementById("surName").value = cadena.trimLeft();
  document.getElementById("secSurName").value = cadena.trimStart();
  document.getElementById("numeroTelefono").value = cadena.trimRight();
}
