$(window).scroll(function() {

    var wScroll = $(this).scrollTop();

    if ( wScroll > $('.paralax-peta').offset().top - 550 ) {
        $('.paralax-peta .peta').each(function(i) {
            setTimeout(function(){
                $('.paralax-peta .peta').eq(i).addClass('show');
            },200 * (i+1));
        });
    };

    if ( wScroll > $('.paralax-button').offset().top - 550 ) {
        $('.paralax-button').each(function(i) {
            setTimeout(function(){
                $('.paralax-button').eq(i).addClass('show-button');
            },250);
        });
    };

    if ( wScroll > $('.paralax-art').offset().top - 450 ) {
        $('.paralax-art').each(function(i) {
            setTimeout(function(){
                $('.paralax-art').eq(i).addClass('show-art');
            },150);
        });
    };

    if ( wScroll > $('.paralax-tagline').offset().top - 550 ) {
        $('.paralax-tagline .paralax-tag').each(function(i) {
            setTimeout(function(){
                $('.paralax-tagline .paralax-tag').eq(i).addClass('show-tag');
            },100 );
        });
    };

    if ( wScroll > $('.paralax-image-art').offset().top - 350 ) {
        $('.paralax-image-art .image-art').each(function(i) {
            setTimeout(function(){
                $('.paralax-image-art .image-art').eq(i).addClass('show-image');
            },200  * (i+1) );
        });
    };

    if ( wScroll > $('.paralax-blog').offset().top - 250 ) {
        $('.paralax-blog .blog').each(function(i) {
            setTimeout(function(){
                $('.paralax-blog .blog').eq(i).addClass('show-blog');
            },200  * (i+1) );
        });
    };

    if ( wScroll > $('.paralax-blog-capt').offset().top - 350 ) {
        $('.paralax-blog-capt').each(function(i) {
            setTimeout(function(){
                $('.paralax-blog-capt').eq(i).addClass('show-blog-capt');
            },100 );
        });
    };

    if ( wScroll > $('.paralax-footer').offset().top - 500 ) {
        $('.paralax-footer .paralax-fot').each(function(i) {
            setTimeout(function(){
                $('.paralax-footer .paralax-fot').eq(i).addClass('show-footer');
            },200  * (i+1) );
        });
    };

});

$(window).on('load', function() {

    $('.paralax-navbar .paralax-nav').each(function(i) {
        setTimeout(function(){
            $('.paralax-navbar .paralax-nav').eq(i).addClass('nav');
        },200 * (i+1));
    });

    
});
