const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');
const shapeSelect = document.getElementById('shapeSelect');
const coordinateTypeSelect = document.getElementById('coordinateType');
const parametersDiv = document.getElementById('parameters');

shapeSelect.addEventListener('change', updateParameters);
coordinateTypeSelect.addEventListener('change', updateParameters);

function updateParameters() {
    const shape = shapeSelect.value;
    const coordinateType = coordinateTypeSelect.value;

    if (coordinateType === 'cartesian') {
        addCartesianParameters(shape);
    } else if (coordinateType === 'polar') {
        addPolarParameters(shape);
    }
}

function addCartesianParameters(shape) {
    switch (shape) {
        case 'circle':
            parametersDiv.innerHTML = `
                <label for="centerX">Centro X:</label>
                <input type="number" id="centerX" name="centerX" required>
                
                <label for="centerY">Centro Y:</label>
                <input type="number" id="centerY" name="centerY" required>
                
                <label for="radius">Radio:</label>
                <input type="number" id="radius" name="radius" required>
                
                <label for="fillColor">Color de relleno:</label>
                <input type="color" id="fillColor" name="fillColor" required>
                
                <label for="borderColor">Color del borde:</label>
                <input type="color" id="borderColor" name="borderColor" required>
            `;
            break;
        case 'square':
            parametersDiv.innerHTML = `
                <label for="startX">Inicio X:</label>
                <input type="number" id="startX" name="startX" required>
                
                <label for="startY">Inicio Y:</label>
                <input type="number" id="startY" name="startY" required>
                
                <label for="sideLength">Lado:</label>
                <input type="number" id="sideLength" name="sideLength" required>
                
                <label for="borderColor">Color del borde:</label>
                <input type="color" id="borderColor" name="borderColor" required>
            `;
            break;
        case 'triangle':
            parametersDiv.innerHTML = `
                <label for="x1">X1:</label>
                <input type="number" id="x1" name="x1" required>
                
                <label for="y1">Y1:</label>
                <input type="number" id="y1" name="y1" required>
                
                <label for="x2">X2:</label>
                <input type="number" id="x2" name="x2" required>
                
                <label for="y2">Y2:</label>
                <input type="number" id="y2" name="y2" required>
                
                <label for="x3">X3:</label>
                <input type="number" id="x3" name="x3" required>
                
                <label for="y3">Y3:</label>
                <input type="number" id="y3" name="y3" required>
                
                <label for="fillColor">Color de relleno:</label>
                <input type="color" id="fillColor" name="fillColor" required>
                
                <label for="borderColor">Color del borde:</label>
                <input type="color" id="borderColor" name="borderColor" required>
            `;
            break;
        case 'polygon':
            parametersDiv.innerHTML = `
                <label for="centerX">Centro X:</label>
                <input type="number" id="centerX" name="centerX" required>
                
                <label for="centerY">Centro Y:</label>
                <input type="number" id="centerY" name="centerY" required>
                
                <label for="radius">Radio:</label>
                <input type="number" id="radius" name="radius" required>
                
                <label for="sides">Lados:</label>
                <input type="number" id="sides" name="sides" required>
                
                <label for="fillColor">Color de relleno:</label>
                <input type="color" id="fillColor" name="fillColor" required>
                
                <label for="borderColor">Color del borde:</label>
                <input type="color" id="borderColor" name="borderColor" required>
            `;
            break;
        case 'line':
            parametersDiv.innerHTML = `
                <label for="startX">Inicio X:</label>
                <input type="number" id="startX" name="startX" required>
                
                <label for="startY">Inicio Y:</label>
                <input type="number" id="startY" name="startY" required>
                
                <label for="endX">Fin X:</label>
                <input type="number" id="endX" name="endX" required>
                
                <label for="endY">Fin Y:</label>
                <input type="number" id="endY" name="endY" required>
                
                <label for="borderColor">Color del borde:</label>
                <input type="color" id="borderColor" name="borderColor" required>
            `;
            break;
        case 'ellipse':
            parametersDiv.innerHTML = `
                <label for="centerX">Centro X:</label>
                <input type="number" id="centerX" name="centerX" required>
                
                <label for="centerY">Centro Y:</label>
                <input type="number" id="centerY" name="centerY" required>
                
                <label for="radiusX">Radio X:</label>
                <input type="number" id="radiusX" name="radiusX" required>
                
                <label for="radiusY">Radio Y:</label>
                <input type="number" id="radiusY" name="radiusY" required>
                
                <label for="fillColor">Color de relleno:</label>
                <input type="color" id="fillColor" name="fillColor" required>
                
                <label for="borderColor">Color del borde:</label>
                <input type="color" id="borderColor" name="borderColor" required>
            `;
            break;
    }
}

