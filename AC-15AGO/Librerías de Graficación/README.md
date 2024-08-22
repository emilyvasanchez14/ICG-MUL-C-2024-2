Para poder desarrollar y entender mejor el codigo tuve que indagar sobre varios conceptos que no tenia presente a la hora de utilizar lenguajes como HTML y JavaScript,
tambien sobre las coordenadas polares y cartesianas. Algunos de estos conceptos fueron:
-El canvas de HTML, el cual segun mi investigación es un elemento que permite dibujar graficos por medio de JavaScript en HTML.
-El "ctx" que es el contexto de dibujo que proporciona metodos para dubujar en el canvas y permite dibujar lineas y llenar formas.
-El sistema de coordenadas las cuales son: cartesianas en las cuales los puntos se definen por sus coordenadas X y Y, y las polares en donde los puntos se definen 
  un angulo y una distancia desde el centro del canvas.
-La conversion de coordenadas polares a cartesianas ya que aunque se den los parametros en coordenadas polares, en el canvas solo se dibuja con coordenadas cartesianas, 
para esto tuve que buscar como funcionaba el sistema de conversionm el cual es: 
Para x: x=r . cos(angulo) y para y: y= r . cos(angulo) en donde para usar estas formulas se necesita el angulo en radianes.
