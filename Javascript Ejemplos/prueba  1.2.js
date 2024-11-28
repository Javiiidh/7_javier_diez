function mostrarFecha() {
    var now = Date();
    console.log("Ahora son: " + now);
    alert("Ahora son las: " + now);
    document.write("<h1>" + now + "</h1>");
}

//llevar a la funcion mostrarfecha cuando hago click en el boton boton1
document.getElementById("boton1").onclick = () => {
    console.log("Click sobre el boton 1...");
    mostrarFecha();
}

//cambiar estilos de div con id micaja cuando paso el ratón por encima
var micaja = document.getElementById("micaja");
micaja.onmouseover = () => {
    micaja.style.backgroundColor = "green";
    micaja.style.fontSize = "40px";
}

//cambiar texto del div con id mi caja cuando salgo de encima del elemento
micaja.onmouseleave = () => {
    micaja.innerHTML += "hasta luego"
}


document.getElementById("micaja").style.fontSize = "10px";

function changefontsize() {
    var micaja = document.getElementById("micaja");
    var fontSizemicaja = micaja.style.fontSize;
    console.log("mi caja font size" + fontSizemicaja);

    //si el tamaño de letra actual es de 10px, lo pongo a 12px
    if (fontSizemicaja == "10px") 
    {
    micaja.style.fontSize = "12px";
    }

    //si l tamaño de letra es actual es de 12px, lo pongo en 14px
    else if (fontSizemicaja == "12px")
    {
        micaja.style.fontSize = "14px";
    }

    //si el tamaño de letra actual no cumple ninguna de las condiciones e arriba,
    //lo pongo a 10px
     else 
    {
        micaja.style.fontSize = "10px";
    }
}

var cambiartamaño = document.getElementById("cambiartamaño");
cambiartamaño.onclick = () => {
    changefontsize();
}