// animação scroll quando se clica no menu
$('span').on('click', function() {
    $("html, body").animate({
        scrollTop: $('#' +$(this).data('section')).offset().top // ir para a secção cujo o id é o valor do atributo `data-section` do item do menu onde clicamos
    }, 500);
});

// guardamos todas as distancias de cada secção até ao todo da página e respetivo id
var alturas = {};
$('.section').each(function () {
    alturas[$(this).prop('id')] = $(this).offset().top; // ex: alturas['section_2'] = 600
});

// quando fazemos scoll vamos percorrer o nosso obj alturas e comparar a altura de cada secção com o que já andamos em scroll
$(window).on('scroll', function() {
    for(var seccao in alturas) {
        if($(window).scrollTop() >= alturas[seccao]) {
            $('span').removeClass('active'); // removemos a classe ative
            $('span[data-section="' +seccao+ '"]').addClass('active'); // adicionamos a class active ao item do menu cuja data-section é igual ao id da secção que está a uma maior ou igual distancia do topo do que aquela que percorremos com o scroll
        }
    }
});