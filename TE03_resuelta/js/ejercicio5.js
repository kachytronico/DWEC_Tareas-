function contarVocales(cadena) {
    cadena = limpiar(cadena);
    let longCad = cadena.length;
    let numVocales = 0;
    for (let i = 0; i < longCad; i++) {
        if (cadena.charAt(i) === 'a' || cadena.charAt(i) === 'e' || cadena.charAt(i) === 'i' || cadena.charAt(i) === 'o' || cadena.charAt(i) === 'u') {
            numVocales++;
        }
    }
    return numVocales;
}