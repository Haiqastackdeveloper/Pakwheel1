let percentage =prompt("enter your percentage for checking eligibility criteria");
if(!percentage){
    alert("data must be required")
}

if(percentage>90 && percentage<=100){
    alert("you may eligible to take addmission in pre-medical or pre-engineering or computer science or commerce or arts")
}
else if(percentage>80){
    alert("you may eligible to take addmission in pre-engineering or computer science or commerce or arts")
}
else if(percentage>70){
    alert("you may eligible to take addmission in computer science or commerce or arts")
}
else if(percentage>60){
    alert("you may eligible to take addmission in commerce or arts")
}
else if(percentage>40){
    alert("you may eligible to take addmission in arts")
}
else{
    alert("you may not eligible to take addmission here")
}