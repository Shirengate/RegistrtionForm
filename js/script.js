$('.slider > div:first').hover(function () {
    // $('.slider > div').fadeOut()
    $('.slider').css({
        'transform':'scaleX(1.5) translate(-5.5px)'
    })
    
}, function () {
    // $('.slider > div').fadeIn()
    $('.slider').css({
        'transform':'scaleX(1) translate(0)'
    })
}
);
$('.register').hide();
$('.slider > div:first').click(function (e) { 
    $('.categories').slideToggle(200)
    $('.wrapper').toggleClass('hello')
    if($('.wrapper').hasClass('hello')){
        $('.slider > div:first').unbind('mouseenter mouseleave');
        $('.slider').css({
            'transform':'scaleX(1) translate(0)'
        })
        $('.login').css({
            'width':'5%',
            'background-color':'var(--formTextColor)'
        })
        $('.slider').css({
            'width':'95%',
            "display":"block"
        })
        $('.slider > div:first').css({
            'justify-content': 'space-beetwen',
            'align-items':'center',
            'width':'50px'
        })   
        $('.stick').css('border','2px solid white')
        $('.stick:first').css({
            'transform':'rotate(40deg) translateY(-13px)'
        })   
        $('.stick:nth-child(2)').css({
            'transform':'rotate(-40deg) translateY(-13px) '
        }) 
        $('.register').show(400);
        $('.wrapper').animate({
            'height' : '+=110px'
        })
    }else{
        $('.slider > div:first').hover(function () {
            // $('.slider > div').fadeOut()
            $('.slider').css({
                'transform':'scaleX(1.5) translate(-5.5px)'
            })
            
        }, function () {
            // $('.slider > div').fadeIn()
            $('.slider').css({
                'transform':'scaleX(1) translate(0)'
            })
        }
        );
        $('.login').css({
            'width':'95%',
            "background-color":'var(--white)',
        })
        $('.slider').css({
            'width':'5%'
        })
        // $('.slider > div').html('<span class="stick"></span><span class="stick"></span>')
        $('.slider > div:first').css({
            'justify-content': 'space-evenly',
            'margin-top': '40px',
            'align-items':'start',
            'width':'100%'
        }) 
        $('.stick').css('border-color','rgba(200, 200, 200, 0.5)')  
        $('.stick:first').css({
            'transform':'rotate(0) translateY(0)'
        })   
        $('.stick:nth-child(2').css({
            'transform':'rotate(0) translateY(0)'
        })  
        $('.register').hide(300);
        $('.wrapper').animate({
            'height' : '-=110px'
        })

    }    
});
$('.categories').hide();

