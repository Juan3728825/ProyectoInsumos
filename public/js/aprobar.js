$(document).ready(function () {


    $('#btnRechazar').click(function (e) {
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
              'Si desea revaluar su decision diríjase al apartado de seguimiento',
              'success',
            )
          }
        }) 
        });
    });
// 1