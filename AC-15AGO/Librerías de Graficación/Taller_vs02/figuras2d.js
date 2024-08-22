const shapeForm = document.getElementById('shapeForm');
const shapeSelect = document.getElementById('shape');
const coordinateTypeSelect = document.getElementById('coordinateType');
const parametersDiv = document.getElementById('parameters');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

shapeSelect.addEventListener('change', updateParameters);
coordinateTypeSelect.addEventListener('change', updateParameters);
shapeForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar el envío del formulario
    drawShape();
});

function updateParameters() {
    parametersDiv.innerHTML = ''; // Limpiar parámetros previos
    const selectedShape = shapeSelect.value;
    const coordinateType = coordinateTypeSelect.value;
    
    // Generar los campos del formulario según la figura seleccionada y el tipo de coordenadas
    if (coordinateType === 'cartesian') {
        addCartesianParameters(selectedShape);
    } else if (coordinateType === 'polar') {
        addPolarParameters(selectedShape);
    }
}

function addCartesianParameters(shape) {
    switch(shape) {
        case 'circle':
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
            break;
        case 'square':
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
            break;
        case 'triangle':
            parametersDiv.innerHTML = `
                <label for="x1">Punto 1 X:</label>
                <input type="number" id="x1" name="x1" required><br>
                
                <label for="y1">Punto 1 Y:</label>
                <input type="number" id="y1" name="y1" required><br>
                
                <label for="x2">Punto 2 X:</label>
                <input type="number" id="x2" name="x2" required><br>
                
                <label for="y2">Punto 2 Y:</label>
                <input type="number" id="y2" name="y2" required><br>
                
                <label for="x3">Punto 3 X:</label>
                <input type="number" id="x3" name="x3" required><br>
                
                <label for="y3">Punto 3 Y:</label>
                <input type="number" id="y3" name="y3" required><br>
                
                <label for="fillColor">Color de relleno:</label>
                <input type="color" id="fillColor" name="fillColor" required><br>
                
                <label for="borderColor">Color del borde:</label>
                <input type="color" id="borderColor" name="borderColor" required><br>
            `;
            break;
        case 'polygon':
            parametersDiv.innerHTML = `
                <label for="centerX">Centro X:</label>
                <input type="number" id="centerX" name="centerX" required><br>
                
                <label for="centerY">Centro Y:</label>
                <input type="number" id="centerY" name="centerY" required><br>
                
                <label for="radius">Radio:</label>
                <input type="number" id="radius" name="radius" required><br>
                
                <label for="sides">Lados:</label>
                <input type="number" id="sides" name="sides" required><br>
                
                <label for="fillColor">Color de relleno:</label>
                <input type="color" id="fillColor" name="fillColor" required><br>
                
                <label for="borderColor">Color del borde:</label>
                <input type="color" id="borderColor" name="borderColor" required><br>
            `;
            break;
        case 'line':
            parametersDiv.innerHTML = `
                <label for="startX">Inicio X:</label>
                <input type="number" id="startX" name="startX" required><br>
                
                <label for="startY">Inicio Y:</label>
                <input type="number" id="startY" name="startY" required><br>
                
                <label for="endX">Fin X:</label>
                <input type="number" id="endX" name="endX" required><br>
                
                <label for="endY">Fin Y:</label>
                <input type="number" id="endY" name="endY" required><br>
                
                <label for="borderColor">Color del borde:</label>
                <input type="color" id="borderColor" name="borderColor" required><br>
            `;
            break;
        case 'ellipse':
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
            break;
    }
}

