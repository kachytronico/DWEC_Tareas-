let palabra5 = ("El rápido zorro marrón");
const contarVocales = palabra5 => {
    const vocales = "aáeéiíoóuú";
    let cantidadVocales = 0;
    for (const letra of palabra5) {
        if (vocales.includes(letra.toLowerCase())) {
            cantidadVocales++;
        }
    }
    return cantidadVocales;
}
let resulatado5 = contarVocales(palabra5);
document.writeln(`<p>La función se llama: ${palabraLarga.name}<p>`);
document.writeln(`<p>Parametro que se pasa: ${palabra5}<p>`);
document.writeln(`<p>Resultado: ${resulatado5}<p>`);
