$(document).ready(function(){
    // Inicialize o carrossel na galeria
    $('.galeria').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false, // Defina para 'true' se desejar autoplay
        responsive: [
            {
                breakpoint: 768, // Seu ponto de interrupção de tela
                settings: {
                    slidesToShow: 2, // Quantidade de imagens exibidas em telas menores
                }
            }
        ]
    });

    // Abrir o modal com a imagem expandida
    $('.galeria img').on('click', function(){
        var imgIndex = $(this).parent().index();
        $('.modal-content div').hide();
        $('.modal-content div:eq(' + imgIndex + ')').show();
        $('#imageModal').fadeIn();
    });

    // Fechar o modal ao clicar no botão de fechar ou fora da imagem
    $('#closeModal, .modal').on('click', function(){
        $('#imageModal').fadeOut();
    });

    // Impedir que o modal seja fechado ao clicar na imagem expandida
    $('.modal-content div').on('click', function(event){
        event.stopPropagation();
    });
});
