function palindromo(cadena) {
    cadena = limpiar(cadena);
    let longCad = cadena.length;
    for (let i = 0; i<longCad; i++) {
        if(cadena.charAt(i) !== cadena.charAt(longCad - i - 1)) {
            return false;
        }
    }
    return true;
}


