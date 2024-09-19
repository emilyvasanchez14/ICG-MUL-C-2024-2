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

// Clase para representar una línea
class Linea extends Figura {
    #x1; // Atributos privados con #
    #y1;
    #x2;
    #y2;

    constructor(x1, y1, x2, y2) {
        super(); // Llama al constructor de Figura
        this.#x1 = x1;
        this.#y1 = y1;
        this.#x2 = x2;
        this.#y2 = y2;
    }

    // Método público para dibujar la línea
    render(svg) {
        const linea = document.createElementNS("http://www.w3.org/2000/svg", "line");
        linea.setAttribute("x1", this.#x1);
        linea.setAttribute("y1", this.#y1);
        linea.setAttribute("x2", this.#x2);
        linea.setAttribute("y2", this.#y2);
        linea.setAttribute("stroke", "black");
        svg.appendChild(linea);
    }
}

// Clase para representar una circunferencia
class Circunferencia extends Figura {
    #cx;
    #cy;
    #r;

    constructor(cx, cy, r) {
        super();
        this.#cx = cx;
        this.#cy = cy;
        this.#r = r;
    }

    // Método público para dibujar la circunferencia
    render(svg) {
        const circulo = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circulo.setAttribute("cx", this.#cx);
        circulo.setAttribute("cy", this.#cy);
        circulo.setAttribute("r", this.#r);
        circulo.setAttribute("stroke", "black");
        circulo.setAttribute("fill", "none");
        svg.appendChild(circulo);
    }
}

// Clase para representar una elipse
class Elipse extends Figura {
    #cx;
    #cy;
    #rx;
    #ry;

    constructor(cx, cy, rx, ry) {
        super();
        this.#cx = cx;
        this.#cy = cy;
        this.#rx = rx;
        this.#ry = ry;
    }

    // Método público para dibujar la elipse
    render(svg) {
        const elipse = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
        elipse.setAttribute("cx", this.#cx);
        elipse.setAttribute("cy", this.#cy);
        elipse.setAttribute("rx", this.#rx);
        elipse.setAttribute("ry", this.#ry);
        elipse.setAttribute("stroke", "black");
        elipse.setAttribute("fill", "none");
        svg.appendChild(elipse);
    }
}

// Función para encapsular el proceso de dibujo
function dibujarPrimitivas() {
    // Crear y dibujar una línea
    const linea = new Linea(50, 50, 200, 200);
    linea.render(svgCanvas);

    // Crear y dibujar una circunferencia
    const circunferencia = new Circunferencia(300, 100, 50);
    circunferencia.render(svgCanvas);

    // Crear y dibujar una elipse
    const elipse = new Elipse(400, 300, 80, 50);
    elipse.render(svgCanvas);
}

// Dibujar las primitivas en el SVG
dibujarPrimitivas();
