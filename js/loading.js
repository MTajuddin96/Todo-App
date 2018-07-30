var span=document.querySelectorAll("span");
var i=0;
var p=document.querySelector("p");
var temp=window.setInterval(wait,500);
var menu=document.getElementsByClassName("menu")[0];

function wait(){
    if(i<span.length){
        span[i].style.transition="1s";
        span[i].style.opacity="1";

    }else{
        clearInterval(temp);
        p.style.transition="1s";
        p.style.opacity="1";
        setTimeout(function(){
            var header=document.getElementsByClassName("headerContainer")[0];
            header.style.transition="1s";
            header.style.opacity="0";
            header.style.display="none";
            menu.style.display="flex";
        },1000)

    }
    i++;
}
