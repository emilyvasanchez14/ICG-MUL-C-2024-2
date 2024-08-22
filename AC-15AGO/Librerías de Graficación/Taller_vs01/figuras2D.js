const shapeForm = document.getElementById('shapeForm');
const shapeSelect = document.getElementById('shape');
const parametersDiv = document.getElementById('parameters');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

shapeSelect.addEventListener('change', function() {
    parametersDiv.innerHTML = ''; // Limpiar parámetros previos
    const selectedShape = shapeSelect.value;
    
    // Generar los campos del formulario según la figura seleccionada
    switch(selectedShape) {
        case 'circle':
            addCircleParameters();
            break;
        case 'square':
            addSquareParameters();
            break;
        case 'triangle':
            addTriangleParameters();
            break;
        case 'polygon':
            addPolygonParameters();
            break;
        case 'line':
            addLineParameters();
            break;
        case 'ellipse':
            addEllipseParameters();
            break;
    }
});

function addCircleParameters() {
    parametersDiv.innerHTML = `
        <label for="centerX">Centro X:</label>
        <input type="number" id="centerX" name="centerX" required><br>
        
        <label for="centerY">Centro Y:</label>
        <input type="number" id="centerY" name="centerY" required><br>
        
        <label for="radius">Radio:</label>
        <input type="number" id="radius" name="radius" required><br>
        
        <label for="fillColor">Color de relleno:</label>
        <input type="color" id="fillColor" name="fillColor" required><br>
        
        <label for="borderColor">Color del borde:</label>
        <input type="color" id="borderColor" name="borderColor" required><br>
    `;
}

function addSquareParameters() {
    parametersDiv.innerHTML = `
        <label for="startX">Inicio X:</label>
        <input type="number" id="startX" name="startX" required><br>
        
        <label for="startY">Inicio Y:</label>
        <input type="number" id="startY" name="startY" required><br>
        
        <label for="sideLength">Lado:</label>
        <input type="number" id="sideLength" name="sideLength" required><br>
        
        <label for="fillColor">Color de relleno:</label>
        <input type="color" id="fillColor" name="fillColor" required><br>
        
        <label for="borderColor">Color del borde:</label>
        <input type="color" id="borderColor" name="borderColor" required><br>
    `;
}

function addTriangleParameters() {
    parametersDiv.innerHTML = `
        <label for="x1">X1:</label>
        <input type="number" id="x1" name="x1" required><br>
        
        <label for="y1">Y1:</label>
        <input type="number" id="y1" name="y1" required><br>
        
        <label for="x2">X2:</label>
        <input type="number" id="x2" name="x2" required><br>
        
        <label for="y2">Y2:</label>
        <input type="number" id="y2" name="y2" required><br>
        
        <label for="x3">X3:</label>
        <input type="number" id="x3" name="x3" required><br>
        
        <label for="y3">Y3:</label>
        <input type="number" id="y3" name="y3" required><br>
        
        <label for="fillColor">Color de relleno:</label>
        <input type="color" id="fillColor" name="fillColor" required><br>
        
        <label for="borderColor">Color del borde:</label>
        <input type="color" id="borderColor" name="borderColor" required><br>
    `;
}

function addPolygonParameters() {
    parametersDiv.innerHTML = `
        <label for="centerX">Centro X:</label>
        <input type="number" id="centerX" name="centerX" required><br>
        
        <label for="centerY">Centro Y:</label>
        <input type="number" id="centerY" name="centerY" required><br>
        
        <label for="radius">Radio:</label>
        <input type="number" id="radius" name="radius" required><br>
        
        <label for="sides">Número de lados:</label>
        <input type="number" id="sides" name="sides" required><br>
        
        <label for="fillColor">Color de relleno:</label>
        <input type="color" id="fillColor" name="fillColor" required><br>
        
        <label for="borderColor">Color del borde:</label>
        <input type="color" id="borderColor" name="borderColor" required><br>
    `;
}

function addLineParameters() {
    parametersDiv.innerHTML = `
        <label for="startX">Inicio X:</label>
        <input type="number" id="startX" name="startX" required><br>
        
        <label for="startY">Inicio Y:</label>
        <input type="number" id="startY" name="startY" required><br>
        
        <label for="endX">Fin X:</label>
        <input type="number" id="endX" name="endX" required><br>
        
        <label for="endY">Fin Y:</label>
        <input type="number" id="endY" name="endY" required><br>
        
        <label for="borderColor">Color de la línea:</label>
        <input type="color" id="borderColor" name="borderColor" required><br>
    `;
}

