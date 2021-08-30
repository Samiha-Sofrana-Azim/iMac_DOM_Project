
function myFunction1() {
    var x = document.getElementById("button2").value;
    document.getElementById("p2").innerHTML = x;
}
function myFunction2(){
    var y=document.getElementById("button1").value;
    document.getElementById("p2").innerHTML = y;
}


function myFunction3(){
    var a=document.getElementById("btn-1").value;
    document.getElementById("p3").innerHTML = a;
}

function myFunction4(){
    var b=document.getElementById("btn-2").value;
    document.getElementById("p3").innerHTML = b;
}



function myFunction5(){
    var c=document.getElementById("btn-3").value;
    document.getElementById("p3").innerHTML = c;
}
function myFunction6() {
    var p = document.getElementById("bton1").value;
    document.getElementById("p4").innerHTML = p;
}
function myFunction7(){
    var q=document.getElementById("bton2").value;
    document.getElementById("p4").innerHTML = q;
}

 function totalPrice() {
     
var p2 = parseInt(document.getElementById("p2").innerHTML);
var p3 = parseInt(document.getElementById("p3").innerHTML );
var p4 = parseInt(document.getElementById("p4").innerHTML);

document.getElementById("total").value = 1299+p2+p3+p4;
        }
     totalPrice()