function mostrarFecha(){
    var now = Date();
    console.log("Ahora son: " + now);
    alert("Ahora son las: " + now);
    document.write("<h1>" + now + "</h1>");
}

document.getElementById("boton1").onclick = () => {
    console.log("Click sobre el boton 1...");
    mostrarFecha();
}

var micaja
document.getElementById("micaja").onmouseover = () => {
    document.getElementById("micaja").style.backgroundColor = "green";
}