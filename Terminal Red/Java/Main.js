// Capturamos el formulario por su ID
const form = document.getElementById("formCompra en linea");

// Escuchamos el evento submit
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Evita el envío real

  // Obtenemos valores
  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;

  // Validación básica
  if (nombre === "" || correo === "") {
    alert("Por favor ingrese su nombre y correo.");
  } else {
    alert("Gracias " + nombre + ", pronto recibirá la confirmacion.");
    form.reset(); // Limpia el formulario
  }
});
