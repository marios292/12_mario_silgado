

//-----------------------------------------------------------------------------------------//

/*
var nombre = prompt("Dime tu nombre");
var instituto = prompt("Nombre de instituto");
console.log(nombre);
console.log(instituto);
//alert(nombre);
document.write("<h1>" + nombre + "</h1>");
document.write("<table border=\"1\">");
document.write("<tr><th>Nombre</th><th>Instituto</th></tr>");
document.write("<tr><td>" + nombre + "</td><td>" + instituto + "</td></tr>");
document.write("</table");


var nota1 = 5;
var nota2 = 4;
var notaTotal = nota1 + nota2;
var notaMedia = (nota1 + nota2) / 2;

*/


//---------------------------------------------------------------------------------------//
function mostrarFecha() {
    var now = Date();
    console.log("Ahora son: " + now)
    //alert("Ahora son las: " + now)
    document.write("<h1>" + now + "</h1>")

}

document.getElementById("boton1").onclick = () => {
    console.log("Click sobre el boton 1 ....");
    mostrarFecha();
}


//--------------------------------------------------------------------------------------------//

/*         var micaja = document.getElementById("micaja");
micaja.onmouseenter = () => {
    micaja.style.backgroundColor = "green";
    micaja.style.fontSize = "40px";
}

micaja.onmouseleave = () => {
    micaja.innerHTML = "Hasta luego";

}       */
document.getElementById("micaja").style.fontSize = "10px";

function changeFontSize() {
    var micaja = document.getElementById("micaja");

    var fontSizeMiCaja = micaja.style.fontSize;

    console.log("mi caja font size" + fontSizeMiCaja);

    if (fontSizeMiCaja == "10px") {
        micaja.style.fontSize = "14px";
    } else if (fontSizeMiCaja == "14px") {
        micaja.style.fontSize = "18px";
    }
    else {
        micaja.style.fontSize = "10px";

    }
}


var botonChangeFont = document.getElementById("botonChangeFontSize");
botonChangeFont.onclick = () => {
    changeFontSize();

}
