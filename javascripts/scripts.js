/*
	http://getbootstrap.com/docs/4.1/examples/offcanvas/
*/
$(function () {
	'use strict'
	$('[data-toggle="offcanvas"]').on('click', function () {
		$('.offcanvas-collapse').toggleClass('open')
	})
})

/*
    onload: open tab from anchor #hash
*/
var current = location.protocol+'//'+location.host+location.pathname;   // current URL (without #hash)
var hash = location.hash;                                               // just the #hash
var prefix = "tab_";
if (hash) {
    $('.nav-tabs a[href="'+hash.replace(prefix,"")+'"]').tab('show');
    window.location.hash = "";                                              // don't scroll to anchor
}

/*
    onclick in sidebar: open tab from anchor #hash
*/
$('.sidebar-categories a').click(function(e) {
    var split = $(this).attr("href").split("#");    // split the href at #
    var base = split[0];
    var anchor = split[1];                          // this href's #hash
    var ret = base.replace('../../','');            // strip path to make string comparable

    if( current.includes( ret ) ){                  // compare href to current URL
        $('#tabs a[href="#'+anchor+'"]').tab('show');
        e.preventDefault();
    }

    //console.log('base: ' + base);
    //console.log('ret: ' + ret);
    //console.log('current: ' + current);
});

$(function(){

    /*----------  Smooth anchor scrolling  ----------*/
    $('a.scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 50
        }, 1200, 'easeInOutExpo');
        event.preventDefault();
    });

});
