let ordenado = ('webmaster');
function revesCadena(ordenado) {
    return ordenado.split('').reverse().join('');
}
revesCadena(ordenado);
let resulatado3delreves = (revesCadena(ordenado))
document.writeln(`<p>La función se llama: ${revesCadena.name}<p>`);
document.writeln(`<p>Parametro que se pasa: ${ordenado}<p>`);
document.writeln(`<p>Resultado: ${resulatado3delreves}<p>`);