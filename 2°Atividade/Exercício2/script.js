//Entrada
function calcular() {
    var a = document.getElementById('txtn1')
    var b = document.getElementById('txtn2')
    var res = document.getElementById('res')
    //Processamento
    var n1 = Number.parseInt(a.value)
    var n2 = Number.parseInt(b.value)
    var valor = (n1 + n2) / 2
    //Saída
    res.innerHTML = `A média aritmética é ${valor}`
}