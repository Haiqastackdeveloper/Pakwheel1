function firstfunction(){
//  console.log("|sd")
    let uinp = document.querySelector("#uname").value;
    let uinp1 = document.querySelector("#qualification").value;
    let uinp2 = document.querySelector("#work").value;
    let data = document.querySelector("#data");
    let data1 = document.querySelector("#data1");
    let data2 = document.querySelector("#data2");
    if(uinp && uinp1 && uinp2){
        data.innerHTML=uinp;
        data1.innerHTML=uinp1;
        data2.innerHTML=uinp2;
    }else{
        alert("all data required");
    }
}