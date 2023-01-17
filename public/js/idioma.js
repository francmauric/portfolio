var check= document.querySelector(".check");

check.addEventListener("click",idioma);

function idioma(){
    console.log(check.checked)
    let id=check.checked;
    if (id==true){
        location.href="../home"
    }else{
        location.href="/"
    }
   
}

var check1= document.querySelector(".check-0");

check1.addEventListener("click",idioma2);

function idioma2(){
    console.log(check1.checked)
    let id=check1.checked;
    if (id==true){
        location.href="../home"
    }else{
        location.href="/"
    }
   
}