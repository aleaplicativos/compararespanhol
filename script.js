function convertirUnidadAMayor(cantidad, unidad) {
    switch (unidade) {
        case 'unidad':
            return cantidad; // Mantiene en unidades
        case 'ml':
            return cantidad / 1000; // Convierte mililitros a litros
        case 'litros':
            return cantidad; // Mantiene en litros
        case 'gramas':
            return cantidad / 1000; // Convierte gramos a kilogramos
        case 'quilos':
            return cantidad; // Mantiene en kilogramos
        case 'centimetros':
            return cantidad / 100; // Convierte centímetros a metros
        case 'metros':
            return cantidad; // Mantiene en metros
        default:
            return 0; // Caso inválido
    }
  }
  
  function obtenerUnidadMayor(unidad) {
    switch (unidade) {
        case 'unidad':
            return 'unidad';
        case 'ml':
        case 'litros':
            return 'litros';
        case 'gramas':
        case 'quilos':
            return 'kilogramos';
        case 'centimetros':
        case 'metros':
            return 'metros';
        default:
            return '';
    }
  }
  
  function calcularCostoPorUnidad(precio, cantidad) {
    if (cantidad === 0) {
        return 0;
    }
    return precio / cantidad;
  }
  
  function actualizarUnidades(id) {
    const unidad1 = document.getElementById('unidad1').value;
    const unidad2 = document.getElementById('unidad2').value;
    
    if (id === 'unidad1' && unidad1 === 'unidad') {
        document.getElementById('unidad2').value = 'unidad';
        document.getElementById('unidad2').disabled = true;
    } else if (id === 'unidad2' && unidad2 === 'unidad') {
        document.getElementById('unidad1').value = 'unidad';
        document.getElementById('unidad1').disabled = true;
    } else {
        document.getElementById('unidad1').disabled = false;
        document.getElementById('unidad2').disabled = false;
    }
  }
  
  function compararPrecios() {
    let cantidad1 = parseFloat(document.getElementById('cantidad1').value);
    let unidad1 = document.getElementById('unidad1').value;
    let precio1 = parseFloat(document.getElementById('precio1').value);
    
    let cantidad2 = parseFloat(document.getElementById('cantidad2').value);
    let unidad2 = document.getElementById('unidad2').value;
    let precio2 = parseFloat(document.getElementById('precio2').value);
    
    if (isNaN(cantidad1) || isNaN(precio1) || isNaN(cantidad2) || isNaN(precio2)) {
        document.getElementById('mensaje').innerText = "Por favor, ingrese los datos obligatorios.";
        return;
    }
    
    if (unidad1 === '' || unidad2 === '') {
        document.getElementById('mensaje').innerText = "Por favor, elija el tipo de medida para ambos productos.";
        return;
    }
    
    if (unidad1 === 'unidad') {
        document.getElementById('unidad2').value = 'unidad';
        document.getElementById('unidad2').disabled = true;
    }
    
    let unidadMayor1 = obtenerUnidadMayor(unidad1);
    let unidadMayor2 = obtenerUnidadMayor(unidad2);
  
    let cantidadConvertida1 = convertirUnidadAMayor(cantidad1, unidad1);
    let cantidadConvertida2 = convertirUnidadAMayor(cantidad2, unidad2);
    
    let costoPorUnidad1 = calcularCostoPorUnidad(precio1, cantidadConvertida1);
    let costoPorUnidad2 = calcularCostoPorUnidad(precio2, cantidadConvertida2);
    
    let producto1 = document.getElementById('producto1');
    let producto2 = document.getElementById('producto2');
    
    document.getElementById('costo1').innerText = `Costo por ${unidadMayor1}: $${costoPorUnidad1.toFixed(2)}`;
    document.getElementById('costo2').innerText = `Costo por ${unidadMayor2}: $${costoPorUnidad2.toFixed(2)}`;
    
    if (costoPorUnidad1 < costoPorUnidad2) {
        producto1.classList.add('verde');
        producto1.classList.remove('rojo');
        producto2.classList.add('rojo');
        producto2.classList.remove('verde');
        document.getElementById('costo1').innerText += " - ¡Este es el más ventajoso!🤑";
    } else {
        producto1.classList.add('rojo');
        producto1.classList.remove('verde');
        producto2.classList.add('verde');
        producto2.classList.remove('rojo');
        document.getElementById('costo2').innerText += " - ¡Este es el más ventajoso!🤑";
    }
    
    document.getElementById('mensaje').innerText = "";
  }
  
  function limpiarCampos() {
    document.getElementById('cantidad1').value = '';
    document.getElementById('unidad1').value = '';
    document.getElementById('precio1').value = '';
    document.getElementById('cantidad2').value = '';
    document.getElementById('unidad2').value = '';
    document.getElementById('precio2').value = '';
    document.getElementById('costo1').innerText = '';
    document.getElementById('costo2').innerText = '';
    document.getElementById('mensaje').innerText = '';
    
    let producto1 = document.getElementById('producto1');
    let producto2 = document.getElementById('producto2');
    
    producto1.classList.remove('verde', 'rojo');
    producto2.classList.remove('verde', 'rojo');
  
    document.getElementById('unidad1').disabled = false;
    document.getElementById('unidad2').disabled = false;
  }
  