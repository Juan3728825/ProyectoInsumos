<<<<<<< HEAD
$(document).ready(function(){ //se utiliza para asegurarse de que todo el HTML de la página se ha cargado antes de ejecutar cualquier código JavaScript.
    $('.navbar-toggler').on('click', function(){ //navbar-toggler para seleccionar el botón que activa la barra de navegación y se añade un evento de click a este botón con el método on('click', function(){}).
        $('.navbar-collapse').toggleClass('show');
    });
});

// Obtener el formulario del DOM
var form = document.querySelector("form");

// Agregar un evento submit al formulario
form.addEventListener("submit", function(event) {
  // Prevenir el comportamiento predeterminado del formulario
  event.preventDefault();

  // Obtener el valor seleccionado del select
  var selectedValue = document.getElementById("select-rol").value;
  
  // Si se ha seleccionado un valor, redirigir a la URL correspondiente
  if (selectedValue) {
    window.location.replace(selectedValue);
  }


});

$(document).ready(function () {
  // Seleccionar el botón de aceptar
  const btnAceptar = document.querySelector('#btn-aceptar');

  // Agregar un evento al hacer clic en el botón de aceptar
  btnAceptar.addEventListener('click', function(event) {
    // Seleccionar el select
    const selectRol = document.querySelector('#select-rol');

    // Si no se ha seleccionado una opción en el select
    if (!selectRol.value) {
      // Prevenir que el formulario se envíe
      event.preventDefault();

      // Mostrar la alerta de SweetAlert con un timeout de 0 segundos
      setTimeout(function() {
        Swal.fire({
          icon: 'error',
          confirmButtonColor: '#28A745',
          title: 'Error',
          text: 'Por favor, selecciona un rol antes de continuar'
        });
      }, 0);
    }
  });
});

=======
    /*prueba*/
>>>>>>> 5c7e23fc6c102b62f5fe6b5c80565db6cfeb69bb
