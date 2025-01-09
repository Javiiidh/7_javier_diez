function cambiarcolor() {
    var div = document.getElementById('cambiardivcolor');

    var divcolor = div.style.backgroundColor;

    if (divcolor == "red") {
        div.style.backgroundColor = "orange";
    }
    else if (divcolor == "orange") {
        div.style.backgroundColor = "green";
    }
    else {
        div.style.backgroundColor = "red";
    }
}


var cambiardivcolor = document.getElementById("cambiardivcolor");
cambiardivcolor.onmouseleave = () => {
    cambiardivcolor.innerHTML += "Adios";
}

cambiardivcolor.onmouseenter = () => {
    cambiardivcolor.innerHTML += "Hola";
}