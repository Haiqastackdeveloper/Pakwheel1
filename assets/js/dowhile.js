let username =prompt("enter your name");
let pincode =0;
do{

    pincode=prompt("enter your pincode");
   
if(pincode!="123"){
    alert("please enter valid pincode");
  
}
}while(pincode!=="123")
    alert("logged in succsesfully");


document.write("<h1>Dear "+username+"</h1>")
