const NUMERO_CASILLAS = 20;

let numeroIngresado = "numero por def";

for (let i = 1; i <= NUMERO_CASILLAS; i++) {
    document.querySelector(`#mostrar_casillas`).innerHTML += `
    <label for = "veinte_casillas">Casilla ${i}</label>
    <input id="veinte_casillas" type="checkbox" name="casilla">  <Br>

    `;

}

function generar() {
    numeroIngresado = Number(document.querySelector('#casilla').value);
    document.querySelector(`#mostrar_casillas${numeroIngresado}`).checked=true
    
}

