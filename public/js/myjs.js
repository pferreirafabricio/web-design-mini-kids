//Ativar a tooltip 
$(function(){
    $('[data-toggle="tooltip"]').tooltip();
});

//================ Botão de voltar ao topo ================

$(document).ready(function(){
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50)
        {
            $('#btnVoltarTopo').fadeIn();
        }
        else
        {
            $('#btnVoltarTopo').fadeOut();
        }
    });

    $('#btnVoltarTopo').click(function() {
        $('html, body').animate({
            scrollTop: 0},
            100);
            return false;
    });
});
//Fim do botão de voltar ao topo

$('#modalContato').on('show.bs.modal', function(event){
    var botao = $(event.relatedTarget);
    var destinatario = botao.data('nome');
    var modal = $(this);

    modal.find('.modal-title').text('Mensagem para ' + destinatario);

});




