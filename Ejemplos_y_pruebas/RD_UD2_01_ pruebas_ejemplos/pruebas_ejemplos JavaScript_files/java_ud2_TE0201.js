alert("Reconoce 'Allí ves a Sevilla' como un palindromo")
let palindromo = ("Allí ves a Sevilla")

const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  } 
let palindromo_sin = removeAccents(palindromo);
function es_o_no_palindromo(palindromo_sin) {
    palindromo_sin = palindromo_sin.toLowerCase().replace(/\s*/g, '');
    return palindromo_sin == palindromo_sin.split('').reverse().join('');
}
console.log(es_o_no_palindromo(palindromo_sin));   // true or false

alert(es_o_no_palindromo(palindromo_sin));