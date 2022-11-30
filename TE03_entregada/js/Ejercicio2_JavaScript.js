const obtenerCombinaciones = palabra => {
    const combinaciones = [];
    for (let i = 0; i < palabra.length; i++) {
        let combinacion = palabra.charAt(i);
        combinaciones.push(combinacion);
        for (let j = i + 1; j < palabra.length; j++) {
            combinacion += palabra.charAt(j);
            combinaciones.push(combinacion);
        }
    }
    return combinaciones;
}
const palabras = ["pan"];
for (const palabra of palabras) {
    const combinaciones = obtenerCombinaciones(palabra);
    for (const combinacion of combinaciones) {
        console.log(combinacion);  
    }
    let resultado2 = (obtenerCombinaciones(palabra))
    document.writeln(`<p>La función se llama: obtenerCombinaciones<p>`);
    document.writeln(`<p>Parametro que se pasa: ${palabra}<p>`);
    document.writeln(`<p>Resultado: ${resultado2}<p>`);
}

