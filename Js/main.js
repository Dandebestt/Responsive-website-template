//=================Navbar===============//
$(window).scroll(function () {
    if ($(this).scrollTop() > 45) {
        $('.navbar').addClass('sticky-top shadow-sm');
    } else {
        $('.navbar').removeClass('sticky-top shadow-sm');
    }
});


// Portfolio isotope and filter
var portfolioIsotope = $('.portfolio-container').isotope({
    itemSelector: '.portfolio-item',
    layoutMode: 'fitRows'
});
$('#portfolio-filter li').on('click', function () {
    $("#portfolio-filter li").removeClass('active');
    $(this).addClass('active');

    portfolioIsotope.isotope({filter: $(this).data('filter')});
});

// ===============================Initiate the wowjs====================================//
new WOW().init();

