// Obtener el SVG donde se van a dibujar las figuras
const svgCanvas = document.getElementById('svgCanvas');

// Clase base abstracta para las primitivas gráficas
class Figura {
    constructor() {
        if (new.target === Figura) {
            throw new Error("No se puede instanciar la clase abstracta Figura");
        }
    }

    // Método abstracto que deben implementar las subclases
    render(svg) {
        throw new Error("El método render() debe ser implementado en las subclases");
    }
}

// Clase para representar un punto
class Punto {
    #x;
    #y;

    constructor(x, y) {
        this.#x = x;
        this.#y = y;
    }

    // Getters para acceder a las coordenadas del punto
    get x() {
        return this.#x;
    }

    get y() {
        return this.#y;
    }
}

// Clase para representar una línea
class Linea extends Figura {
    #punto1; // Atributos privados para los puntos
    #punto2;

    constructor(punto1, punto2) {
        super(); // Llama al constructor de Figura
        this.#punto1 = punto1;
        this.#punto2 = punto2;
    }

    // Método público para dibujar la línea
    render(svg) {
        const linea = document.createElementNS("http://www.w3.org/2000/svg", "line");
        linea.setAttribute("x1", this.#punto1.x);
        linea.setAttribute("y1", this.#punto1.y);
        linea.setAttribute("x2", this.#punto2.x);
        linea.setAttribute("y2", this.#punto2.y);
        linea.setAttribute("stroke", "black");
        svg.appendChild(linea);
    }
}

// Clase para representar una circunferencia
class Circunferencia extends Figura {
    #centro; // Usaremos un punto para representar el centro
    #r;

    constructor(centro, r) {
        super();
        this.#centro = centro;
        this.#r = r;
    }

    // Método público para dibujar la circunferencia
    render(svg) {
        const circulo = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circulo.setAttribute("cx", this.#centro.x);
        circulo.setAttribute("cy", this.#centro.y);
        circulo.setAttribute("r", this.#r);
        circulo.setAttribute("stroke", "black");
        circulo.setAttribute("fill", "none");
        svg.appendChild(circulo);
    }
}

// Clase para representar una elipse
class Elipse extends Figura {
    #centro; // Usaremos un punto para representar el centro
    #rx;
    #ry;

    constructor(centro, rx, ry) {
        super();
        this.#centro = centro;
        this.#rx = rx;
        this.#ry = ry;
    }

    // Método público para dibujar la elipse
    render(svg) {
        const elipse = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
        elipse.setAttribute("cx", this.#centro.x);
        elipse.setAttribute("cy", this.#centro.y);
        elipse.setAttribute("rx", this.#rx);
        elipse.setAttribute("ry", this.#ry);
        elipse.setAttribute("stroke", "black");
        elipse.setAttribute("fill", "none");
        svg.appendChild(elipse);
    }
}

// Función para encapsular el proceso de dibujo
function dibujarPrimitivas() {
    // Crear puntos para la línea
    const punto1 = new Punto(50, 50);
    const punto2 = new Punto(200, 200);

    // Crear y dibujar una línea usando los puntos
    const linea = new Linea(punto1, punto2);
    linea.render(svgCanvas);

    // Crear un punto para el centro de la circunferencia y dibujarla
    const centroCircunferencia = new Punto(300, 100);
    const circunferencia = new Circunferencia(centroCircunferencia, 50);
    circunferencia.render(svgCanvas);

    // Crear un punto para el centro de la elipse y dibujarla
    const centroElipse = new Punto(400, 300);
    const elipse = new Elipse(centroElipse, 80, 50);
    elipse.render(svgCanvas);
}

// Dibujar las primitivas en el SVG
dibujarPrimitivas();
