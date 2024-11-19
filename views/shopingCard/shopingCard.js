let quantidade1 = 1
let quantidade2 = 3
let zero = '0'
let produto1 = document.getElementById('produto1')
let produto2 = document.getElementById('produto2')
produto1.innerHTML = zero + quantidade1
produto2.innerHTML = zero + quantidade2

const diminuir1 = () => {
    produto1.innerHTML = zero + (quantidade1--)
    if(quantidade1 <= 0) {
        quantidade1 = 0
    } else if(quantidade1 < 10) {
        zero = '0'
    }
}
const somar1 = () => {
    produto1.innerHTML = zero + (quantidade1++)
    if(quantidade1 >= 10) {
        zero = ''
    }
}

const diminuir2 = () => {
    produto2.innerHTML = zero + (quantidade2--)
    if(quantidade2 <= 0) {
        quantidade2 = 0
    } else if(quantidade2 < 10) {
        zero = '0'
    }
}
const somar2 = () => {
    produto2.innerHTML = zero + (quantidade2++)
    if(quantidade2 >= 10) {
        zero = ''
    }
}

