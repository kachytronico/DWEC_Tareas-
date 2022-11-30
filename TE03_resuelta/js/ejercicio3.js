function letrasOrdenReves(cadena) {
    cadena = limpiar(cadena);
    let letras = cadena.split("");
    letras = letras.sort();
    letras = letras.reverse();
    return letras.join(" ");
}