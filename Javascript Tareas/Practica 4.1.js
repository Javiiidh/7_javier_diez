function cambiarcolor () {
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

cambiardivcolor.onmouseleave = () => {
    cambiardivcolor.InnerHTML += "Adios";
}

cambiardivcolor.onmousecenter = () => {
    cambiardivcolor.InnerHTML += "Hola";
}