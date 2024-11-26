

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const userInput= document.getElementById("userInput"); //desplegable donde elegimos número 1 al 3

let result= document.getElementById("result"); //"¡Has salvado el mundo!" ó "La bomba ha estallado"  
let restart = document.getElementById("restart");

let eleccionUsuario=0;

//seleccion usuario vs ordenador cuando haga click:

userInput.addEventListener("change", function() { //el change es para los desplegables cuando cambian de opción y se escoge entre varios.Aqui podría usar el keydown para que cuando presione enter o una tecla 
  eleccionUsuario = userInput.value
})

const eleccionOrdenador = Math.floor(Math.random()*3) + 1  //numero aleatorio selección ordenador


//función juego
const countdown= document.getElementById("countdown");//cuenta atrás (5 segun) 5,4,3,2,1,0
function inicioJuego() {
  cuentaAtras(5);
  const promesaNumero = new Promise((resolve) => {
    setTimeout(() => {
      const eleccionOrdenador = Math.floor(Math.random() * 3) + 1;
      resolve(eleccionOrdenador);
    }, 6000); //set interval son 6 vueltas (del 5 al 0)
  });
  return promesaNumero;
}

//funcion cuenta atrás// NO VUELCA EL CONTADOR EN WEB 5,4,3,2,1,0
function cuentaAtras(tiempo) {
  if (eleccionUsuario==0) {
    tiempo=setInterval(5,4,3,2,1,0);
    setTimeout(() => {
countdown.addEventListener("click", cuentaAtras)
  },6000)
  //countdown.innerHTML=("Cuenta atrás: "+ tiempo, "segundos")
} 
}


inicioJuego().then((numOrdenador) => {
  //condicional que compara la eleccion del usuario y la del ordenador y donde se mostrará el mensaje según resultado)
  if (eleccionUsuario == 1 & numOrdenador== 1) {
    mensaje = `<h3>¡Has salvado el mundo!Tu número ${eleccionUsuario} es el mismo que el número ${numOrdenador}</h3>`; 
  }else if (eleccionUsuario == 2 & numOrdenador== 2){
    mensaje = `<h3>¡Has salvado el mundo!Tu número ${eleccionUsuario} es el mismo que el número ${numOrdenador}</h3>`;
  }else if (eleccionUsuario == 3 & numOrdenador== 3){
    mensaje = `<h3>¡Has salvado el mundo!Tu número ${eleccionUsuario} es el mismo que el número ${numOrdenador}</h3>`;
   
  } else {
    mensaje = `<h3>¡La bomba ha estallado! Tu número ${eleccionUsuario} es diferente que el número ${numOrdenador}</h3>`; //le estoy diciento que en la varialble result me pinte esa frase
  }
  //poner el mensaje en el div id"result"
  result.innerHTML = mensaje;
});
restart.addEventListener("click", function () {//reinciar juego
  location.reload();
});


