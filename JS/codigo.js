var tipoSeguroElement = document.querySelector('#tipoSeguro');
tipoSeguroElement.addEventListener('change', function() {
    var tipoSeguro = tipoSeguroElement.value;
    var precio;

    switch (tipoSeguro) {
        case 'basico':
            precio = 500;
            break;
        case 'intermedio':
            precio = 1000;
            break;
        case 'premium':
            precio = 1500;
            break;
        default:
            precio = 0;
            break;
    }

    var precioSeguroElement = document.getElementById('precioSeguro');
    if (precio > 0) {
        precioSeguroElement.textContent = 'Precio del Seguro: $' + precio;
    } else {
        precioSeguroElement.textContent = 'Debe ingresar una opción válida'; 
    }
});
