function botones() {
    $("#usuarios-table").DataTable({
        "responsive": true,
        "lengthChange": false,
        "autoWidth": false,
        "buttons": ["copy", "csv", "excel", "pdf", "print", "colvis"]
    }).buttons().container().appendTo('#usuarios-table_wrapper .col-md-6:eq(0)');

}


// function alerta() {
//     alert("Hola Mundo!");

//     function alerta2() {
//         alert("Hola Mundo2!");
//     }
//     alerta2();

//     function alerta3() {
//         alert("Hola Mundo3!");
//     }
//     alerta3();
// }
// alerta();