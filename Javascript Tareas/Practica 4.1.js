function changefontsize() {
    var micaja = document.getElementById("micaja");
    var fontSizemicaja = micaja.style.fontSize;
    console.log("mi caja font size" + fontSizemicaja);

    if (fontSizemicaja == "10px") 
    {
    micaja.style.fontSize = "12px";
    }

    else if (fontSizemicaja == "12px")
    {
        micaja.style.fontSize = "14px";
    }

     else 
    {
        micaja.style.fontSize = "10px";
    }
}

var cambiartamaño = document.getElementById("cambiartamaño");
cambiartamaño.onclick = () => {
    changefontsize();
}