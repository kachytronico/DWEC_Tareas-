let palindromo = ("Allí ves a Sevilla")
function es_o_no_palindromo(palindromo) {
    palindromo = palindromo.toLowerCase().replace(/\s*/g, '');
    palindromo = palindromo.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return palindromo == palindromo.split('').reverse().join('');
}
let resultado = (es_o_no_palindromo(palindromo))

document.writeln("<p>La función se llama: es_o_no_palindromo");
document.writeln("<p>Parametro que se pasa:<p>"+ palindromo);
document.writeln("<p>Resultado:<p>"+ resultado);
