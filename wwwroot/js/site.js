// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
var item = [];
$(".tableDatos").hide();
$(".tableReseñas").hide();
function cargarDatos(){
    $(".tableDatos").show();
    $("#cargar").hide();
    $.getJSON( "/Restos.json", function( data ) {
        $.each( data, function( key, val ) {
            $("#contenido").html($("#contenido").html() + "<tr> <th> " + val.id + "</th> <td>" +  val.nombre + "</td> <td> " + val.añoApertura + "</td> <td>" + val.ubicacion[0].latitud + "," + val.ubicacion[0].longitud + "</td> <td>" + val.dueños + "</td> <td>" + val.Logo + "</td> <td>" + val.menuPrincipal[0].primerPlato+ "</td> <td>" + val.menuPrincipal[0].platoPrincipal + "</td> <td>" + val.menuPrincipal[0].postre + "</td> <td> <button onclick=cargarReseña(" + (val.id - 1) + ")> Ver Reseñas </button> </td> </tr>");
            item.push(val);
        });
    });
}

function cargarReseña(id){
    $(".tableDatos").hide();
    $("#cargar").hide();
    $(".tableReseñas").show();
    $("#title").text("Reseñas de" + item[id].nombre);

    var i = 0;
    item[id].reseña.forEach(element => {
        $("#contenidoR").html($("#contenidoR").html() + "<tr> <td> " + item[id].reseña[i].usuario + "</td> <td>" +  item[id].reseña[i].valoracion + "</td> <td> " + item[id].reseña[i].descripcion + "</td> <td>" +  item[id].reseña[i].cantLikes + "</td> <td> </tr>"); 
        i++;
    });
}