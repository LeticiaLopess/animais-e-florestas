// Debounce do Lodash, vai evitar que quando rolemos a tela, a função de scroll seja ativada muitas vezes, o que exige muito e deixa pesado [para .scroll e .resize]
debounce = function(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

// Mudar tab ao clique
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

// Scroll suave para link interno
$('.menu-nav a[href^="#"]').click(function(e){ // ^="#" esse "alguma coisa^="algo" significa que vai selecionar todos os algos de alguma coisa que tiverem nesse trecho especificamente"
  e.preventDefault();
  var id = $(this).attr('href'), // pega o atributo href [#fox - igual ao id nesse caso]
      menuHeight = $('.menu').innerHeight(),
      targetOffset = $(id).offset().top; // objeto que retorna a distância de top e left
  
  $('html, body').animate({
    scrollTop: targetOffset - menuHeight
  }, 500);

});

// Scroll suave para o topo
$('.logo').click(function(e){
  e.preventDefault();
  $('html, body').animate({
    scrollTop: 0
  }, 500)
})

// Mudar para active o menu de acordo com a área
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

// Botão do menu mobile
$('.mobile-btn').click(function(){
  $(this).toggleClass('active');
  $('.mobile-menu').toggleClass('active');
});

// Slider
(function(){
function slider(sliderName, velocidade) {
  var sliderClass = '.' + sliderName,
      activeClass = 'active';
      rotate = setInterval(rotateSlide, velocidade);

  $(sliderClass + ' > :first').addClass(activeClass)

  $(sliderClass).hover(function(){
    clearInterval(rotate);
  }, function(){
    rotate = setInterval(rotateSlide, velocidade);
  });

  function rotateSlide() {
    var activeSlide = $(sliderClass + ' > .' + activeClass),
        nextSlide = activeSlide.next();
  
        if(nextSlide.length == 0) {
          nextSlide = $(sliderClass + ' > :first');
        }
        activeSlide.removeClass(activeClass);
        nextSlide.addClass(activeClass);
  }
}

slider('introducao', 2000) // classe e velocidade
})();

// Animação ao Scroll
(function(){
  var $target = $('[data-anime="scroll"]'),
      animationClass = 'animate',
      offset = $(window).height() * 3/4; // após 3/4 da tela que adicionará a classe, então não fica com muito espaço em branco antes de animar

  function animeScroll() {
    var documentTop = $(document).scrollTop();

    $target.each(function(){
      var itemTop = $(this).offset().top;
      if (documentTop > itemTop - offset) {
        $(this).addClass(animationClass);
      } else {
        $(this).removeClass(animationClass)
      }
    });
  }

  animeScroll();

  $(document).scroll(debounce(function(){ // o evento scroll ativa 
    animeScroll()
  }, 200));
})();