function addPolarParameters(shape) {
    switch (shape) {
        case 'circle':
            parametersDiv.innerHTML = `
                <label for="radius">Radio:</label>
                <input type="number" id="radius" name="radius" required>
                
                <label for="angle">Ángulo (°):</label>
                <input type="number" id="angle" name="angle" required>
                
                <label for="distance">Distancia:</label>
                <input type="number" id="distance" name="distance" required>
                
                <label for="fillColor">Color de relleno:</label>
                <input type="color" id="fillColor" name="fillColor" required>
                
                <label for="borderColor">Color del borde:</label>
                <input type="color" id="borderColor" name="borderColor" required>
            `;
            break;
        case 'square':
            parametersDiv.innerHTML = `
                <label for="angle">Ángulo (°):</label>
                <input type="number" id="angle" name="angle" required>
                
                <label for="distance">Distancia:</label>
                <input type="number" id="distance" name="distance" required>
                
                <label for="sideLength">Lado:</label>
                <input type="number" id="sideLength" name="sideLength" required>
                
                <label for="borderColor">Color del borde:</label>
                <input type="color" id="borderColor" name="borderColor" required>
            `;
            break;
        case 'triangle':
            parametersDiv.innerHTML = `
                <label for="angle1">Ángulo 1 (°):</label>
                <input type="number" id="angle1" name="angle1" required>
                
                <label for="distance1">Distancia 1:</label>
                <input type="number" id="distance1" name="distance1" required>
                
                <label for="angle2">Ángulo 2 (°):</label>
                <input type="number" id="angle2" name="angle2" required>
                
                <label for="distance2">Distancia 2:</label>
                <input type="number" id="distance2" name="distance2" required>
                
                <label for="angle3">Ángulo 3 (°):</label>
                <input type="number" id="angle3" name="angle3" required>
                
                <label for="distance3">Distancia 3:</label>
                <input type="number" id="distance3" name="distance3" required>
                
                <label for="fillColor">Color de relleno:</label>
                <input type="color" id="fillColor" name="fillColor" required>
                
                <label for="borderColor">Color del borde:</label>
                <input type="color" id="borderColor" name="borderColor" required>
            `;
            break;
        case 'polygon':
            parametersDiv.innerHTML = `
                <label for="angle">Ángulo (°):</label>
                <input type="number" id="angle" name="angle" required>
                
                <label for="distance">Distancia:</label>
                <input type="number" id="distance" name="distance" required>
                
                <label for="sides">Lados:</label>
                <input type="number" id="sides" name="sides" required>
                
                <label for="radius">Radio:</label>
                <input type="number" id="radius" name="radius" required>
                
                <label for="fillColor">Color de relleno:</label>
                <input type="color" id="fillColor" name="fillColor" required>
                
                <label for="borderColor">Color del borde:</label>
                <input type="color" id="borderColor" name="borderColor" required>
            `;
            break;
        case 'line':
            parametersDiv.innerHTML = `
                <label for="startAngle">Ángulo de inicio (°):</label>
                <input type="number" id="startAngle" name="startAngle" required>
                
                <label for="startDistance">Distancia de inicio:</label>
                <input type="number" id="startDistance" name="startDistance" required>
                
                <label for="endAngle">Ángulo de fin (°):</label>
                <input type="number" id="endAngle" name="endAngle" required>
                
                <label for="endDistance">Distancia de fin:</label>
                <input type="number" id="endDistance" name="endDistance" required>
                
                <label for="borderColor">Color del borde:</label>
                <input type="color" id="borderColor" name="borderColor" required>
            `;
            break;
        case 'ellipse':
            parametersDiv.innerHTML = `
                <label for="angle">Ángulo (°):</label>
                <input type="number" id="angle" name="angle" required>
                
                <label for="distance">Distancia:</label>
                <input type="number" id="distance" name="distance" required>
                
                <label for="radiusX">Radio X:</label>
                <input type="number" id="radiusX" name="radiusX" required>
                
                <label for="radiusY">Radio Y:</label>
                <input type="number" id="radiusY" name="radiusY" required>
                
                <label for="fillColor">Color de relleno:</label>
                <input type="color" id="fillColor" name="fillColor" required>
                
                <label for="borderColor">Color del borde:</label>
                <input type="color" id="borderColor" name="borderColor" required>
            `;
            break;
    }
}

