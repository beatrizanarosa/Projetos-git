// Função para calcular o aumento salarial
function calcular_aumento() {
    var salario = parseFloat(document.getElementById("salario").value);


    var aumento;
    if (salario <= 1200.00) {
        aumento = salario * 0.16;
    } else if (salario <= 2100.00) {
        aumento = salario * 0.13;
    } else if (salario <= 3000.00) {
        aumento = salario * 0.10;
    } else {
        aumento = salario * 0.05;
    }

    var novoSalario = salario + aumento;

    document.getElementById("res").textContent = "Novo salário: R$ " + novoSalario.toFixed(2);
}

document.querySelector("button").addEventListener("click", calcular_aumento);
