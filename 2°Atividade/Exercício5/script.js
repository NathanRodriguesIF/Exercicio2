function calcular() {
    var a = document.getElementById('txtn1')
    var b = document.getElementById('txtn2')
    var res = document.getElementById('res')
    var n1 = Number(a.value)
    var n2 = Number(b.value)
    var percentual = n2/100 * (n1)
    var valor = (n1) + percentual
    res.innerHTML = `O salário atual de R$${n1} + ${n2}% = R$${valor}`
}