$('[data-group]').each(function(){
  var $allTarget = $(this).find('[data-target]'), // [] - seleciona todos os data-target's
      $allClick = $(this).find('[data-click]'),
      activeClass = 'active'

      $allTarget.first().addClass(activeClass)
      $allClick.first().addClass(activeClass)

      $allClick.click(function(e) {
        e.preventDefault();

        var id = $(this).data('click'), // pega o valor dentro do data-click
            $target = $('[data-target="' + id + '"]') // data-target = fox [exemplo]

        $allClick.removeClass(activeClass);
        $allTarget.removeClass(activeClass);

        $target.addClass(activeClass);
        $(this).addClass(activeClass);
      });
});

$('.menu-nav a[href^="#"]').click(function(e){ // ^="#" esse "alguma coisa^="algo" significa que vai selecionar todos os algos de alguma coisa que tiverem nesse trecho especificamente"
  e.preventDefault();
  var id = $(this).attr('href'), // pega o atributo href [#fox - igual ao id nesse caso]
      menuHeight = $('.menu').innerHeight(),
      targetOffset = $(id).offset().top; // objeto que retorna a distância de top e left
  
  $('html, body').animate({
    scrollTop: targetOffset - menuHeight
  }, 500);

});

$('.logo').click(function(e){
  e.preventDefault();
  $('html, body').animate({
    scrollTop: 0
  }, 500)
})

$('section').each(function(){
  var height = $(this).height(),
      offsetTop = $(this).offset().top, // objeto que retorna a distância top e left, mas selecionamos top
      menuHeight = $('.menu').innerHeight(), // innerHeight inclui os paddings
      id = $(this).attr('id'), // pegando o valor do id
      $itemMenu = $('a[href="#' + id + '"]'); // #animais, não é animais direto lá no html, por isso colocamos o #

  $(window).scroll(function(){ // verificando a distância do scroll até o topo, da barra
    var scrollTop = $(window).scrollTop();
    if(offsetTop - menuHeight < scrollTop && offsetTop + height - menuHeight > scrollTop) {
      $itemMenu.addClass('active');
    } else {
      $itemMenu.removeClass('active')
    }
  });
});