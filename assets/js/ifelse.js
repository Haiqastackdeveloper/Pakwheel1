let uname =prompt("enter your name");
let email =prompt("enter your email");
document.write("<h1 style='background-color:brown;color:white;text-align:center;'>"+ uname +"</h1>")
document.write("<h2 style='background-color:chocolate;color:white;text-align:center;'>"+email+"</h2>")
if(uname!="" && email!=""){
    alert('login successfully');
}else{
    alert('both data required');
}