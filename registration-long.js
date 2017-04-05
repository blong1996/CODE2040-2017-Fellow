/**
 * Created by brandonlong on 8/24/16.
 */

(function($) {

    var token = "f72ec45a14252de62c24951e51a6bd4b";
    var git = "https://github.com/blong1996/CODE2040-2017-Fellow";
    var url = "http://challenge.code2040.org/api/register";


    function post() {
        $.post( url, { token:token, github: git}, function( data ) {
            console.log(data);
        });
    }


    post();

})(jQuery);