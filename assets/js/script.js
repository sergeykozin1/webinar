jQuery(document).ready(function($) {
    $('.blocks .box').hover(function(){
        $(this).find('.hover-bg').css({
            opacity: 1
        });
        $(this).find('p').css({
            color: '#fff'
        })
        //$(this).css({border: 'none'})
        var src = $(this).find('img').attr('src');
        var href = src.substr(0,15);
        var change = $(this).find('img').attr('src', href + '_hover' + '.png' )
    }, function(){
        $(this).find('.hover-bg').css({
            opacity: 0,
        });
        //$(this).css({border: "1px solid #c9cecf"})
        $(this).find('p').css({
            color: '#000'
        });
        var src = $(this).find('img').attr('src');
        var href = src.substr(0,15);
        var change = $(this).find('img').attr('src', href + '.png' )
    });

    $('.tab-content>div:not(":first-of-type")').hide();
    $('.tab-menu li:first-of-type').find(':first').width('100%')

    $('.tab-menu li').each(function(i){
        $(this).attr('data-tab', 'tab' + i)
    });
     $('.tab-content>div').each(function(i){
        $(this).attr('data-tab', 'tab' + i)
    });
    $('.tab-menu li').on('click', function(){
        var dataTab = $(this).data('tab');
        var getWrapper = $(this).closest('.tab-wrapper');
        var line = $(this).find('.line');

        getWrapper.find('.tab-menu li').removeClass('active');
        $(this).addClass('active');

        getWrapper.find('.line').width(0);
        line.animate({'width': '100%'}, 'fast');

        getWrapper.find('.tab-content>div').hide();
        getWrapper.find('.tab-content>div[data-tab=' + dataTab + ']').fadeIn('normal');
    })

    $("a.scrollto").click(function() {
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({
          scrollTop: destination
        }, 500);
        return false;
    });

    $('.row-play-video').click(function(){
        $('#s01 .box').toggleClass('active');
        $('#s02').toggleClass('margin-top');
        $('#s01 .left_column').toggleClass('active');
        $('.videoplayer1').toggleClass('active');
        $('.videoplayer1').find('iframe').attr('src', ' ' )
        $('.videoplayer1.active').find('iframe').attr('src', 'https://www.youtube.com/embed/o4dM_xWBB6I?controls=0&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1&amp;autoplay=1' )

    });
    $('.play').hover(function(){
        $(this).addClass('active')
    });

    $('#s01').addClass('.wow.fadeIn');
    $('#s01').attr('data-wow-delay', '0.3s' );
    $('#s01').attr('data-wow-duration', '0.3s' );

});
jQuery(document).ready(function($) {
    $('.phone').val('+380').attr('minlength', '11');
        $('.phone').intlTelInput({
          initialCountry: 'UA',
          preferredCountries: ['UA', 'RU', 'BY', 'KZ']
        });
});

 window.onload = function(){
    pop = document.getElementById('popup-bg');
    if (pop != null)
        pop.onclick = function(e) {if (e.target != this) { return true; } popup(-1);}
      }
    function popup(nm) {
        popupElm = document.getElementById("popup-bg");
        if (nm == -1) {
            popupElm.classList.remove('visible');
        } else {
            elm = popupElm.getElementsByClassName('popup');
            if (typeof nm != 'undefined')
                for (var i = elm.length - 1; i >= 0; i--) {
                    if (elm[i].id == "popup" + nm) {
                        elm[i].classList.add('visible');
                        popupElm.classList.add('visible');
                    } else elm[i].classList.remove('visible');
                }
            else popupElm.classList.add('visible');
        }
    }