function drawShape() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const shape = shapeSelect.value;
    const coordinateType = coordinateTypeSelect.value;

    if (coordinateType === 'cartesian') {
        drawCartesianShape(shape);
    } else if (coordinateType === 'polar') {
        drawPolarShape(shape);
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
            ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
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

            const angleStepPolygon = (2 * Math.PI) / sides;

            ctx.beginPath();
            for (let i = 0; i < sides; i++) {
                const angle = angleStepPolygon * i;
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
            const radiusYEllipse = parseFloat(document.getElementById('radiusY').value);

            ctx.beginPath();
            ctx.ellipse(centerXEllipse, centerYEllipse, radiusX, radiusYEllipse, 0, 0, 2 * Math.PI);
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
            const angle = parseFloat(document.getElementById('angle').value) * Math.PI / 180;
            const distance = parseFloat(document.getElementById('distance').value);

            const centerX = canvas.width / 2 + distance * Math.cos(angle);
            const centerY = canvas.height / 2 - distance * Math.sin(angle);

            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
            ctx.fillStyle = fillColor;
            ctx.fill();
            ctx.strokeStyle = borderColor;
            ctx.stroke();
            break;
        case 'square':
            const angleSquare = parseFloat(document.getElementById('angle').value) * Math.PI / 180;
            const distanceSquare = parseFloat(document.getElementById('distance').value);
            const sideLength = parseFloat(document.getElementById('sideLength').value);

            const centerXSquare = canvas.width / 2 + distanceSquare * Math.cos(angleSquare);
            const centerYSquare = canvas.height / 2 - distanceSquare * Math.sin(angleSquare);

            ctx.beginPath();
            ctx.rect(centerXSquare - sideLength / 2, centerYSquare - sideLength / 2, sideLength, sideLength);
            ctx.fillStyle = fillColor;
            ctx.fill();
            ctx.strokeStyle = borderColor;
            ctx.stroke();
            break;
        case 'triangle':
            const angle1 = parseFloat(document.getElementById('angle1').value) * Math.PI / 180;
            const distance1 = parseFloat(document.getElementById('distance1').value);
            const angle2 = parseFloat(document.getElementById('angle2').value) * Math.PI / 180;
            const distance2 = parseFloat(document.getElementById('distance2').value);
            const angle3 = parseFloat(document.getElementById('angle3').value) * Math.PI / 180;
            const distance3 = parseFloat(document.getElementById('distance3').value);

            const x1 = canvas.width / 2 + distance1 * Math.cos(angle1);
            const y1 = canvas.height / 2 - distance1 * Math.sin(angle1);
            const x2 = canvas.width / 2 + distance2 * Math.cos(angle2);
            const y2 = canvas.height / 2 - distance2 * Math.sin(angle2);
            const x3 = canvas.width / 2 + distance3 * Math.cos(angle3);
            const y3 = canvas.height / 2 - distance3 * Math.sin(angle3);

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
            const anglePolygon = parseFloat(document.getElementById('angle').value) * Math.PI / 180;
            const distancePolygon = parseFloat(document.getElementById('distance').value);
            const sides = parseInt(document.getElementById('sides').value);
            const radiusPolygon = parseFloat(document.getElementById('radius').value);

            const angleStepPolygon = (2 * Math.PI) / sides;

            ctx.beginPath();
            for (let i = 0; i < sides; i++) {
                const angleCurrent = anglePolygon + angleStepPolygon * i;
                const x = canvas.width / 2 + distancePolygon * Math.cos(angleCurrent);
                const y = canvas.height / 2 - distancePolygon * Math.sin(angleCurrent);
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
            const startAngle = parseFloat(document.getElementById('startAngle').value) * Math.PI / 180;
            const startDistance = parseFloat(document.getElementById('startDistance').value);
            const endAngle = parseFloat(document.getElementById('endAngle').value) * Math.PI / 180;
            const endDistance = parseFloat(document.getElementById('endDistance').value);

            const startX = canvas.width / 2 + startDistance * Math.cos(startAngle);
            const startY = canvas.height / 2 - startDistance * Math.sin(startAngle);
            const endX = canvas.width / 2 + endDistance * Math.cos(endAngle);
            const endY = canvas.height / 2 - endDistance * Math.sin(endAngle);

            ctx.beginPath();
            ctx.moveTo(startX, startY);
            ctx.lineTo(endX, endY);
            ctx.strokeStyle = borderColor;
            ctx.stroke();
            break;
        case 'ellipse':
            const angleEllipse = parseFloat(document.getElementById('angle').value) * Math.PI / 180;
            const distanceEllipse = parseFloat(document.getElementById('distance').value);
            const radiusX = parseFloat(document.getElementById('radiusX').value);
            const radiusYEllipse = parseFloat(document.getElementById('radiusY').value);

            const centerXEllipse = canvas.width / 2 + distanceEllipse * Math.cos(angleEllipse);
            const centerYEllipse = canvas.height / 2 - distanceEllipse * Math.sin(angleEllipse);

            ctx.beginPath();
            ctx.ellipse(centerXEllipse, centerYEllipse, radiusX, radiusYEllipse, 0, 0, 2 * Math.PI);
            ctx.fillStyle = fillColor;
            ctx.fill();
            ctx.strokeStyle = borderColor;
            ctx.stroke();
            break;
    }
}

// Inicializa el formulario con los parámetros predeterminados
updateParameters();

