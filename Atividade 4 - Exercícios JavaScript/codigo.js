var info1 = document.getElementById("info1")
var info2 = document.getElementById("info2")
var info3 = document.getElementById("info3")
var res = document.getElementById("res")
var salario = document.getElementById("salario")


function calcular (){
var valorHora = Number(info1.value) / 200;
var valorHorasNormais = valorHora * Number(info2.value);
var valorHorasFinaisSemana = (valorHora * 1.5) * Number(info3.value);
var valorTotal = valorHorasNormais + valorHorasFinaisSemana;
res.innerHTML = `<p>R$ ${valorTotal.toFixed(2)}</p>`
}

