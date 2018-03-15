/*Lo dejo a parte por si lo queremos utilizar en otra página*/
var botonAceptar_cookies = document.querySelector(".accept-cookies");

if(localStorage.getItem("Cookies")){
    document.querySelector(".cookies").style.display = 'none'
}else{
    botonAceptar_cookies.addEventListener("click",function(e){
        fade(document.querySelector(".cookies"));
        localStorage.setItem("Cookies","aceptadas");
    });

    function fade(element) {
        var op = 1;  // initial opacity
        var timer = setInterval(function () {
            if (op <= 0.1){
                clearInterval(timer);
                element.style.display = 'none';
            }
            element.style.opacity = op;
            element.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op -= op * 0.1;
        }, 10);
    }
}
