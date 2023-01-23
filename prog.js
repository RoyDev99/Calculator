function display(calculation, num1, num2)
{
 
 if(calculation==="Addition")
 {
  add(num1, num2);
 }
 if(calculation==="subtraction")
 {
  sub(num1, num2);
 }
 if(calculation==="multiplication")
 {
  mul(num1, num2);
 }
 if(calculation==="divition")
 {
  div(num1, num2);
 }
}

function add(num1, num2)
{
 let sum1= parseInt(num1) + parseInt(num2);
 alert(sum1);
}

function sub(num1, num2)
{
 let sum2= parseInt(num1) - parseInt(num2);
 alert(sum2);
}

function mul(num1, num2)
{
 let sum3= parseInt(num1) * parseInt(num2);
 alert(sum3);
}

function div(num1, num2)
{
 let sum4= parseInt(num1) / parseInt(num2);
 alert(sum4);
}

