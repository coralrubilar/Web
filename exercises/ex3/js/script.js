 first_name= 'coral';
 last_name='rubilar';

var size = first_name.length * last_name.length;



window.onload= function create(){
    var container = document.getElementById("container");

    var array="";
    for(var i = 0; i < size; i ++)
    {
        
        array += "<div> </div>";
    }

    container.innerHTML=array;

    var first = document.getElementById("container").getElementsByTagName("div")[0];

    first.onmouseover = function(){
        first.style.backgroundImage = "url(images/c.png)";
    }

    first.onmouseout = function(){
      first.style.backgroundImage=null;
    }


    on();
    off();

}

function on(){
    var elements = document.getElementById("container").getElementsByTagName("div");
    for(var i=0; i<first_name.length ; i++) {
        elements[i].style.backgroundColor = "pink";
        elements[i].style.color = "pink";

    }

}
function off(){
    var elements = document.getElementById("container").getElementsByTagName("div");
    for(var i=0; i<first_name.length ; i++) {
        elements[i].style.backgroundColor = "white";
        elements[i].style.color = "white";

    }
}
 





