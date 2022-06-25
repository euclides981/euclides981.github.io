// Deslizar ao clicar em links

$('.logo a, .links a, #texto a').click(function (e){
    
    e.preventDefault();

    var id = $(this).attr('href')

    var targetOffset = $(id).offset().top
    
    var alturaNav = $('.nav').innerHeight()

    $('html, body').animate(
        {
            scrollTop: targetOffset - alturaNav + 1

        },
        800
    );
});



// Carrossel
const imgs = document.getElementById('img')
let i = 0

function carrossel() {
    i ++
    if(i > 7 ) {
        i = 0
    }
    imgs.style.transform = `translateX(${-i * 330}px)`}
setInterval(carrossel,3000)


/* // Opacidade na barra de navegação

window.addEventListener("scroll", function  () {
    if (window.scrollY > 50) {
        document.querySelector("#navbar").style.opacity = 0.9;
    } else {
        document.querySelector("#navbar").style.opacity = 1;
    }
}) */

document.getElementById('curriculum').style.display = 'none'
var bt_cv = document.getElementById('bt_cv')
var bt_cv_fecha = document.getElementById('curriculum__fecha')

bt_cv.addEventListener('click', ()=>{
    document.getElementById('curriculum').style.display = 'flex'
})
bt_cv_fecha.addEventListener('click', ()=>{
    document.getElementById('curriculum').style.display = 'none'
})
