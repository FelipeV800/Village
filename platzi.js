var z;

for (var i = 0; i < 10; i++) {
    z = random(10, 20);
    document.write(z + ", ");
}

function random(nMin, nMax){
    var resultado;
    resultado = Math.floor(Math.random() * (nMax - nMin + 1)) + nMin;
    return resultado;
}