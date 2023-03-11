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
























































/* var classActive = 'active'

$('.animais .tab-menu a').first().addClass(classActive);
$('.animais .item').first().addClass(classActive);

$(document).ready(function() {
  $('.animais .tab-menu a').click(function(e){
    e.preventDefault();
    var itemId = $(this).attr('href');
    
    $('.animais .tab-menu a, .animais .item').removeClass(classActive); 
    $(this).addClass(classActive);
    $(itemId).addClass(classActive);
  });
  
  $('.florestas .tab-menu a').first().addClass(classActive);
  $('.florestas .item').first().addClass(classActive);
  
  $('.florestas .tab-menu a').click(function(e){
    e.preventDefault();
    var itemId = $(this).attr('href');
    
    $('.florestas .tab-menu a, .florestas .item').removeClass(classActive); 
    $(this).addClass(classActive);
    $(itemId).addClass(classActive);
  });
}); */



// e.preventDefault() - previne/evita o pulo para a div quando é clicado no botão.

// var itemId = $(this).attr('href') - pego o valor do href desse elemento e armazeno com a var.

// $('.tab-menu a').removeClass('active') - remove a classe de qualquer a que tiver o active.

// $(this).addClass('active') - // adicionará a classe 'active' para qualquer 'a' do elemento de classe 'tab-menu' que seja clicado, e linkado a isso temos o 'ul li a.active' no css para estilizar caso o usuário clique [adiciona rapidamente, fica nesse loop, por isso só fica selecionado o que você clicar].

// $(itemId).addClass('active') - como o href de fox é #fox, quando pego o valor de href, é o mesmo que eu pegar o elemento de id='fox', então atribuo a esse elemento a classe active.