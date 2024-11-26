var nombre = prompt("Dime tu nombre");
var instituto = prompt("Nombre de instituto");
console.log(nombre);
//alert(nombre);
document.write(`<table border=\"1\">`)
document.write(`<tr><td><th>Nombre</th><th>Instituto</th></tr>`);
document.write("<tr><td>" + nombre + "</td><td>" + instituto + "</td></tr>")
document.write("</table")
