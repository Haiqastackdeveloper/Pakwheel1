let a =parseInt(prompt("enter initial number"));
let b =parseInt(prompt("enter final number"));
if(isNaN(a) || isNaN(b)) {
    alert("wrong input or incomplete data")
    location.assign("for.html")
}else{
    if(b<a){
        alert("Final number must be smaller than Initial number")
    location.assign("for.html")

    }
  
}
let x ="";
let div=document.getElementById("para");
for(let i=a;a<=b;a++){
    x+="<p>"+a+"</p>";
}
div.innerHTML=x;