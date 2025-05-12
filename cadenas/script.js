//variables
let zb1 = "primer elemento del documento web";
let zb12 = zb1.toUpperCase();
let zb13 = zb12.replace("PRIMER", "FIRST");

//documents
document.getElementById('cadena').innerHTML=zb1;
document.getElementById('cadena2').innerHTML=zb12;
document.getElementById('cadena3').innerHTML=zb13;

//consolas
console.log(zb1.length);
//console.log(zb1.at(15));
console.log(zb1.toUpperCase());