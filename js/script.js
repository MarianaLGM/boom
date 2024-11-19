
//funcion para comparar seleccion usuario vs ordenador:

let result="";
 
function inicioJuego (eleccionUsuario){
    const userInput= document.getElementById("userInput") //desplegable donde elegimos número 1 al 3

    userInput=[1, 2, 3]

    const eleccionOrdenador = userInput[Math.floor(Math.random()*3)]   

    const result= document.getElementById("result") //"¡Has salvado el mundo!" ó "La bomba ha estallado" +la eleccion de la maquina vs del usuario

    if (eleccionUsuario===eleccionOrdenador){
    result= "¡Has salvado el mundo! Tu número " + eleccionUsuario + " es el mismo que el número " + eleccionOrdenador;//le estoy diciento que en la varialble result me pinte esa frase
    }else{
    result="¡La bomba ha estallado! Tu número " + eleccionUsuario + " es diferente que el número " + eleccionOrdenador;//le estoy diciento que en la varialble result me pinte esa frase
  }
    console.log("la elección del usuario es :", eleccionUsuario);
    console.log("la elección del ordenador es :", eleccionOrdenador);
}


/*

function boomGame(){
    return new Promise((resolve, reject) => {
        if (inicioJuego.length===0) {
            reject (new error("Inicio del juego is empty"))
        }
        setTimeout (() =>{
            resolve (inicioJuego);
        }, 5000)
    })
    .then((response) => console.log (response))
    .catch((err) => console.log(err.mensaje))
}
//cuenta atrás (5 segun) 5,4,3,2,1,0 NO FUNCIONA!

const countdown= document.getElementById("countdown");//cuenta atrás (5 segun) 5,4,3,2,1,0

function cuentaAtras() {
    if (eleccionUsuario===0) {
        eleccionUsuario=setInterval(5,4,3,2,1,0);
      console.log(cuentaAtras)
  
  countdown.addEventListener("click", cuentaAtras)
  }
  }

//resetear juego 

const restart= document.getElementById("restart")//.reset()//botón para resetear el juego

restart.addEventListener("click", function () {//resetar al hacer click
  
})

*/


