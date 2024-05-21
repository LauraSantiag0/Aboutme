$(document).ready(function()
{
    var botao = $('.bt1');//Classe do a que vai ser clicado
    var dropDown = $('.ul-c');//calsse do submenu que vai abrir
    botao.on('click', function(event)
    {
        dropDown.stop(true,true).slideToggle();
        event.stopPropagation();
    });
});


$(document).ready(function()
{
    var botao = $('.bt2');//Classe do a que vai ser clicado
    var dropDown = $('.ul-t');//calsse do submenu que vai abrir
    botao.on('click', function(event)
    {
        dropDown.stop(true,true).slideToggle();
        event.stopPropagation();
    });
});

$(document).ready(function()
{
    var botao = $('.bt3');//Classe do a que vai ser clicado
    var dropDown = $('.ul-a');//calsse do submenu que vai abrir
    botao.on('click', function(event)
    {
        dropDown.stop(true,true).slideToggle();
        event.stopPropagation();
    });
});

$(document).ready(function()
{
    var botao = $('.bt4');//Classe do a que vai ser clicado
    var dropDown = $('.ul-cont');//calsse do submenu que vai abrir
    botao.on('click', function(event)
    {
        dropDown.stop(true,true).slideToggle();
        event.stopPropagation();
    });
});