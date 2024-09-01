class Poligono {
    #nLados;
    #apotema;
    #lado;
    #xCentro;
    #yCentro;
    #radioPolar;
    #anguloPolar;

    constructor(nLados) {
        this.#nLados = nLados;
    }

    get nLados() {
        return this.#nLados;
    }

    set nLados(value) {
        this.#nLados = value;
    }

    get apotema() {
        return this.#apotema;
    }

    set apotema(value) {
        this.#apotema = value;
        this.#lado = this.calcularLadoDesdeApotema(value);
    }

    get lado() {
        return this.#lado;
    }

    set lado(value) {
        this.#lado = value;
        this.#apotema = this.calcularApotemaDesdeLado(value);
    }

    get xCentro() {
        return this.#xCentro;
    }

    set xCentro(value) {
        this.#xCentro = value;
    }

    get yCentro() {
        return this.#yCentro;
    }

    set yCentro(value) {
        this.#yCentro = value;
    }

    get radioPolar() {
        return this.#radioPolar;
    }

    set radioPolar(value) {
        this.#radioPolar = value;
    }

    get anguloPolar() {
        return this.#anguloPolar;
    }

    set anguloPolar(value) {
        this.#anguloPolar = value;
    }

    calcularLadoDesdeApotema(apotema) {
        const radio = apotema / Math.cos(Math.PI / this.#nLados);
        return 2 * radio * Math.sin(Math.PI / this.#nLados);
    }

    calcularApotemaDesdeLado(lado) {
        const radio = lado / (2 * Math.sin(Math.PI / this.#nLados));
        return radio * Math.cos(Math.PI / this.#nLados);
    }

    calcularRadio() {
        return this.#lado / (2 * Math.sin(Math.PI / this.#nLados));
    }

    dibujarPoligono(canvas) {
        const ctx = canvas.getContext("2d");

        const radio = this.calcularRadio();

        if (!radio) {
            alert("Ingrese un valor válido para el lado o apotema.");
            return;
        }

        if (document.getElementById('tipoCoordenadas').value === 'cartesianas') {
            this.#xCentro = parseFloat(document.getElementById('coordX').value) || canvas.width / 2;
            this.#yCentro = parseFloat(document.getElementById('coordY').value) || canvas.height / 2;
        } else if (document.getElementById('tipoCoordenadas').value === 'polares') {
            this.#radioPolar = parseFloat(document.getElementById('radioPolar').value);
            this.#anguloPolar = parseFloat(document.getElementById('anguloPolar').value);
            this.#xCentro = canvas.width / 2 + this.#radioPolar * Math.cos(this.#anguloPolar * Math.PI / 180);
            this.#yCentro = canvas.height / 2 - this.#radioPolar * Math.sin(this.#anguloPolar * Math.PI / 180);
        } else {
            alert("Seleccione un tipo de coordenadas.");
            return;
        }

        // Limpiar el canvas antes de dibujar
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Dibujar el polígono
        ctx.beginPath();
        for (let i = 0; i < this.#nLados; i++) {
            const angulo = (2 * Math.PI / this.#nLados) * i;
            const x = this.#xCentro + radio * Math.cos(angulo);
            const y = this.#yCentro + radio * Math.sin(angulo);
            if (i === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        }
        ctx.closePath();
        ctx.stroke();

        // Dibujar líneas desde los vértices al centro
        ctx.beginPath();
        for (let i = 0; i < this.#nLados; i++) {
            const angulo = (2 * Math.PI / this.#nLados) * i;
            const x = this.#xCentro + radio * Math.cos(angulo);
            const y = this.#yCentro + radio * Math.sin(angulo);
            ctx.moveTo(this.#xCentro, this.#yCentro);
            ctx.lineTo(x, y);
        }
        ctx.stroke();
    }
}

function toggleInputBySelection() {
    const seleccion = document.getElementById('seleccion').value;
    document.getElementById('apotema').disabled = seleccion !== 'apotema';
    document.getElementById('lado').disabled = seleccion !== 'lado';
    document.getElementById('apotema').value = '';
    document.getElementById('lado').value = '';
    document.getElementById('valorCalculado').value = '';
}

function calcularValorFaltante() {
    const nLados = parseInt(document.getElementById('nLados').value);
    const seleccion = document.getElementById('seleccion').value;

    if (seleccion === 'apotema') {
        const apotema = parseFloat(document.getElementById('apotema').value);
        if (apotema && nLados >= 3) {
            const poligono = new Poligono(nLados);
            poligono.apotema = apotema;
            document.getElementById('valorCalculado').value = `Lado: ${poligono.lado.toFixed(2)}`;
        }
    } else if (seleccion === 'lado') {
        const lado = parseFloat(document.getElementById('lado').value);
        if (lado && nLados >= 3) {
            const poligono = new Poligono(nLados);
            poligono.lado = lado;
            document.getElementById('valorCalculado').value = `Apotema: ${poligono.apotema.toFixed(2)}`;
        }
    }
}

function toggleCoordenadas() {
    const tipo = document.getElementById('tipoCoordenadas').value;
    document.getElementById('coordenadasCartesianas').style.display = tipo === 'cartesianas' ? 'block' : 'none';
    document.getElementById('coordenadasPolares').style.display = tipo === 'polares' ? 'block' : 'none';
}

function actualizarPoligono() {
    const nLados = parseInt(document.getElementById('nLados').value);
    const seleccion = document.getElementById('seleccion').value;
    let poligono = new Poligono(nLados);

    if (seleccion === 'apotema') {
        const apotema = parseFloat(document.getElementById('apotema').value);
        if (apotema) poligono.apotema = apotema;
    } else if (seleccion === 'lado') {
        const lado = parseFloat(document.getElementById('lado').value);
        if (lado) poligono.lado = lado;
    }

    const canvas = document.getElementById('canvas');
    poligono.dibujarPoligono(canvas);
}
