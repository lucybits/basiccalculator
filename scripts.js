
function sumar() {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  var resultado = num1 + num2;
  
  var mensajeError = document.getElementById("resultado");
  if (isNaN(resultado)) {
    mensajeError.innerText = "Error: Por favor ingresa caracteres válidos";
    mensajeError.style.color = "red"; // Cambia el color del mensaje de error a rojo
  } else {
    mensajeError.innerText = "Resultado: " + resultado;
    mensajeError.style.color = ""; // Restablece el color del mensaje de resultado
  }
}
function restar() {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  var resultado = num1 - num2;
  
  var mensajeError = document.getElementById("resultado");
  if (isNaN(resultado)) {
    mensajeError.innerText = "Error: Por favor ingresa caracteres válidos";
    mensajeError.style.color = "red"; // Cambia el color del mensaje de error a rojo
  } else {
    mensajeError.innerText = "Resultado: " + resultado;
    mensajeError.style.color = ""; // Restablece el color del mensaje de resultado
  }
}

function multiplicar() {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  var resultado = num1 * num2;
  
  var mensajeError = document.getElementById("resultado");
  if (isNaN(resultado)) {
    mensajeError.innerText = "Error: Por favor ingresa caracteres válidos";
    mensajeError.style.color = "red"; // Cambia el color del mensaje de error a rojo
  } else {
    mensajeError.innerText = "Resultado: " + resultado;
    mensajeError.style.color = ""; // Restablece el color del mensaje de resultado
  }
}
document.addEventListener('DOMContentLoaded', function() {
  var messageElement = document.getElementById('message');

  document.addEventListener('paste', function(event) {
    event.preventDefault();
    messageElement.style.display = 'block';
    messageElement.classList.add('slide-up');
    setTimeout(function() {
      messageElement.style.display = 'none';
      messageElement.classList.remove('slide-up');
    }, 4000);
  });
});