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

$('.menu-nav a[href^="#"]').click(function(e){ // ^="#" esse "alguma coisa^="algo" significa que vai selecionar todos os algo de alguma coisa que tiverem nesse trecho especificamente"
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