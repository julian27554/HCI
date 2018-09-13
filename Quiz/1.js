// Ejercicio 1
var Age = prompt("Ingresa tu edad: ");

function NewAge(){
  return Age * 365;
}

//-------------------------------------------------------------------

//Ejercicio 2
function Pair(){
  if(Age%2==0){
  Age = Age.toString();
  return Age;
  }
}

//--------------------------------------------------------------------

//Ejercicio 3

function Array(){
  if(Age%2!=0){
    let a =[];
    a.push(Age);
}

//-----------------------------------------------
NewAge();
Pair();
Array();
