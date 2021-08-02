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
    var valor = n1 + n2 + n3
    //Saída
    res.innerHTML = `A soma é ${valor}`
}