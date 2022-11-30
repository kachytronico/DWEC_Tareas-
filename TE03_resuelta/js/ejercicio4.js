function laPalabraMasLarga(cadena) {
    let letras = cadena.split(" ");
    let longMax = 0;
    letras.forEach(element => {
        if (element.length > longMax) {
            cadena = element;
            longMax = element.length;
        }
    });
    return cadena;
}