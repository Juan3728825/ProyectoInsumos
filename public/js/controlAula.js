$(document).ready(function () {


    $('#Enviar-bnt').click(function (e) {
        e.preventDefault();

        Swal.fire({
          title: '¿Estas Seguro De Agregar la observacion?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Agregar'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Observacion enviada Correctamente',
              '',
              'success',
            )
          }
        }) 
        });
    });