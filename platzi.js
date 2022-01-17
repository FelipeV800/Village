var texto = document.getElementById('textmaxvacas');
var boton = document.getElementById("btngenerar");
boton.addEventListener("click", datosAnimales);

var vp = document.getElementById("villakitsu");
var papel = vp.getContext("2d");

document.addEventListener("keydown", mover);

var xPj = 200;
var yPj = 250;

var xVaca = new Array();
var yVaca = new Array();

var xCerdo = new Array();
var yCerdo = new Array();

var xPollo = new Array();
var yPollo = new Array();

var teclas = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    A: 65,
    W: 87,
    D: 68,
    S: 83
};

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

var personaje = {
    url: "pj.png",
    cargaOK: false
}

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

personaje.imagen = new Image();
personaje.imagen.src = personaje.url;
personaje.imagen.addEventListener("load", cargarPersonaje);

function cargarFondo() {
    fondo.cargaOK = true;
    dibujar();
}

function cargarPersonaje() {
    personaje.cargaOK = true;
    dibujar();
}

function cargarVaca() {
    vaca.cargaOK = true;
    datosAnimales();
}

function cargarCerdo() {
    cerdo.cargaOK = true;
    datosAnimales();
}

function cargarPollo() {
    pollo.cargaOK = true;
    datosAnimales();
}

function datosAnimales() {
    if (vaca.cargaOK) {
        var cantidad = random(1, parseInt(texto.value));
        for (var i = 0; i < cantidad; i++) {
            var x = (random(0, 7)) * 60;
            var y = (random(0, 7)) * 60;
            xVaca[i] = x;
            yVaca[i] = y;
        }
    }

    if (cerdo.cargaOK) {
        for (var i = 0; i < random(1, 3); i++) {
            var x = (random(0, 7)) * 60;
            var y = (random(0, 7)) * 60;
            xCerdo[i] = x;
            yCerdo[i] = y;
        }
    }

    if (pollo.cargaOK) {
        for (var i = 0; i < random(0, 2); i++) {
            var x = (random(0, 7)) * 60;
            var y = (random(0, 7)) * 60;
            xPollo[i] = x;
            yPollo[i] = y;
        }
    }
    dibujar();
}

function dibujar() {
    if (fondo.cargaOK) {
        papel.drawImage(fondo.imagen, 0, 0);
    }

    if (vaca.cargaOK) {
        for(var i=0; i<10; i++){
			papel.drawImage(vaca.imagen, xVaca[i], yVaca[i]);		
		}
    }

    if (cerdo.cargaOK) {
        for(var i=0; i<10; i++){
			papel.drawImage(cerdo.imagen, xCerdo[i], yCerdo[i]);		
		}
    }

    if (pollo.cargaOK) {
        for(var i=0; i<10; i++){
			papel.drawImage(pollo.imagen, xPollo[i], yPollo[i]);		
		}
    }

    if (personaje.cargaOK) {
        papel.drawImage(personaje.imagen, xPj, yPj);
    }
}

function mover(properties) {
    var movimiento = 20;
    switch (properties.keyCode) {
        case teclas.UP:
            if (yPj < 10) {
                alert("Creo que aun no podemos ir ahi!!");
            } else {
                yPj = yPj - movimiento;
                dibujar(xPj, yPj);
            }
            break;
        case teclas.DOWN:
            if (yPj > 410) {
                alert("Creo que aun no podemos ir ahi!!");
            } else {
                yPj = yPj + movimiento;
                dibujar(xPj, yPj);
            }
            break;
        case teclas.LEFT:
            if (xPj < 0) {
                alert("Creo que aun no podemos ir ahi!!");
            } else {
                xPj = xPj - movimiento;
                dibujar(xPj, yPj);
            }
            break;
        case teclas.RIGHT:
            if (xPj > 430) {
                alert("Creo que aun no podemos ir ahi!!");
            } else {
                xPj = xPj + movimiento;
                dibujar(xPj, yPj);
            }
            break;
    }

    switch (properties.keyCode) {
        case teclas.W:
            if (yPj < 10) {
                alert("Creo que aun no podemos ir ahi!!");
            } else {
                yPj = yPj - movimiento;
                dibujar(xPj, yPj);
            }
            break;
        case teclas.S:
            if (yPj > 410) {
                alert("Creo que aun no podemos ir ahi!!");
            } else {
                yPj = yPj + movimiento;
                dibujar(xPj, yPj);
            }
            break;
        case teclas.A:
            if (xPj < 0) {
                alert("Creo que aun no podemos ir ahi!!");
            } else {
                xPj = xPj - movimiento;
                dibujar(xPj, yPj);
            }
            break;
        case teclas.D:
            if (xPj > 430) {
                alert("Creo que aun no podemos ir ahi!!");
            } else {
                xPj = xPj + movimiento;
                dibujar(xPj, yPj);
            }
            break;
    }
}

function random(nMin, nMax) {
    var resultado;
    resultado = Math.floor(Math.random() * (nMax - nMin + 1)) + nMin;
    return resultado;
}