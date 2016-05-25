
$(function () {
	$('.slider1').jcarousel({
	    scroll: 1,
	    wrap : 'both',
	    auto : 3,
	    buttonNextHTML: null,
	    buttonPrevHTML: null,
	    // Events
	    initCallback: initCallback1,
	    itemFirstInCallback: itemFirstInCallback1  
	});
	
	$('.slider2').jcarousel({
	    scroll: 1,
	    wrap : 'both',
	    auto : 3,
	    vertical: true,
	    buttonNextHTML: null,
	    buttonPrevHTML: null,
	    // Events
	    initCallback: initCallback1,
	    itemFirstInCallback: itemFirstInCallback1
	});
});

function initCallback1 (carousel) {
	$('.prev').click(function () {
        carousel.prev();
        carousel.stopAuto();
        return false;
    });
    $('.next').click(function () {
        carousel.next();
        carousel.stopAuto();
        return false;
    });
    $('#head .nav a').bind('click', function() {
        carousel.scroll($.jcarousel.intval($(this).attr('rel')));
        carousel.stopAuto();
        return false;
    });
}
function itemFirstInCallback1 (carousel, item, idx, state) {
	$('#head .nav a').removeClass('active');
	$('#head .nav a').eq(idx-1).addClass('active');
}