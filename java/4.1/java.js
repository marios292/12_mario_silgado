function cambiarcolor() {
    var div = document.getElementById("micaja");

    var divColor = div.style.backgroundColor;

    if (divColor == "gray") {
        div.style.backgroundColor = "red";
    } else if ( divColor == "red") {
        div.style.backgroundColor = "blue";
    }
    else {
        div.style.backgroundColor = "gray";

 
   }

}

micaja.onmouseleave = () => {
    micaja.innerHTML += "Adiós!";
}

micaja.onmouseenter = () => {
    micaja.innerHTML += "Holaa!!";
}
