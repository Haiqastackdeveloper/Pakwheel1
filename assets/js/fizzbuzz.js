let number1 = parseInt(prompt("enter the number where fizzbuzz game start"));
let number2 = parseInt(prompt("enter the number where fizzbuzz game end"));
for (var i = number1; i <=number2 ; i++) {
    if (i % 5 == 0) {
            document.write("<h3 style='background-color:blue;color:white;text-align:center;'>"+i+"FizzBuzz</h3>");

          }
    else if (i % 2 == 0){ 
        document.write("<h3 style='background-color:red;color:white;text-align:center;'>"+i+"Fizz</h3>");
    }
    else { document.write("<h3 style='background-color:green;color:white;text-align:center;'>"+i+"Buzz</h3>");}
}
