$(function() {
    
    $.fn.extend({
        animateCss: function (animationName, callback) {
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            this.addClass('animated ' + animationName).one(animationEnd, function() {
                $(this).removeClass('animated ' + animationName);
                if (callback) {
                  callback();
                }
            });
            return this;
        }
    });
    
    $("#yes").click(function() {
        $("#lost1").animateCss('zoomOut', function() {
            $("#lost1").hide();
        });
    });
    
    $("#no").click(function() {
        $("#no").addClass('disabled').animateCss('flash', function() {
            $("#no").addClass('animated zoomOut');
        });
        $("#lost1-prompt").animateCss('fadeOut', function() {
            $("#lost1-prompt").text("how about now?");
            $("#lost1-prompt").addClass("animated fadeIn");
        });
    });
});