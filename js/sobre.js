var afinco = document.getElementById('afinco')
var dedicacao = document.getElementById('dedicacao')
var etica = document.getElementById('etica')
var foco = document.getElementById('foco')
var respeito = document.getElementById('respeito')
var desc = document.querySelector('.desc')
var descHobbies = document.querySelector('.descHobbies')
var bike = document.getElementById('bike')
var estudar = document.getElementById('estudar')
var filosofia = document.getElementById('filosofia')
var espiritualidade = document.getElementById('espiritualidade')
var btMais = document.getElementById('bt_mais_sobre')
var teste = document.getElementById('mais')

afinco.addEventListener('click', () => {
    desc.innerHTML = 'Afinco: Obstinação, ação de fixar uma ideia no pensamento para alcançá-la.'
    mudaAnimacao()
})
dedicacao.addEventListener('click', () => {
    desc.innerHTML = 'Dedicação: Estado ou comportamento da pessoa que se dedica a algo.'
    mudaAnimacao()
})
etica.addEventListener('click', () => {
    desc.innerHTML = 'Ética: Admitir minha responsabilidade em tudo.'
    mudaAnimacao()
})
foco.addEventListener('click', () => {
    desc.innerHTML = 'Foco: Fixar em uma ideia e ter a capacidade de concluí-la.'
    mudaAnimacao()
})
respeito.addEventListener('click', () => {
    desc.innerHTML = 'Respeito: Capacidade de ter empatia com o próximo'
    mudaAnimacao()
})

function mudaAnimacao() {

    if ($(".desc").hasClass('aumenta')) {
        desc.classList.remove('aumenta')
        desc.classList.add('desliza')
    }
    else {
        desc.classList.remove('desliza')
        desc.classList.add('aumenta')
    }
}
bike.addEventListener('click', () => {
    descHobbies.innerHTML = 'Ciclismo'
    mudaAnimacaoHobbies()
})
estudar.addEventListener('click', () => {
    descHobbies.innerHTML = 'Aprender'
    mudaAnimacaoHobbies()
})
filosofia.addEventListener('click', () => {
    descHobbies.innerHTML = 'Filosofia'
    mudaAnimacaoHobbies()
})
espiritualidade.addEventListener('click', () => {
    descHobbies.innerHTML = 'Espiritualidade'
    mudaAnimacaoHobbies()
})

function mudaAnimacaoHobbies() {

    if ($(".descHobbies").hasClass('giraDireita')) {
        descHobbies.classList.remove('giraDireita')
        descHobbies.classList.add('giraEsquerda')
    }
    else {
        descHobbies.classList.remove('giraEsquerda')
        descHobbies.classList.add('giraDireita')
    }
}

btMais.addEventListener('click', () =>{
    teste.classList.toggle('alternaTexto')
})