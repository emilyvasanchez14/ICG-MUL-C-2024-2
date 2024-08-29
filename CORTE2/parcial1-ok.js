class Poligono {
    #nLados;
    #apotema;
    #lado;
    #radio;
    #tipoCoordenadas;
    #xCentro;
    #yCentro;

    constructor(nLados, apotema, lado, tipoCoordenadas) {
        this.#nLados = nLados;
        this.#apotema = apotema;
        this.#lado = lado;
        this.#tipoCoordenadas = tipoCoordenadas;
    }

    // Métodos públicos para acceder y modificar los atributos privados
    set nLados(nLados) {
        this.#nLados = nLados;
    }

    set apotema(apotema) {
        this.#apotema = apotema;
    }

    set lado(lado) {
        this.#lado = lado;
    }

    set tipoCoordenadas(tipoCoordenadas) {
        this.#tipoCoordenadas = tipoCoordenadas;
    }

    calcularValorFaltante() {
        let valorCalculado;

        if (isNaN(this.#nLados) || this.#nLados < 3) {
            return 'Número de lados inválido.';
        }

        if (this.#tipoCoordenadas === 'apotema' && !isNaN(this.#apotema) && this.#apotema > 0) {
            const radio = this.#apotema / Math.cos(Math.PI / this.#nLados);
            valorCalculado = 2 * radio * Math.sin(Math.PI / this.#nLados);
            return `Lado: ${valorCalculado.toFixed(2)}`;
        } 
        else if (this.#tipoCoordenadas === 'lado' && !isNaN(this.#lado) && this.#lado > 0) {
            const radio = this.#lado / (2 * Math.sin(Math.PI / this.#nLados));
            valorCalculado = radio * Math.cos(Math.PI / this.#nLados);
            return `Apotema: ${valorCalculado.toFixed(2)}`;
        } else {
            return 'Ingrese un valor válido.';
        }
    }

    calcularRadio() {
        if (this.#tipoCoordenadas === 'cartesianas') {
            if (!isNaN(this.#lado) && this.#lado > 0) {
                return this.#lado / (2 * Math.sin(Math.PI / this.#nLados));
            } else if (!isNaN(this.#apotema) && this.#apotema > 0) {
                return this.#apotema / Math.cos(Math.PI / this.#nLados);
            } else {
                return null;
            }
        } else if (this.#tipoCoordenadas === 'polares') {
            return this.#lado / (2 * Math.sin(Math.PI / this.#nLados));
        } else {
            return null;
        }
    }

    dibujarPoligono(canvas) {
        const ctx = canvas.getContext("2d");

        let radio = this.calcularRadio();
        if (radio === null) {
            alert("Ingrese un valor válido para el lado o apotema.");
            return;
        }

        if (this.#tipoCoordenadas === 'cartesianas') {
            this.#xCentro = parseFloat(document.getElementById('coordX').value) || canvas.width / 2;
            this.#yCentro = parseFloat(document.getElementById('coordY').value) || canvas.height / 2;
        } else if (this.#tipoCoordenadas === 'polares') {
            const radioPolar = parseFloat(document.getElementById('radioPolar').value);
            const anguloPolar = parseFloat(document.getElementById('anguloPolar').value);
            this.#xCentro = canvas.width / 2 + radioPolar * Math.cos(anguloPolar * Math.PI / 180);
            this.#yCentro = canvas.height / 2 - radioPolar * Math.sin(anguloPolar * Math.PI / 180);
        } else {
            alert("Seleccione un tipo de coordenadas.");
            return;
        }

        // Limpiar el canvas antes de dibujar
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Configurar el estilo de dibujo
        ctx.beginPath();
        ctx.strokeStyle = "#000";
        ctx.lineWidth = 2;

        // Calcular los ángulos y dibujar el polígono
        for (let i = 0; i < this.#nLados; i++) {
            const angulo = 2 * Math.PI / this.#nLados * i;
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
    }
}

// Función para manejar la entrada de usuario y actualización del polígono
function actualizarPoligono() {
    const nLados = parseInt(document.getElementById("nLados").value, 10);
    const apotema = parseFloat(document.getElementById("apotema").value);
    const lado = parseFloat(document.getElementById("lado").value);
    const tipoCoordenadas = document.getElementById('tipoCoordenadas').value;

    const poligono = new Poligono(nLados, apotema, lado, tipoCoordenadas);

    // Mostrar el valor calculado
    const valorCalculadoInput = document.getElementById('valorCalculado');
    valorCalculadoInput.value = poligono.calcularValorFaltante();

    // Dibujar el polígono en el canvas
    const canvas = document.getElementById("canvas");
    poligono.dibujarPoligono(canvas);
}
