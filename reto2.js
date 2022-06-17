const NUMERO_CASILLAS = 20;

let numeroIngresado = "numero por def";

for (let i = 1; i <= NUMERO_CASILLAS; i++) {
    document.querySelector(`#mostrar_casillas`).innerHTML += `
   
    <input id="veinte_casillas${i}" type="checkbox" name="casilla"> Casilla ${i} <Br>
  
    `;

}

function generar() {
    numeroIngresado = Number(document.querySelector('#casilla').value);
    document.querySelector(`#veinte_casillas${numeroIngresado}`).checked=true;
/*     
    for(let s= 1; s <= numeroIngresado ; s + numeroIngresado){
        document.querySelector("#mostrar_casillas").innerHTML+= `  
        <option>casillas${numeroIngresado}</option>
      
        `;
                 
    }  */

}

















/*
tengo que hacer que una repetición suceda "cada tanto" cada x intervalo.
el numero ingresado es el que dice que intervalo será.
 nro ingresado =4 
 entonces 1+4; 5+4; nro 1+nro ingresado + nro ingresado
 i=1 ; i + nro ingresado

let numeroIngresado = xdef
let numeroSaltos = xdef


for (let saltos= 1; saltos = numeroIngresado ; saltos + nro ingeresado)
    
    

for(let saltos= 1; saltos = numeroIngresado ; saltos ++){
        document.querySelector("#veinte_casillas").innerHTML+= `  
        <option>Opcion ${i}</option>
        <input id="veinte_casillas${i}>
        `;
                 
    } 


*/