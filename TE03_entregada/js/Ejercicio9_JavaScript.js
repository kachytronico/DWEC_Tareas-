
let tamaño = (20)
const strAleat = tamaño => {
    const banco = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let aleatoria = "";
    for (let i = 0; i < tamaño; i++) {
        aleatoria += banco.charAt(Math.floor(Math.random() * banco.length));
    }
    return aleatoria;
}
let resulatado9 = strAleat(tamaño);
document.writeln(`<p>La función se llama: ${strAleat.name}<p>`);
document.writeln(`<p>Parametro que se pasa como tamaño: ${tamaño}<p>`);
document.writeln(`<p>Resultado: ${resulatado9}<p>`);

