var nombre = prompt("Dime tu nombre");
var instituto = prompt("Nombre de Instituto")

document.write("<table border=\"1\">");
document.write("<tr><th>Nombre</th><th>Instituto</th></tr>");
document.write("<tr><td>" + nombre + "</td><td>" + instituto + "</td></tr>");
document.write("</table>");

var nota1 = 2;
var nota2 = 4;
var notalTotal = nota1 + nota2;
var notaTotal2 = (nota1 + nota2) / 2;