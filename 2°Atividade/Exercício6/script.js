//Entrada
function calcular() {
    var a = document.getElementById('txtn1')
    var b = document.getElementById('txtn2')
    var c = document.getElementById('txtn3')
    var d = document.getElementById('txtn4')
    var res = document.getElementById('res')
    //Processamento
    var n1 = Number(a.value)
    var n2 = Number(b.value)
    var n3 = Number(c.value)
    var n4 = Number(d.value)
    if (n2 + n3 + n4 != n1) {
        window.alert('A soma dos votos não é igual ao número de eleitores!!!')
    } else {
        var p1 = (100*n2) / n1
        var p2 = (100*n3) / n1
        var p3 = (100*n4) / n1
        //Saída
        res.innerHTML = `Os percentuais em relação ao número de ${n1} eleitores são:</br>`
        res.innerHTML += `${p1}% para os votos brancos</br>`
        res.innerHTML += `${p2}% para os votos nulos</br>`
        res.innerHTML += `${p3}% para os votos válidos</br>`
    }
}