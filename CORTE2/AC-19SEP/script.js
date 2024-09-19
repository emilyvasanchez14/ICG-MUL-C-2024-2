// Obtener el SVG donde se van a dibujar las figuras
const svgCanvas = document.getElementById('svgCanvas');

// Clase base para las primitivas gráficas
class Figura {
    constructor() {
        if (new.target === Figura) {
            throw new Error("No se puede instanciar la clase abstracta Figura");
        }
    }
    
    render() {
        throw new Error("El método render() debe ser implementado en las subclases");
    }
}

// Clase para dibujar una línea
class Linea extends Figura {
    constructor(x1, y1, x2, y2) {
        super();
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
    }

    render(svg) {
        const linea = document.createElementNS("http://www.w3.org/2000/svg", "line");
        linea.setAttribute("x1", this.x1);
        linea.setAttribute("y1", this.y1);
        linea.setAttribute("x2", this.x2);
        linea.setAttribute("y2", this.y2);
        linea.setAttribute("stroke", "black");
        svg.appendChild(linea);
    }
}

// Clase para dibujar una circunferencia
class Circunferencia extends Figura {
    constructor(cx, cy, r) {
        super();
        this.cx = cx;
        this.cy = cy;
        this.r = r;
    }

    render(svg) {
        const circulo = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circulo.setAttribute("cx", this.cx);
        circulo.setAttribute("cy", this.cy);
        circulo.setAttribute("r", this.r);
        circulo.setAttribute("stroke", "black");
        circulo.setAttribute("fill", "none");
        svg.appendChild(circulo);
    }
}

// Clase para dibujar una elipse
class Elipse extends Figura {
    constructor(cx, cy, rx, ry) {
        super();
        this.cx = cx;
        this.cy = cy;
        this.rx = rx;
        this.ry = ry;
    }

    render(svg) {
        const elipse = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
        elipse.setAttribute("cx", this.cx);
        elipse.setAttribute("cy", this.cy);
        elipse.setAttribute("rx", this.rx);
        elipse.setAttribute("ry", this.ry);
        elipse.setAttribute("stroke", "black");
        elipse.setAttribute("fill", "none");
        svg.appendChild(elipse);
    }
}

// Función para dibujar las primitivas
function dibujarPrimitivas() {
    // Crear una línea
    const linea = new Linea(50, 50, 200, 200);
    linea.render(svgCanvas);

    // Crear una circunferencia
    const circunferencia = new Circunferencia(300, 100, 50);
    circunferencia.render(svgCanvas);

    // Crear una elipse
    const elipse = new Elipse(400, 300, 80, 50);
    elipse.render(svgCanvas);
}

// Dibujar las primitivas en el SVG
dibujarPrimitivas();

