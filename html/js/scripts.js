const menuButton = document.querySelector('.menu__button');
      const menuList = document.querySelector('.menu__list');

      menuButton.addEventListener('click', () => {
        let expanded = menuButton.getAttribute('aria-expanded') === 'true';
        menuButton.setAttribute('aria-expanded', !expanded);
        menuButton.classList.toggle('menu__button--open');
        menuList.classList.toggle('menu__list--open');
      });

$('.img-parallax').each(function(){
  var img = $(this);
  var imgParent = $(this).parent();
  function parallaxImg () {
    var speed = img.data('speed');
    var imgY = imgParent.offset().top;
    var winY = $(this).scrollTop();
    var winH = $(this).height();
    var parentH = imgParent.innerHeight();


    // The next pixel to show on screen      
    var winBottom = winY + winH;

    // If block is shown on screen
    if (winBottom > imgY && winY < imgY + parentH) {
      // Number of pixels shown after block appear
      var imgBottom = ((winBottom - imgY) * speed);
      // Max number of pixels until block disappear
      var imgTop = winH + parentH;
      // Porcentage between start showing until disappearing
      var imgPercent = ((imgBottom / imgTop) * 100) + (50 - (speed * 50));
    }
    img.css({
      top: imgPercent + '%',
      transform: 'translate(-50%, -' + imgPercent + '%)'
    });
  }
  $(document).on({
    scroll: function () {
      parallaxImg();
    }, ready: function () {
      parallaxImg();
    }
  });
});

$('.modal_link01').on ('click', function(e) {
    e.preventDefault();
    const {top, left} = $(e.target).offset();
    const endLeft = left + $(e.target).width()
    $(modal01).css({
      top: (top - 100),
      left: ((endLeft - 300) > 20 ? (endLeft - 300) : 20 ),
    });
    $('#audiofile').attr('src', 'audio/' + $(this).attr('file'));
    $("#audio01").trigger('load');
    $(modal01).show();
    $("#modal01").draggable();
    $("#audio01").trigger('play');
    return false;
  })

$('#modal-close_01').on ('click', function (e) {
  e.preventDefault();
  $("#audio01").trigger('pause');
  $("#modal01").css({display: "none"});
  $("#modal01").offset({top:0,left:0});
})

$('.picmodal_link01').on('click', function(e) {
  e.preventDefault();
  $('#modal-pic').attr('src', 'img/' + $(this).attr('image'));
  $('#modal-image-text').text($(this).attr('image-text'));
  const {top, left} = $(e.target).offset();
  const endLeft = left + $(e.target).width()
  $('#picmodal').css({
    top: (top - 100),
    left: ((endLeft - 300) > 20 ? (endLeft - 300) : 20 ),
  });
  $(picmodal).show();
  $("#picmodal").draggable();
  return false;
})

$('#modal-close').on ('click', function (e) {
  e.preventDefault();
  $("#picmodal").css({display: "none"});
  $("#picmodal").offset({top:0,left:0});
})
