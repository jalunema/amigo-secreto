//solucion amigo secreto 


const listaAmigos = [];
const inputAmigo = document.getElementById("amigo");
const ullistaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");

function agregarAmigo(){
    if (!inputAmigo.value){
        alert("por favor ingresar un nombre")
    }
  listaAmigos.push(inputAmigo.value);
  ullistaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;
};

function sortearAmigo(){
    const random = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[random];
    ulResultado.innerHTML = `<li> El amigo secreto es: ${amigoSecreto}</li>`;
            
}
