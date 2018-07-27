(function($) {
  
    $('#enterApiBtn').click(function(){

        var apiDir = $('#api').val() + '.html';

        window.location.href = './' + apiDir;
        //console.log(apiDir);
    });

})(jQuery);
