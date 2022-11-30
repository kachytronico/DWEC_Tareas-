function charsDiferentes(cadena) {
    cadena = limpiar(cadena);
    let longCad = cadena.length;
    var charsDifs = [cadena.charAt(0)];
    var existe;
    let cont;
    for (let i = 1; i<longCad; i++) {
        existe = false;
        charsDifs.forEach(element => {
            if (cadena.charAt(i) === element) {
                existe = true;
            }
        });
        existe ? cont = 0 : cont = charsDifs.push(cadena.charAt(i));
    }
    return charsDifs.join(",");
}