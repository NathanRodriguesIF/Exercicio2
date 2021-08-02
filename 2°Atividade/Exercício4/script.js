//Entrada
function calcular() {
    var a = document.getElementById('txtn1')
    var b = document.getElementById('txtn2')
    var c = document.getElementById('txtn3')
    var res = document.getElementById('res')
    //Processamento
    var n1 = Number(a.value)
    var n2 = Number(b.value)
    var n3 = Number(c.value)
    var soma = n1 + n2
    var desconto = n3/100 * (soma)
    var valor = (soma) - desconto
    //Saída
    res.innerHTML = `A soma de ${n1} + ${n2} = ${soma} com um desconto de ${n3}% é igual a ${valor} reais totais`
}