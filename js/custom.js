var checkbox = document.querySelector('input[name=theme]');

checkbox.addEventListener('change', function() {
    if(this.checked) {
        trans()
        document.documentElement.setAttribute('data-theme', 'dark')
        createCookies('theme', 'dark', 30);
    } else {
        trans()
        document.documentElement.setAttribute('data-theme', 'light')
        createCookies('theme', 'light', 30);
        
    }
})

document.addEventListener("DOMContentLoaded", function(event) {
    if(readCookies('theme') != null && readCookies('theme') != 'light'){
        checkbox.checked = true;
        document.documentElement.setAttribute('data-theme', 'dark')
    }
});

var trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 10000)
}

var createCookies = (name, value, day) => {
    let exp = '';
    if(day){
        let date = new Date();
        date.setTime(date.getTime() + (day*24*60*60*3600));
        exp = '; expires=' + date.toGMTString();
    }else{
        exp = '';
    }
    document.cookie = name+'='+value+exp+'; path=/';
}

var readCookies = (name) => {
    let nameAndEquals = name + '=';
    let table = document.cookie.split(';');
    for(let i = 0; i < table.length;  i++){
        let c = table[i];
        while(c.charAt[0] == ' '){
            c = c.substring(1, c.length);
        }
        if(c.indexOf(nameAndEquals) == 0){
            return c.substring(nameAndEquals.length, c.length)
        }
    }
    return null;
}

var delateCookies = (name) => {
    createCookies(name, '', -1);
}