function addEllipseParameters() {
    parametersDiv.innerHTML = `
        <label for="centerX">Centro X:</label>
        <input type="number" id="centerX" name="centerX" required><br>
        
        <label for="centerY">Centro Y:</label>
        <input type="number" id="centerY" name="centerY" required><br>
        
        <label for="radiusX">Radio X:</label>
        <input type="number" id="radiusX" name="radiusX" required><br>
        
        <label for="radiusY">Radio Y:</label>
        <input type="number" id="radiusY" name="radiusY" required><br>
        
        <label for="fillColor">Color de relleno:</label>
        <input type="color" id="fillColor" name="fillColor" required><br>
        
        <label for="borderColor">Color del borde:</label>
        <input type="color" id="borderColor" name="borderColor" required><br>
    `;
}

function drawShape() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const selectedShape = shapeSelect.value;

    switch (selectedShape) {
        case 'circle':
            drawCircle();
            break;
        case 'square':
            drawSquare();
            break;
        case 'triangle':
            drawTriangle();
            break;
        case 'polygon':
            drawPolygon();
            break;
        case 'line':
            drawLine();
            break;
        case 'ellipse':
            drawEllipse();
            break;
    }
}

function drawCircle() {
    const centerX = document.getElementById('centerX').value;
    const centerY = document.getElementById('centerY').value;
    const radius = document.getElementById('radius').value;
    const fillColor = document.getElementById('fillColor').value;
    const borderColor = document.getElementById('borderColor').value;
    
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.fillStyle = fillColor;
    ctx.fill();
    ctx.strokeStyle = borderColor;
    ctx.stroke();
}

function drawSquare() {
    const startX = document.getElementById('startX').value;
    const startY = document.getElementById('startY').value;
    const sideLength = document.getElementById('sideLength').value;
    const fillColor = document.getElementById('fillColor').value;
    const borderColor = document.getElementById('borderColor').value;
    
    ctx.beginPath();
    ctx.rect(startX, startY, sideLength, sideLength);
    ctx.fillStyle = fillColor;
    ctx.fill();
    ctx.strokeStyle = borderColor;
    ctx.stroke();
}

function drawTriangle() {
    const x1 = document.getElementById('x1').value;
    const y1 = document.getElementById('y1').value;
    const x2 = document.getElementById('x2').value;
    const y2 = document.getElementById('y2').value;
    const x3 = document.getElementById('x3').value;
    const y3 = document.getElementById('y3').value;
    const fillColor = document.getElementById('fillColor').value;
    const borderColor = document.getElementById('borderColor').value;
    
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.closePath();
    ctx.fillStyle = fillColor;
    ctx.fill();
    ctx.strokeStyle = borderColor;
    ctx.stroke();
}

function drawPolygon() {
    const centerX = document.getElementById('centerX').value;
    const centerY = document.getElementById('centerY').value;
    const radius = document.getElementById('radius').value;
    const sides = document.getElementById('sides').value;
    const fillColor = document.getElementById('fillColor').value;
    const borderColor = document.getElementById('borderColor').value;
    
    const angle = 2 * Math.PI / sides;
    
    ctx.beginPath();
    for (let i = 0; i < sides; i++) {
        const x = centerX + radius * Math.cos(i * angle);
        const y = centerY + radius * Math.sin(i * angle);
        if (i === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    }
    ctx.closePath();
    ctx.fillStyle = fillColor;
    ctx.fill();
    ctx.strokeStyle = borderColor;
    ctx.stroke();
}

function drawLine() {
    const startX = document.getElementById('startX').value;
    const startY = document.getElementById('startY').value;
    const endX = document.getElementById('endX').value;
    const endY = document.getElementById('endY').value;
    const borderColor = document.getElementById('borderColor').value;
    
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.strokeStyle = borderColor;
    ctx.stroke();
}

function drawEllipse() {
    const centerX = document.getElementById('centerX').value;
    const centerY = document.getElementById('centerY').value;
    const radiusX = document.getElementById('radiusX').value;
    const radiusY = document.getElementById('radiusY').value;
    const fillColor = document.getElementById('fillColor').value;
    const borderColor = document.getElementById('borderColor').value;
    
    ctx.beginPath();
    ctx.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, 2 * Math.PI);
    ctx.fillStyle = fillColor;
    ctx.fill();
    ctx.strokeStyle = borderColor;
    ctx.stroke();
}
