$(document).ready(function () {


    $('#Cancelar-btn').click(function (e) {
        e.preventDefault();

        Swal.fire({
          title: '¿Estas Seguro De Rechazar Este Insumo?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Rechazar'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Insumo Rechazado Correctamente',
              '',
              'success',
            )
          }
        }) 
        });
    });

    $('#Reservar-btn').click(function (e) {
        e.preventDefault();

        Swal.fire({
          title: '¿Estas Seguro De Realizar la peticion?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Reservar'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Reservado Correctamente',
              '',
              'success',
            )
          }
        }) 
        });