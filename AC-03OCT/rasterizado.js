class Punto {
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }

    // Getters
    get x() {
        return this._x;
    }

    get y() {
        return this._y;
    }

    // Método para calcular el ángulo respecto a un centroide
    calcularAngulo(centroide) {
        return Math.atan2(this._y - centroide.y, this._x - centroide.x);
    }
}

class Poligono {
    constructor(puntos) {
        this.puntos = puntos;
    }

    // Calcular el centroide
    calcularCentroide() {
        let sumaX = 0, sumaY = 0;
        this.puntos.forEach(p => {
            sumaX += p.x;
            sumaY += p.y;
        });
        let centroideX = sumaX / this.puntos.length;
        let centroideY = sumaY / this.puntos.length;
        return new Punto(centroideX, centroideY);
    }

    // Ordenar puntos por ángulo
    ordenarPorAngulo() {
        const centroide = this.calcularCentroide();
        this.puntos.sort((a, b) => a.calcularAngulo(centroide) - b.calcularAngulo(centroide));
    }

    // Producto cruzado
    productoCruzado(o, a, b) {
        return (a.x - o.x) * (b.y - o.y) - (a.y - o.y) * (b.x - o.x);
    }

    // Verificar si es convexa o cóncava
    verificarTipo() {
        this.ordenarPorAngulo();
        let cruzados = [];
        const n = this.puntos.length;

        for (let i = 0; i < n; i++) {
            const o = this.puntos[i];
            const a = this.puntos[(i + 1) % n];
            const b = this.puntos[(i + 2) % n];
            const cp = this.productoCruzado(o, a, b);
            cruzados.push(cp);
        }

        const todosPositivos = cruzados.every(cp => cp > 0);
        const todosNegativos = cruzados.every(cp => cp < 0);

        if (todosPositivos || todosNegativos) {
            return "Convexa";
        } else {
            return "Cóncava";
        }
    }

    // Dibujar polígono en canvas (rasterizado)
    dibujarRasterizado(contexto) {
        contexto.beginPath();
        contexto.moveTo(this.puntos[0].x, this.puntos[0].y);
        for (let i = 1; i < this.puntos.length; i++) {
            contexto.lineTo(this.puntos[i].x, this.puntos[i].y);
        }
        contexto.closePath();
        contexto.stroke();
    }
}

// Generar puntos aleatorios dentro del canvas
function generarPuntosAleatorios(numPuntos, anchoCanvas, altoCanvas) {
    let puntos = [];
    for (let i = 0; i < numPuntos; i++) {
        const x = Math.random() * anchoCanvas;
        const y = Math.random() * altoCanvas;
        puntos.push(new Punto(x, y));
    }
    return puntos;
}

const canvas = document.getElementById("miCanvasRaster");
const contexto = canvas.getContext("2d");

// Generar 6 puntos aleatorios
const puntos = generarPuntosAleatorios(6, canvas.width, canvas.height);

const poligono = new Poligono(puntos);

poligono.dibujarRasterizado(contexto);
document.getElementById("tipoPoligonoRaster").innerText = "El polígono es " + poligono.verificarTipo();
