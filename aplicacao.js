function verificar() {
    var fnome = document.getElementById('txtname');
    var faltura = document.getElementById('txtaltura');
    var fpeso = document.getElementById('txtpeso');
    var res = document.querySelector('div#res');
    
    var alturaEmMetros = parseFloat(faltura.value) / 100; 
    var peso = parseFloat(fpeso.value);

    var imc = peso / (alturaEmMetros * alturaEmMetros);

    var classificacao = ('Classificação não disponível');

    if (imc < 16) {
        classificacao = 'Baixo peso, muito grave';
    } else if (imc >= 16 && imc <= 16.99) {
        classificacao = 'Baixo peso grave';
    } else if (imc >= 17 && imc <= 18.49) {
        classificacao = 'Baixo peso';
    } else if (imc >= 18,50 && imc <= 24,99) {
        classificacao = 'Peso normal';
    } else if (imc >= 25 && imc <= 29.99) {
        classificacao = 'Sobrepeso';
    } else if (imc >= 30 && imc <= 4.99) {
        classificacao = 'Obesidade grau I';
    } else if (imc >= 35 && imc <= 39.99) {
        classificacao = 'Obesidade grau II';
    } else if (imc >= 40) {
        classificacao = 'Obesidade grau III';
    }

    res.style.textAlign = 'center';
    res.innerHTML = `${fnome.value} possui um IMC igual a ${imc.toFixed(2)}, sendo classificado como: ${classificacao}`;  
}
