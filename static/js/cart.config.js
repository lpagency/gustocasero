/* global $ */
/* global Utils */
/* global unescape */
/* global document */
/* export config */

var getIncludeParameters = function()
{
    var scripts = document.getElementsByTagName('script');
    var myScript = scripts[ scripts.length - 6 ];
    // var scripts = document.getElementsByTagName('script');
    // var myScript = scripts[ scripts.length - 1 ];

    var queryString = myScript.src.replace(/^[^\?]+\??/,'');

    var params = parseQuery( queryString );

    function parseQuery ( query ) {
        var Params = new Object ();
        if ( ! query ) return Params; // return empty object
        var Pairs = query.split(/[;&]/);
        for ( var i = 0; i < Pairs.length; i++ ) {
            var KeyVal = Pairs[i].split('=');
            if ( ! KeyVal || KeyVal.length != 2 ) continue;
            var key = unescape( KeyVal[0] );
            var val = unescape( KeyVal[1] );
            val = val.replace(/\+/g, ' ');
            Params[key] = val;
        }
        return Params;
    }

    return params;
};

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};

$(document).ready(function()
{

    var base_url = $.environmentVar(
        'https://apibodegas.loadingplay.com/',
        'https://apibodegas.ondev.today/',
        'https://apibodegas.loadingplay.com/');
    var checkout_url = $.environmentVar(
        'https://pay.loadingplay.com/',
        'https://lpcheckout.ondev.today/',
        'https://pay.loadingplay.com');
    var app_public = $.environmentVar(82,82,82);
    var site_name = $.environmentVar('gustocasero', 'gustocasero', 'gustocasero');

    var config = {
        'app_public': app_public,
        'base_url': base_url,
        'products_per_page' : 9, 
        'tag': '',
        'ignore_stock': false,
        'infinite_scroll': false,
        'animation': 'ghost',
        // 'maxProducts': 100,
        'checkout_url': checkout_url,
        'analytics' : true,
        'operator' :'or',
        'onLoad': function(products) 
        {
        }
    };

    $(document).ecommerce(config);

});