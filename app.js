function calcularIMC() {
    let peso = parseFloat(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);
    
    if (isNaN(peso) || peso <= 0 || isNaN(altura) || altura <= 0) {
        alert('Ingrese valores válidos para peso y altura.');
        return;
    }
    
    let imc = peso / (altura * altura);
    document.getElementById('resultado').textContent = `IMC: ${imc.toFixed(2)}`;
    
    let interpretacion = '';
    if (imc < 18.5) {
        interpretacion = 'Bajo peso';
    } else if (imc < 25) {
        interpretacion = 'Peso normal';
    } else if (imc < 30) {
        interpretacion = 'Sobrepeso';
    } else {
        interpretacion = 'Obesidad';
    }
    
    document.getElementById('interpretacion').textContent = `Interpretación: ${interpretacion}`;
}