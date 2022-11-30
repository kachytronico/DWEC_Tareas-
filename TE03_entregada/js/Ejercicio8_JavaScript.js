let cadena8 = "thequickbrownfoxjumpsoverthelazydog";
const unicoscaracteres = cadena8 => {
    let resulatadounico = "";
    for (letra of cadena8) {
        if (!resulatadounico.includes(letra)) {
            resulatadounico += letra;
        }

    }
    return resulatadounico; 
}
let resulatado8 = unicoscaracteres(cadena8);
document.writeln(`<p>La función se llama: ${unicoscaracteres.name}<p>`);
document.writeln(`<p>Parametro que se pasa: ${cadena8}<p>`);
document.writeln(`<p>Resultado: ${resulatado8}<p>`);