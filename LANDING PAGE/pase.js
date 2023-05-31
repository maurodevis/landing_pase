// funcion para hacer scrol sin utilizar el mouse, ejecutada por un boton que lo lleva a otra seccion con un "onclick"
function navegar(div1) {
  location.hash = "#" + div1;
}

//1	Imprimir los números del 1 al 50 cada uno con su respectivo cuadrado.
function alcuadrado() {
  var b = document.getElementById("tabla");

  var tabla = document.createElement("table");
  var tblBody = document.createElement("tbody");

  for (var i = 1; i <= 50; i++) {
    var hilera = document.createElement("tr");

    for (var j = 0; j < 1; j++) {
      var celda = document.createElement("td");
      var textoCelda = document.createTextNode(`Numero ${i}`);
      celda.appendChild(textoCelda);
      hilera.appendChild(celda);
      var celda = document.createElement("td");
      var textoCelda = document.createTextNode(`Cuadrado: ${i * i}`);
      celda.appendChild(textoCelda);
      hilera.appendChild(celda);
    }
    tblBody.appendChild(hilera);
  }
  tabla.appendChild(tblBody);
  b.appendChild(tabla);
  tabla.setAttribute("class", "table table-table table-striped table-dark");
  document.getElementById("tabla").style.display = "block";

}

//2 •	Imprimir números impares del 1 la 100 y seguidamente otro con los números pares de 102 a 200.
function numimpares() {
  let r = document.getElementById("resuimpar");
  let a = [];
  for (i = 3; i <= 100; i += 2) {
    a.push(i);
  }
  r.value = `${a}`;
}

function numpares() {
  let r = document.getElementById("resupar");
  let a = []
  for (i = 100; i <= 200; i += 2) {
    a.push(i);
  }
  r.value = `${a}`
}

//3	Imprimir números pares en forma descendente hasta 2 que son menores o iguales a un número natural dado
function numdescendentes() {
  let a = document.getElementById("ingresa_v3").value;
  let b = [];
  let c = document.getElementById("resu3");
  if (a % 2 !== 0) {
    alert("Debe ingresar un numero par")
  } else {
    for (let i = a; i >= 2; i -= 2) {
      b.push(i);
      c.value = `${b}`;
    }
  }
}

//4	Hallar el promedio ponderado de n números


//5 Buscar un número determinado en un arreglo y devolver su posición, si no se encuentra devolver “no se encuentra”
function buscar() {

  let a = parseInt(document.getElementById("ingresa_v5").value);
  let arreglo = [1, 2, 4, 5, 6, 7];
  let h = document.getElementById("resultado1");
  let j = document.getElementById("resultado2");
  let k = document.getElementById("resultado3");

  h.value = "Arreglo:" + arreglo;

  for (let i = 0; i <= arreglo.length; i++) {
    indice = arreglo.indexOf(a);
  }
  if (indice !== -1) {
    k.value = `El número ${a} se encuentra en la posición ${indice} del arreglo.`;
  } else {
    j.value = `El número ${a} no se encuentra en el arreglo.`;
  }
}


//6 Crear un arreglo e imprimirlo con la dimensión que asigne el usuario en js
function arreglo() {

  let b = document.getElementById("ingresa_v6").value
  let a = new Array();
  let r = document.getElementById("resu6")

  for (let i = 0; i <= b; i++) {
    a.push(i);
  }
  r.value = `Su arreglo es:{${a}}`;
}


// 7 contar elementos repetidos de un arreglo e imprimirlos.
function contar() {
  let b = document.getElementById("ingresav7");
  let c = document.getElementById("res7");

  let repetidos = [];
  let contador = 1;
  let arreglo1 = [1, 2, 2, 7, 8, 8, 9, 3, 3, 3,];
  /*for (let i = 1; i <= 8; i++){
arreglo1.push(parseInt(Math.random()*(10)));
}*/
  b.value = "Arreglo:" + arreglo1;

  for (let i = 0; i < arreglo1.length; i++) {
    if (arreglo1[i + 1] === arreglo1[i]) {
      contador++;
    } else {
      repetidos.push(contador);
      contador = 1;
    }
  }
  c.value = `repetidos ${repetidos}`
}

