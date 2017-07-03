$(function () {
    $('.down').hover(function () {
        $(this).css('background', '#AB1F00').find(' > a').css('color', '#FFFFFF');
        $(this).find('ul').css('background', '#AB1F00').stop().slideDown()
    }, function () {
        $(this).find('ul').stop().slideUp();
        $(this).css('background', '#FFFFFF').find(' > a').css('color', '#333333')
    });
    $('.con_bg li').each(function () {
        $(this).css('background', 'url("' + $(this).attr('data-src') + '") center no-repeat')
    });
    var i = 0, t = setInterval(function () {
        i++;
        i = (i === 3) ? 0 : i;
        $('.con_bg li').eq(i).fadeIn(1000).siblings('li').fadeOut(1000)
    }, 5000);
    $('.box_c ol li').mouseenter(function () {
        var c = $(this).index();
        $('.box_c ul li').eq(c).stop().show().siblings('li').stop().hide();
        $(this).css('background', '#FFFFFF').siblings('li').css('background', '#7B8189')
    })
});