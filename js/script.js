
const userInput= document.getElementById("userInput") //desplegable donde elegimos número 1 al 3
const countdown= document.getElementById("countdown");//cuenta atrás (5 segun) 5,4,3,2,1,0
let result= document.getElementById("result"); //"¡Has salvado el mundo!" ó "La bomba ha estallado"  
let resultados=document.getElementById("contenedorResulados");
let eleccionUsuario=0;

//funcion para comparar seleccion usuario vs ordenador cuando haga click:

userInput.addEventListener("change", function() { //el change es para los desplegables cuando cambian de opción y se escoge entre varios.
    eleccionUsuario = userInput.value
  })

const eleccionOrdenador = Math.floor(Math.random()*3) + 1  //numero aleatorio selección ordenador

console.log("la eleccion del ordenador es",eleccionOrdenador) //ok
console.log("mi eleccion es",eleccionUsuario)//ok

/*1. Función comenzar juego
     - Con una cuenta atrás (esto será otra función que debes crear y luego la llamas aquí)
     - promesa para crear el número random del ordenador:
           - con un setTimeout para que se resuelva en el mismo tiemo que la cuenta atrás.
     - Debe retornar el eleccionOrdenador.*/
function inicioJuego(){
    return new Promise((resolve, reject) => {
    resolve()
    if (inicioJuego.length===0) {
        reject (new error("Inicio del juego is empty"))
    }
        setTimeout (() =>{
        resolve (eleccionOrdenador, cuentaAtras);
    }, 5000)
    })
}

inicioJuego()
    .then((response) => console.log (response))
    .catch((err) => console.log(err.mensaje))  
    
    
/*2.Función para comenzar la cuenta atrás- setInterval*/

function cuentaAtras() {
    if (eleccionUsuario==0) {
        eleccionUsuario=setInterval(5,4,3,2,1,0);
      console.log(cuentaAtras)
  
  countdown.addEventListener("click", cuentaAtras)
  }
} 
 

/*Ejecutamos la función "Comenzar juego" con una promesa .then
y una condicional donde le diremos que si el numero seleccionado por el ordenador (random) es igual que el número seleccionado por el usuario ...
Esto es lo que ya te pone en el enunciado de las frases.*/

function resultadoJuego(){
    
   document.createElement('p')=result;
   resultados.appenchild (result);

    if (eleccionUsuario===eleccionOrdenador){
       result= "¡Has salvado el mundo! Tu número " + eleccionUsuario + " es el mismo que el número " + eleccionOrdenador;//le estoy diciento que en la varialble result me pinte esa frase
   }else{
       result="¡La bomba ha estallado! Tu número " + eleccionUsuario + " es diferente que el número " + eleccionOrdenador;//le estoy diciento que en la varialble result me pinte esa frase
     }
console.log(result)
}
     
/*
//Para restablecer el juego -(evento y una acción) 

    const restart= document.getElementById("restart").value.reset();//botón para resetear el juego

    restart.addEventListener("click", function () {//resetar al hacer click
     eleccionUsuario===0   
})

*/