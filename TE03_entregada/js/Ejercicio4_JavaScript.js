let frase4 = ("Tutorial de desarrollo web");
const palabraLarga = frase4 => {
    // Separa con Espacios
    const separadaEspacios = frase4.split(" ");
    // Inicializar 
    let palabraLarga = separadaEspacios[0];
    //Comparar
    for (const frase4 of separadaEspacios) {
        if (frase4.length >= palabraLarga.length) {
            palabraLarga = frase4;
        }
    }
    return palabraLarga;
}
let resulatado4 = palabraLarga(frase4);
document.writeln(`<p>La función se llama: ${palabraLarga.name}<p>`);
document.writeln(`<p>Parametro que se pasa: ${frase4}<p>`);
document.writeln(`<p>Resultado: ${resulatado4}<p>`);