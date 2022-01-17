var vacasMaximas = document.getElementById("textmaxvacas");
var vp = document.getElementById("villakitsu");
var papel = vp.getContext("2d");
var cantidad = random(1,5);

console.log(vacasMaximas.value);

var fondo = {
    url: "tile.png",
    cargaOK: false
}

var vaca = {
    url: "vaca.png",
    cargaOK: false
};

var cerdo = {
    url: "cerdo.png",
    cargaOK: false
};

var pollo = {
    url: "pollo.png",
    cargaOK: false
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);

function cargarFondo() {
    fondo.cargaOK = true;
    dibujar();
}

function cargarVaca() {
    vaca.cargaOK = true;
    dibujar();
}

function cargarCerdo() {
    cerdo.cargaOK = true;
    dibujar();
}

function cargarPollo() {
    pollo.cargaOK = true;
    dibujar();
}

function dibujar() {
    if (fondo.cargaOK) {
        papel.drawImage(fondo.imagen, 0, 0);
    }

    if (vaca.cargaOK) {
        for (var v = 0; v < cantidad; v++) {
            var x = (random(0, 7)) * 60;
            var y = (random(0, 7)) * 60;
            papel.drawImage(vaca.imagen, x, y);
        }
    }

    if (cerdo.cargaOK) {
        papel.drawImage(cerdo.imagen, 100, 300);
    }

    if (pollo.cargaOK) {
        papel.drawImage(pollo.imagen, 20, 250);
    }
}

function random(nMin, nMax) {
    var resultado;
    resultado = Math.floor(Math.random() * (nMax - nMin + 1)) + nMin;
    return resultado;
}