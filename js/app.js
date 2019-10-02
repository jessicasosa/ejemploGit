$(document).ready(function (){
  /* //EJEMPLO UNO
  //jquery
  $('h1').html('por elemento');
  $('.display-4').html('nombre de la clase');
  $('#idh1').html('por id');

  //JS
  document.querySelector('h1').innerHTML='por elemento';
  document.querySelector('.display-4').innerHTML='nombre de la clase';
  document.querySelector('#idh1').innerHTML='por id';

  //jquery
  $('container h1').html('selecciona todos los elementos h1');
  $('container h1:First').html('selecciona el primer elementos h1');
  $('container h1:last').html('selecciona el ultimo elementos h1');

  //Jquery
  $('#idh1').addClass('text-danger');
  $('#idh1').removeClass('display-4');
  $('#contenido').append('<h1>Agrega mas elementos dentro del div al final</h1>');
  $('#contenido').prepend('<h1>Agrega mas elementos dentro del div al inicio</h1>');

  $('#idh2').css('color','blue');
  $('#idh1').css({color:'green', background:'yellow',padding: '20px'});

  //$('#idh2').remove();
  //$('#idh2').hide();

  $('img').attr('src','image/jQuery.png');
  $('img:last').attr('width','50');
  */

   //EJEMPLO 2
  var parrafo = $('#resultado p');
  $('.btn-primary').click(function(){
    parrafo.addClass('display-4');
  })
  $('.btn-danger').click(function(){
    parrafo.removeClass('display-4');
  })
  $('.btn-warning').click(function(){
    parrafo.toggleClass('display-4');
  })

  $('#lbl-text').keyup(function(){
    $('#resultado2').html($('#lbl-text').val());
    if($('#lbl-text').val() === ""){$('#resultado2').html("Estoy esperando...");}
  })
  $('#lbl-text').keyup(function(){
    $('#casa').html($('#lbl-text').val());
    $('#casa2').html($('#lbl-text').val());
    if($('#lbl-text').val() === ""){$('#casa').html("Estoy esperando2...");}
    if($('#lbl-text').val() === ""){$('#casa2').html("Estoy esperando3...");}
  })
  

  /*EJEMPLO 3
  $('#formulario').submit(function(evento){
    evento.preventDefault();
    var nombre = $("#lbl-nombre").val();
    console.log(nombre);
  })
  */

  /*  //EJEMPLO 4
  var resultado = $('#resultado');
  $('.btn-primary').click(function(){
    //resultado.hide(1000);
    resultado.fadeOut(1000);
  })
  $('.btn-danger').click(function(){
    //resultado.show(1000);
    resultado.fadeIn(1000);
  })
  $('.btn-warning').click(function(){
    resultado.toggle(1000);
  })
  */

  /*  //EJEMPLO 5 
  var resultado = $('#res');
  $('.btn-primary').click(function(){
    resultado.animate({
      left: '250px',
      opacity: '0.5',
      height: '150px',
      width:'150px'
    },'1500',function(){
      resultado.animate({
        left: '-250px',
        opacity: '1',
        height: '-150px',
        width:'-150px'
      },'3000')
    });
  })*/


});
