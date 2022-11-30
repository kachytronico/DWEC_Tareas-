function limpiar(cadena) {
    cadena = cadena.toLowerCase().trim();
    cadena = cadena.replaceAll(" ","");
    cadena = cadena.replaceAll(",","");
    cadena = cadena.replaceAll(".","");
    cadena = cadena.replaceAll("-","");
    cadena = cadena.replaceAll("_","");
    cadena = cadena.replaceAll("¿","");
    cadena = cadena.replaceAll("?","");
    cadena = cadena.replaceAll("¡","");
    cadena = cadena.replaceAll("!","");
    cadena = cadena.replaceAll("á","a");
    cadena = cadena.replaceAll("é","e");
    cadena = cadena.replaceAll("í","i");
    cadena = cadena.replaceAll("ó","o");
    cadena = cadena.replaceAll("ú","u");
    cadena = cadena.replaceAll("ü","u");
    return cadena;
}


