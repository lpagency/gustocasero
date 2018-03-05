/* global $ */
'use strict';

$(document).ready(function() 
{
        var base_url = $.environmentVar(
          /*'https://apibodegas.ondev.today/',*    <- para poder probar en ondev*/ 
          'https://apibodegas.loadingplay.com/',
          'https://apibodegas.loadingplay.com/',
          'https://apibodegas.loadingplay.com/');
        var checkout_url = $.environmentVar(
          /*'https://lpcheckout.ondev.today/',    <- para poder probar en ondev*/ 
          'https://pay.loadingplay.com',
          'https://pay.loadingplay.com',
          'https://pay.loadingplay.com');
        var app_public = $.environmentVar(82,82,82);
        var site_name = $.environmentVar('gustocasero', 'gustocasero', 'gustocasero');

    // functions 

});
