var span=document.querySelectorAll("span");
var i=0;
var p=document.querySelector("p");
var menu=document.getElementsByClassName("menu")[0];
var header=document.getElementsByClassName("headerContainer")[0];


if(sessionStorage.getItem("key")==="true"){

    header.style.display="none";
    menu.style.display="flex";
}
else{
    var temp=window.setInterval(wait,500);
    function wait(){
        if(i<span.length){
            span[i].style.transition="1s";
            span[i].style.opacity="1";
    
        }else{
            clearInterval(temp);
            p.style.transition="1s";
            p.style.opacity="1";
            setTimeout(function(){
                
                header.style.transition="1s";
                header.style.opacity="0";
                header.style.display="none";
                menu.style.display="flex";
                sessionStorage.setItem("key","true");
            },1000)
    
        }
        i++;
    }
    
}