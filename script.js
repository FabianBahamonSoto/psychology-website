$(document).ready(function(){ /*NavBar psicologia*/
    $('.sidenav').sidenav();
});
$(document).ready(function(){ /*Carousel psicologia*/
    $('.carousel').carousel();
});
/*LLamar paginas*/
function call(i)
{
    if(i==1){
        window.location.href = "./depresion.html";
    } else if(i==2){
        window.location.href = "./ansiedad.html";
    } else if(i==3){
        window.location.href = "./demencia.html";
    }
}