// 8 y 9 convertir numero ingresado de decimal a binario y de binario a decimal
function decimal_binario() {
  let num = document.getElementById("num").value;
  let tipo = document.querySelector('input[name="tipo"]:checked').value;
  let r = document.getElementById("resultado");

  if (num !== "") {
    switch (tipo) {
      case "1":
        let binario = "";
        while (num > 0) {
          binario = (num % 2) + binario;
          num = Math.floor(num / 2);
        }
        r.value = binario;
        break;

      case "2":
        let decimal = 0;
        for (let i = 0; i < num.length; i++) {
          decimal += +num[i] * 2 ** (num.length - 1 - i);
        }
        r.value = decimal;
        break;

      default:
        r.value = "Opción inválida";
        break;
    }
  } else {
    document.getElementById("com").innerHTML =
      "El campo no puede estar vacío. Por favor, ingrese un valor.";
  }
}


// 10 Multiplicar 2 arreglos
function Multiplicar() {
  let a = document.getElementById("r10");
  let b = document.getElementById("resultado10");
  let c = document.getElementById("resul10");
  let arreglo1 = [8, 16, 7, 1, 8, 4];
  let arreglo2 = [4, 3, 6, 1, 9, 2];
  let resultado = [];
  for (i = 0; i < arreglo1.length; i++) {
    resultado.push(arreglo1[i] * arreglo2[i]);
  }

  a.value = `Arreglo1: [${arreglo1}] `
  b.value = `Arreglo2: [${arreglo2}]`
  c.value = `Resultado: ${resultado}`
}


//11 Hallar producto punto entre dos arreglos
function producto_punto() {
  let a = document.getElementById("resul11");
  let b = document.getElementById("resu11");
  let h = document.getElementById("producto");
  //let h = document.getElementById("producto_punto");
  let arreglo1 = [1, 4, 7, 8, 5, 2];
  let arreglo2 = [9, 6, 3, 1, 5, 7];

  a.value = `Arreglo1=[${arreglo1}]`
  b.value = `Arreglo2=[${arreglo2}]`
  c = 0;
  for (i = 0; i < arreglo1.length; i++) {
    c = c + (arreglo1[i] * arreglo2[i]);
  }
  h.value = `producto ${c}`;
}

/*12	En el 2022 el país A tendrá una población de 25 millones de habitantes y el país B de 18,9 millones,
 las tasas de crecimiento anual de la población serán de 2% y 3% respectivamente desarrollar un algoritmo
 para informar en que año la población del país B superará a la de A.*/

function poblacion() {
  let a = document.getElementById("resultado12");
  let paisA = 25000000;
  let paisB = 18900000;
  let años = 0;

  while (paisA > paisB) {
    paisA = paisA + 500000;
    paisB = paisB + 567000;
    años++
  }
  a.value = `la poblacion B superara la poblacion A en: ${años} años`
}

/*13	Escribir un programa que muestre la suma de la serie (1*1)+(2*2)+(3*3)+(4*4)…(n*n) hasta que 
la suma sea menor al número digitado por el usuario. Debe mostrar la secuencia de manera ordenada.*/

function secuencia() {
  let a = document.getElementById("ingresar13").value;
  let b = document.getElementById("resultado13");
  let arreglo = [null]
  let contador = 1;
  let sumArreglo = 1;
  let sumArregl = 1;

  while (sumArregl < a) {
    let multi = contador * contador;
    sumArreglo = arreglo.reduce((ValorAnterior, ValorActual) => {
      return ValorAnterior + ValorActual;
    });

    if (sumArreglo < a) {
      arreglo.push(multi);
      sumArregl = sumArreglo;
      contador++;
      console.log('valor sumArregl   ' + sumArregl + '    valor inicial   ' + a)
    } else {
      break;
    }
  }
}

//14	Transforme el siguiente for: en su correspondiente while.
/*for (a = 0, b = 0; a < 7; a++, b += 2){
  console.log(a,b)
  }*/
function while14() {
  var r = document.getElementById("tabla");
  //let h = document.getElementById("resultado14");
  let a = 0;
  let b = 0;

  var tabla = document.createElement("table");
  var tblBody = document.createElement("tbody"); 00

  while (a < 7) {
    b += 2;
    a++;
    var hilera = document.createElement("tr");

    for (var j = 0; j < 7; j++) {
      var celda = document.createElement("td");
      var textoCelda = document.createTextNode(`Numero`);
      celda.appendChild(textoCelda);
      hilera.appendChild(celda);
      var celda = document.createElement("td");

      celda.appendChild(textoCelda);
      hilera.appendChild(celda);
    }
    tblBody.appendChild(hilera);
  }
  tabla.appendChild(tblBody);
  r.appendChild(tabla);
  tabla.setAttribute("class", "table table-table table-striped table-dark");

}