function addPolarParameters(shape) {
    switch(shape) {
        case 'circle':
            parametersDiv.innerHTML = `
                <label for="radius">Radio:</label>
                <input type="number" id="radius" name="radius" required><br>
                
                <label for="angle">Ángulo (en grados):</label>
                <input type="number" id="angle" name="angle" required><br>
                
                <label for="distance">Distancia al origen:</label>
                <input type="number" id="distance" name="distance" required><br>
                
                <label for="fillColor">Color de relleno:</label>
                <input type="color" id="fillColor" name="fillColor" required><br>
                
                <label for="borderColor">Color del borde:</label>
                <input type="color" id="borderColor" name="borderColor" required><br>
            `;
            break;
        case 'square':
            parametersDiv.innerHTML = `
                <label for="angle">Ángulo (en grados):</label>
                <input type="number" id="angle" name="angle" required><br>
                
                <label for="distance">Distancia al origen:</label>
                <input type="number" id="distance" name="distance" required><br>
                
                <label for="sideLength">Lado:</label>
                <input type="number" id="sideLength" name="sideLength" required><br>
                
                <label for="fillColor">Color de relleno:</label>
                <input type="color" id="fillColor" name="fillColor" required><br>
                
                <label for="borderColor">Color del borde:</label>
                <input type="color" id="borderColor" name="borderColor" required><br>
            `;
            break;
        case 'triangle':
            parametersDiv.innerHTML = `
                <label for="angle1">Ángulo 1 (en grados):</label>
                <input type="number" id="angle1" name="angle1" required><br>
                
                <label for="distance1">Distancia 1 al origen:</label>
                <input type="number" id="distance1" name="distance1" required><br>
                
                <label for="angle2">Ángulo 2 (en grados):</label>
                <input type="number" id="angle2" name="angle2" required><br>
                
                <label for="distance2">Distancia 2 al origen:</label>
                <input type="number" id="distance2" name="distance2" required><br>
                
                <label for="angle3">Ángulo 3 (en grados):</label>
                <input type="number" id="angle3" name="angle3" required><br>
                
                <label for="distance3">Distancia 3 al origen:</label>
                <input type="number" id="distance3" name="distance3" required><br>
                
                <label for="fillColor">Color de relleno:</label>
                <input type="color" id="fillColor" name="fillColor" required><br>
                
                <label for="borderColor">Color del borde:</label>
                <input type="color" id="borderColor" name="borderColor" required><br>
            `;
            break;
        case 'polygon':
            parametersDiv.innerHTML = `
                <label for="angle">Ángulo (en grados):</label>
                <input type="number" id="angle" name="angle" required><br>
                
                <label for="distance">Distancia al origen:</label>
                <input type="number" id="distance" name="distance" required><br>
                
                <label for="sides">Lados:</label>
                <input type="number" id="sides" name="sides" required><br>
                
                <label for="radius">Radio:</label>
                <input type="number" id="radius" name="radius" required><br>
                
                <label for="fillColor">Color de relleno:</label>
                <input type="color" id="fillColor" name="fillColor" required><br>
                
                <label for="borderColor">Color del borde:</label>
                <input type="color" id="borderColor" name="borderColor" required><br>
            `;
            break;
        case 'line':
            parametersDiv.innerHTML = `
                <label for="startAngle">Ángulo de inicio (en grados):</label>
                <input type="number" id="startAngle" name="startAngle" required><br>
                
                <label for="startDistance">Distancia de inicio al origen:</label>
                <input type="number" id="startDistance" name="startDistance" required><br>
                
                <label for="endAngle">Ángulo de fin (en grados):</label>
                <input type="number" id="endAngle" name="endAngle" required><br>
                
                <label for="endDistance">Distancia de fin al origen:</label>
                <input type="number" id="endDistance" name="endDistance" required><br>
                
                <label for="borderColor">Color del borde:</label>
                <input type="color" id="borderColor" name="borderColor" required><br>
            `;
            break;
        case 'ellipse':
            parametersDiv.innerHTML = `
                <label for="angle">Ángulo (en grados):</label>
                <input type="number" id="angle" name="angle" required><br>
                
                <label for="distance">Distancia al origen:</label>
                <input type="number" id="distance" name="distance" required><br>
                
                <label for="radiusX">Radio X:</label>
                <input type="number" id="radiusX" name="radiusX" required><br>
                
                <label for="radiusY">Radio Y:</label>
                <input type="number" id="radiusY" name="radiusY" required><br>
                
                <label for="fillColor">Color de relleno:</label>
                <input type="color" id="fillColor" name="fillColor" required><br>
                
                <label for="borderColor">Color del borde:</label>
                <input type="color" id="borderColor" name="borderColor" required><br>
            `;
            break;
    }
}

function drawShape() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const selectedShape = shapeSelect.value;
    const coordinateType = coordinateTypeSelect.value;

    if (coordinateType === 'cartesian') {
        drawCartesianShape(selectedShape);
    } else if (coordinateType === 'polar') {
        drawPolarShape(selectedShape);
    }
}

