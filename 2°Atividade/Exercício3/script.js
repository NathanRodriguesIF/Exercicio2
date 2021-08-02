function calcular() {
    var a = document.getElementById('txtn1')
    var b = document.getElementById('txtn2')
    var res = document.getElementById('res')
    var n1 = Number(a.value)
    var n2 = Number(b.value)
    var valor = (n1 * n2) / 2
    res.innerHTML = `A área do triângulo é igual a ${valor}`
}