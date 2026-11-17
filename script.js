// Algoritmos de nivelación - JavaScript (versión básica)
// Solo usa: prompt, alert, parseInt, variables, operadores, if/else, for, while y funciones.

// 1. Liquidación de comisión por ventas
function comision() {
  let nombre = prompt("Nombre del vendedor:");
  let ventas = parseInt(prompt("Ventas del mes:"));
  let anios = parseInt(prompt("Años de antigüedad:"));
  let porcentaje = 0;

  if (ventas >= 8000000 && anios >= 2) {
    porcentaje = 10;
  } else if (ventas >= 3000000) {
    porcentaje = 5;
  }

  let valorComision = ventas * porcentaje / 100;

  alert("Vendedor: " + nombre);
  alert("Ventas realizadas: " + ventas);
  alert("Porcentaje de comisión: " + porcentaje);
  alert("Valor de la comisión: " + valorComision);
}

// 4. Clasificación de un triángulo y cálculo de su área
function triangulo() {
  let a = parseInt(prompt("Lado 1:"));
  let b = parseInt(prompt("Lado 2:"));
  let c = parseInt(prompt("Lado 3:"));

  if (a > 0 && b > 0 && c > 0 && a + b > c && a + c > b && b + c > a) {
    if (a == b && b == c) {
      alert("Clasificación: Equilátero");
    } else if (a == b || a == c || b == c) {
      alert("Clasificación: Isósceles");
    } else {
      alert("Clasificación: Escaleno");
    }

    // Fórmula de Herón: la raíz cuadrada es elevar a la 0.5
    let s = (a + b + c) / 2;
    let area = (s * (s - a) * (s - b) * (s - c)) ** 0.5;
    alert("Área: " + area);
  } else {
    alert("Error: las medidas no son válidas");
  }
}

// 5. Evaluación de desempeño académico
function desempeno() {
  let nombre = prompt("Nombre del aprendiz:");
  let n1 = parseInt(prompt("Calificación 1 (0 a 100):"));
  let n2 = parseInt(prompt("Calificación 2 (0 a 100):"));
  let n3 = parseInt(prompt("Calificación 3 (0 a 100):"));
  let asistencia = parseInt(prompt("Asistencia (0 a 100):"));

  if (n1 < 0 || n1 > 100 || n2 < 0 || n2 > 100 ||
      n3 < 0 || n3 > 100 || asistencia < 0 || asistencia > 100) {
    alert("Error: los valores deben estar entre 0 y 100");
  } else {
    let promedio = (n1 + n2 + n3) / 3;
    let resultado = "Aprobado";

    if (asistencia < 80) {
      resultado = "No aprobado por asistencia";
    } else if (promedio < 60) {
      resultado = "No aprobado por rendimiento";
    }

    alert("Aprendiz: " + nombre);
    alert("Promedio: " + promedio);
    alert("Asistencia: " + asistencia);
    alert("Resultado: " + resultado);
  }
}

// 6. Registro de ventas de una jornada
function ventas() {
  let cantidad = parseInt(prompt("¿Cuántas ventas va a registrar?"));
  let total = 0;
  let superiores = 0;
  let mayor = 0;

  for (let i = 1; i <= cantidad; i = i + 1) {
    let venta = parseInt(prompt("Valor de la venta " + i + ":"));
    total = total + venta;

    if (venta > 200000) {
      superiores = superiores + 1;
    }
    if (venta > mayor) {
      mayor = venta;
    }
  }

  let promedio = total / cantidad;

  alert("Cantidad de ventas: " + cantidad);
  alert("Total recaudado: " + total);
  alert("Promedio por venta: " + promedio);
  alert("Ventas superiores a 200000: " + superiores);
  alert("Venta más alta: " + mayor);
}

// 9. Registro de números y estadísticas
function numeros() {
  let cantidad = parseInt(prompt("¿Cuántos números va a ingresar?"));
  let suma = 0;
  let positivos = 0;
  let negativos = 0;
  let ceros = 0;
  let mayor = 0;

  for (let i = 1; i <= cantidad; i = i + 1) {
    let n = parseInt(prompt("Número " + i + ":"));
    suma = suma + n;

    if (n > 0) {
      positivos = positivos + 1;
    } else if (n < 0) {
      negativos = negativos + 1;
    } else {
      ceros = ceros + 1;
    }

    // El primer número es el mayor al comienzo
    if (i == 1 || n > mayor) {
      mayor = n;
    }
  }

  let promedio = suma / cantidad;

  alert("Suma: " + suma);
  alert("Promedio: " + promedio);
  alert("Positivos: " + positivos);
  alert("Negativos: " + negativos);
  alert("Ceros: " + ceros);
  alert("Número mayor: " + mayor);
}

// 10. Control de pagos de un préstamo
function pagos() {
  let nombre = prompt("Nombre del cliente:");
  let deuda = parseInt(prompt("Valor total de la deuda:"));
  let saldo = deuda;
  let abonado = 0;
  let cantidadPagos = 0;

  while (saldo > 0) {
    let pago = parseInt(prompt("Saldo pendiente: " + saldo + ". Valor del pago:"));

    if (pago <= 0 || pago > saldo) {
      alert("Pago no válido, intente de nuevo");
    } else {
      abonado = abonado + pago;
      saldo = saldo - pago;
      cantidadPagos = cantidadPagos + 1;
    }
  }

  alert("Cliente: " + nombre);
  alert("Total abonado: " + abonado);
  alert("Pagos realizados: " + cantidadPagos);
  alert("Saldo pendiente: " + saldo);
}