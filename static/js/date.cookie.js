function getCookie(cname)
{
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++)
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
    window.localStorage.setItem("date", datetime);
}

function eraseCookie(cname, cvalue, exMins)
{
    var d = new Date();
    d.setTime(d.getTime() + (exMins*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    document.cookie = cname + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function deleteShoppingCart()
{
    eraseCookie("shopping-cart", '', 0);
}
