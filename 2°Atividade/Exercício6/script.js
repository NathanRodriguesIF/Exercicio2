function calcular() {
    var a = document.getElementById('txtn1')
    var b = document.getElementById('txtn2')
    var c = document.getElementById('txtn3')
    var d = document.getElementById('txtn4')
    var res = document.getElementById('res')
    var n1 = Number(a.value)
    var n2 = Number(b.value)
    var n3 = Number(c.value)
    var n4 = Number(d.value)
    var p1 = n2/100 * n1
    var p2 = n3/100 * n1
    var p3 = n4/100 * n1
    res.innerHTML = `O percentual de votos brancos é de ${p1}%</br>`
    res.innerHTML += `O percentual de votos brancos é de ${p2}%</br>`
    res.innerHTML += `O percentual de votos brancos é de ${p3}%</br>`
}