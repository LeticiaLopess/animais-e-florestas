var bg = $('button').data('bg');
  if(bg == 'primary') {
    $('button').css({
      'background': 'blue'
    })
  } else if(bg == 'secondary') {
    $('button').css({
      'background': 'green'
    })
  }
