let x=5;
let y = "";
while(x<=25){
    y+="<p style='font-size:"+x+"px;'>"+x+"</p>";
    x++;
}
document.getElementById("print").innerHTML=y