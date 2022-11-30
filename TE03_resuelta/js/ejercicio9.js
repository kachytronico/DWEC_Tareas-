function cadenaAleatoria(longMin, longMax) {
    let long = Math.random() * (longMax-longMin-1) + longMin + 1; // Me aseguro que el 0 no salga
    long = Number(long.toFixed(0)); 
    let caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result ="";
    let position;
    for (let i = 0; i < long; i++) {
        position = Math.random() * caracteres.length + 1;
        position = Number(position.toFixed(0));
        result += caracteres.charAt(position);
    }
    return result;
}