let username = 'admin';
let email = 'admin@gmail.com';
let password = 'admin123';
let uname = prompt("enter your name");
if (uname){
    if(uname==username){
        alert("true")
    }else{
        alert("false")
    }
}else{
    alert("blank")
}


let emailid = prompt("enter your email");
let key = prompt("enter your password");

if (emailid && key){
    if(emailid==email && key==password){
        alert("true")
    }else{
        alert("false")
    }
}else{
    alert("blank")
}
