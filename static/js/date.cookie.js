function getCookie(cname)
{
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++)
    {
        var c = ca[i];
        while (c.charAt(0) == ' ')
        {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0)
        {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function createDateCookie()
{
    var datetime = new Date(new Date().setHours(0, 0, 0, 0));
    document.cookie = "Date= "+datetime;
}

function deleteShoppingCart()
{
    document.cookie = 'shopping-cart=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
