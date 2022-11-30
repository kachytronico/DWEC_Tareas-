function combinLetras(cadena) {
    cadena = limpiar(cadena);
    let longCad = cadena.length;
    let combinaciones= [];
    for (let i = 0; i < longCad; i++) {
        for (let j = 1; j <= longCad-i; j++) {
            combinaciones.push(cadena.substr(i,j));
        }
    }
    return combinaciones.join(", ");
}