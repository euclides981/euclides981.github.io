// Deslizar ao clicar em links

$('#navbar a, #texto a').click(function (e){
    
    e.preventDefault();

    var id = $(this).attr('href')

    var targetOffset = $(id).offset().top
    
    var alturaNav = $('#navbar').innerHeight()

    $('html, body').animate(
        {
            scrollTop: targetOffset - alturaNav + 1

        },
        800
    );
});

// Opacidade na barra de navegação

window.addEventListener("scroll", function  () {
    if (window.scrollY > 50) {
        document.querySelector("#navbar").style.opacity = 0.9;
    } else {
        document.querySelector("#navbar").style.opacity = 1;
    }
})