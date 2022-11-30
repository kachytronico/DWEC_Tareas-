function dividirEnBilletesMonedas(importe, billMon, division) {
    while (billMon.length > 0) {
        unidad = billMon[0];
        if (unidad > importe) {
            billMon.shift();
        } else {
            cont = division.push(unidad);
            importe -= unidad;
            importe = Number(importe.toFixed(2)); // esto lo hago porque se pierde precisión en números pequeños
            dividirEnBilletesMonedas(importe,billMon, division);
        }
    }
    return division.join(", ");
} 