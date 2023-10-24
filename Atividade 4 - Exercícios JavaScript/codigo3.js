function calcularCusto() {
    var funcionarios = parseInt(document.getElementById("funcionarios").value);
    var diasUteis = parseInt(document.getElementById("dias-uteis").value);

    var valorPorPessoaPorDia;

    if (funcionarios >= 1 && funcionarios <= 49) {
        valorPorPessoaPorDia = 4.50;
    } else if (funcionarios >= 50 && funcionarios <= 99) {
        valorPorPessoaPorDia = 4.10;
    } else if (funcionarios >= 100 && funcionarios <= 149) {
        valorPorPessoaPorDia = 3.80;
    } else if (funcionarios >= 150) {
        valorPorPessoaPorDia = 3.60;
    } else {
        // Se a quantidade de funcionários não se encaixa em nenhuma das faixas
        document.getElementById("res").textContent = "Quantidade inválida de funcionários.";
        return;
    }

    var custoMensal = funcionarios * valorPorPessoaPorDia * diasUteis;

    document.getElementById("res").textContent = "Custo Mensal: R$ " + custoMensal.toFixed(2);
}