function drawCartesianShape(shape) {
    const fillColor = document.getElementById('fillColor')?.value || 'black';
    const borderColor = document.getElementById('borderColor')?.value || 'black';

    switch (shape) {
        case 'circle':
            const centerX = parseFloat(document.getElementById('centerX').value);
            const centerY = parseFloat(document.getElementById('centerY').value);
            const radius = parseFloat(document.getElementById('radius').value);

            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
            ctx.fillStyle = fillColor;
            ctx.fill();
            ctx.strokeStyle = borderColor;
            ctx.stroke();
            break;
        case 'square':
            const startX = parseFloat(document.getElementById('startX').value);
            const startY = parseFloat(document.getElementById('startY').value);
            const sideLength = parseFloat(document.getElementById('sideLength').value);

            ctx.beginPath();
            ctx.rect(startX, startY, sideLength, sideLength);
            ctx.fillStyle = fillColor;
            ctx.fill();
            ctx.strokeStyle = borderColor;
            ctx.stroke();
            break;
        case 'triangle':
            const x1 = parseFloat(document.getElementById('x1').value);
            const y1 = parseFloat(document.getElementById('y1').value);
            const x2 = parseFloat(document.getElementById('x2').value);
            const y2 = parseFloat(document.getElementById('y2').value);
            const x3 = parseFloat(document.getElementById('x3').value);
            const y3 = parseFloat(document.getElementById('y3').value);

            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.lineTo(x3, y3);
            ctx.closePath();
            ctx.fillStyle = fillColor;
            ctx.fill();
            ctx.strokeStyle = borderColor;
            ctx.stroke();
            break;
        case 'polygon':
            const centerXPolygon = parseFloat(document.getElementById('centerX').value);
            const centerYPolygon = parseFloat(document.getElementById('centerY').value);
            const radiusPolygon = parseFloat(document.getElementById('radius').value);
            const sides = parseInt(document.getElementById('sides').value);

            const angleStep = (2 * Math.PI) / sides;

            ctx.beginPath();
            for (let i = 0; i < sides; i++) {
                const angle = angleStep * i;
                const x = centerXPolygon + radiusPolygon * Math.cos(angle);
                const y = centerYPolygon + radiusPolygon * Math.sin(angle);
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
            break;
        case 'line':
            const startXLine = parseFloat(document.getElementById('startX').value);
            const startYLine = parseFloat(document.getElementById('startY').value);
            const endXLine = parseFloat(document.getElementById('endX').value);
            const endYLine = parseFloat(document.getElementById('endY').value);

            ctx.beginPath();
            ctx.moveTo(startXLine, startYLine);
            ctx.lineTo(endXLine, endYLine);
            ctx.strokeStyle = borderColor;
            ctx.stroke();
            break;
        case 'ellipse':
            const centerXEllipse = parseFloat(document.getElementById('centerX').value);
            const centerYEllipse = parseFloat(document.getElementById('centerY').value);
            const radiusX = parseFloat(document.getElementById('radiusX').value);
            const radiusY = parseFloat(document.getElementById('radiusY').value);

            ctx.beginPath();
            ctx.ellipse(centerXEllipse, centerYEllipse, radiusX, radiusY, 0, 0, 2 * Math.PI);
            ctx.fillStyle = fillColor;
            ctx.fill();
            ctx.strokeStyle = borderColor;
            ctx.stroke();
            break;
    }
}

function drawPolarShape(shape) {
    const fillColor = document.getElementById('fillColor')?.value || 'black';
    const borderColor = document.getElementById('borderColor')?.value || 'black';

    switch (shape) {
        case 'circle':
            const radius = parseFloat(document.getElementById('radius').value);
            const angle = parseFloat(document.getElementById('angle').value);
            const distance = parseFloat(document.getElementById('distance').value);
            
            const centerX = distance * Math.cos(angle * Math.PI / 180);
            const centerY = distance * Math.sin(angle * Math.PI / 180);
            
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
            ctx.fillStyle = fillColor;
            ctx.fill();
            ctx.strokeStyle = borderColor;
            ctx.stroke();
            break;
        case 'square':
            const angleSquare = parseFloat(document.getElementById('angle').value);
            const distanceSquare = parseFloat(document.getElementById('distance').value);
            const sideLength = parseFloat(document.getElementById('sideLength').value);

            const startXSquare = distanceSquare * Math.cos(angle * Math.PI / 180);
            const startYSquare = distanceSquare * Math.sin(angle * Math.PI / 180);
            
            ctx.beginPath();
            ctx.rect(startXSquare, startYSquare, sideLength, sideLength);
            ctx.fillStyle = fillColor;
            ctx.fill();
            ctx.strokeStyle = borderColor;
            ctx.stroke();
            break;
        case 'triangle':
            const angle1 = parseFloat(document.getElementById('angle1').value);
            const distance1 = parseFloat(document.getElementById('distance1').value);
            const angle2 = parseFloat(document.getElementById('angle2').value);
            const distance2 = parseFloat(document.getElementById('distance2').value);
            const angle3 = parseFloat(document.getElementById('angle3').value);
            const distance3 = parseFloat(document.getElementById('distance3').value);

            const x1Triangle = distance1 * Math.cos(angle1 * Math.PI / 180);
            const y1Triangle = distance1 * Math.sin(angle1 * Math.PI / 180);
            const x2Triangle = distance2 * Math.cos(angle2 * Math.PI / 180);
            const y2Triangle = distance2 * Math.sin(angle2 * Math.PI / 180);
            const x3Triangle = distance3 * Math.cos(angle3 * Math.PI / 180);
            const y3Triangle = distance3 * Math.sin(angle3 * Math.PI / 180);

            ctx.beginPath();
            ctx.moveTo(x1Triangle, y1Triangle);
            ctx.lineTo(x2Triangle, y2Triangle);
            ctx.lineTo(x3Triangle, y3Triangle);
            ctx.closePath();
            ctx.fillStyle = fillColor;
            ctx.fill();
            ctx.strokeStyle = borderColor;
            ctx.stroke();
            break;
        case 'polygon':
            const anglePolygon = parseFloat(document.getElementById('angle').value);
            const distancePolygon = parseFloat(document.getElementById('distance').value);
            const sides = parseInt(document.getElementById('sides').value);
            const radiusPolygon = parseFloat(document.getElementById('radius').value);

            const angleStepPolygon = (2 * Math.PI) / sides;

            ctx.beginPath();
            for (let i = 0; i < sides; i++) {
                const angle = angleStepPolygon * i;
                const x = distancePolygon + radiusPolygon * Math.cos(angle);
                const y = distancePolygon + radiusPolygon * Math.sin(angle);
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
            break;
        case 'line':
            const startAngleLine = parseFloat(document.getElementById('startAngle').value);
            const startDistanceLine = parseFloat(document.getElementById('startDistance').value);
            const endAngleLine = parseFloat(document.getElementById('endAngle').value);
            const endDistanceLine = parseFloat(document.getElementById('endDistance').value);

            const startXLinePolar = startDistanceLine * Math.cos(startAngleLine * Math.PI / 180);
            const startYLinePolar = startDistanceLine * Math.sin(startAngleLine * Math.PI / 180);
            const endXLinePolar = endDistanceLine * Math.cos(endAngleLine * Math.PI / 180);
            const endYLinePolar = endDistanceLine * Math.sin(endAngleLine * Math.PI / 180);

            ctx.beginPath();
            ctx.moveTo(startXLinePolar, startYLinePolar);
            ctx.lineTo(endXLinePolar, endYLinePolar);
            ctx.strokeStyle = borderColor;
            ctx.stroke();
            break;
        case 'ellipse':
            const angleEllipse = parseFloat(document.getElementById('angle').value);
            const distanceEllipse = parseFloat(document.getElementById('distance').value);
            const radiusXEllipse = parseFloat(document.getElementById('radiusX').value);
            const radiusYEllipse = parseFloat(document.getElementById('radiusY').value);

            const centerXEllipsePolar = distanceEllipse * Math.cos(angleEllipse * Math.PI / 180);
            const centerYEllipsePolar = distanceEllipse * Math.sin(angleEllipse * Math.PI / 180);

            ctx.beginPath();
            ctx.ellipse(centerXEllipsePolar, centerYEllipsePolar, radiusXEllipse, radiusYEllipse, 0, 0, 2 * Math.PI);
            ctx.fillStyle = fillColor;
            ctx.fill();
            ctx.strokeStyle = borderColor;
            ctx.stroke();
            break;
    }
}
