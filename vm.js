
// virtual size for mobile
var virtual_size_max = 800;
var virtual_size = function () {
    var width = $(window).width();
    if (width <= virtual_size_max) {
        $('[s-vw]').each(function (i,e) {
            var $e = $(e);
            var vw = $e.attr('s-vw');
            var w = vw*0.01*width;
            $e.width(w);
        });
        $('[s-vh]').each(function (i,e) {
            var $e = $(e);
            var vw = $e.attr('s-vh');
            var w = vw*0.01*width;
            $e.height(w);
        });
        $.each(['top', 'left', 'right', 'bottom'], function (index, prop) {
            $('[s-v'+prop+']').each(function (i,e) {
                var $e = $(e);
                var vw = $e.attr('s-v'+prop);
                var w = vw*0.01*width;
                $e.css(prop, w+'px');
            });
        });
    }
};
// invoke when  dom tree ok or window resize
$(virtual_size);
$(window).on('resize', virtual_size);
