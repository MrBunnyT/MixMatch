interface MyDict{
    [key:string]:number|string;
}

var browserCookie:MyDict
/**
 * Loads the browser's cookie into {@code browserCookie}
 */
function loadBrowserCookie() {
  try {
    var split:Array<string> = document.cookie.split('; ')
    for (var i = 0; i < split.length; i++) {
        var cur:Array<string> = split[i].split('=');
        browserCookie[cur[0]] = cur[1];
    }
  } catch (e) {
    browserCookie = {} as MyDict;
    console.error("Cookie was corrupted!");
  }
}

export default function getCookie(name:string):string|null {
    var dc = document.cookie;
    if(browserCookie== null){
        loadBrowserCookie();
    }
    let value = browserCookie[name]
    if(value)return value.toString()
    return null
}


