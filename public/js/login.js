const formulario = document.getElementById("login-user");
const botonEnviar = document.getElementById("login");
const botonOlvidoContraseña = document.getElementById("contraseña-olvidada"); // Agrega el ID del botón "olvido-contraseña" en tu HTML




// Agregar un evento de escucha al botón de envío
botonEnviar.addEventListener("click", function(event) {
  // Detener el envío del formulario
  event.preventDefault();

  // Obtener los valores de los campos del formulario
  const usuario = document.getElementById("usuario").value;
  const contraseña = document.getElementById("contraseña").value;
  const rol = document.getElementById("rol").value;

  // Verificar si los campos están vacíos
  if (usuario === "" || contraseña === "" || rol === "") {
    // Mostrar un mensaje de alerta
    Swal.fire({
      title: 'Error',
      text: 'Debes llenar todos los campos antes de continuar',
      icon: 'error',
      confirmButtonColor: '#dc3545',
      confirmButtonText: 'OK',
      focusConfirm: false // Evita que el foco se mueva al botón "OK"
    });
  } else {
    location.href="/menu";
    // Si los campos no están vacíos, enviar el formulario
    // formulario.submit();
  }
});

// Agregar un evento de escucha al botón "olvido-contraseña"
botonOlvidoContraseña.addEventListener("click", async function(event) {
  // Detener el envío del formulario
  event.preventDefault();

  // Mostrar la alerta de ingreso de contraseña utilizando Swal.fire
  const { value: password } = await Swal.fire({
    title: 'Ingresa tu correo ',
    input: 'email',
    // inputLabel: 'Asegurate de que sea el mismo correo con el cual te encuentras registrado',
    inputPlaceholder: 'Ingresa tu correo',
    inputAttributes: {
      maxlength: 50,
      autocapitalize: 'off',
      autocorrect: 'off'
    }
  });

  if (password) {
    Swal.fire(`Te hemos enviado un correo de recuperacion a: ${password}`);
  }
});
