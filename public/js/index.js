const main = document.querySelector('main');
const subtitulo = document.querySelector('.subtitulo');

/*const h2Link = document.querySelector('#link');

console.log(h2Title.attributes);
console.log(h2Link);*/

const link = document.querySelector('h2#link a');
const parrafos = document.querySelectorAll('p')


//console.log(link.textContent)

//const nombre = prompt("Ingrese su nombre");
Swal.fire({
  title: "Ingresa tu nombre",
  input: "text",
  showCancelButton: true,
 
}).then(({value : nombre}) =>{
    subtitulo.innerHTML += nombre ? nombre : "Invitado";
    subtitulo.style.textTransform = "uppercase";
link.style.color = "#E51B3E";

//const respuesta = confirm("¿Desea colocar un fondo de pantalla?");

Swal.fire({
    title:"¿Desea colocar un fondo de pantalla?",
    showDenyButton: true,
    confirmButtonText: "Si, quiero",
    denyButtonText: `No quiero`,
  }).then((result) => {
    
    if(result.isConfirmed)  document.body.classList.add("fondo");
    });
})
.catch(error => console.log(error));

//if(respuesta) document.body.classList.add("fondo")
//console.log(subtitulo.innerText);
//console.log(subtitulo.innerHTML);

/*if(nombre){
    subtitulo.innerHTML += nombre;

}else{
    subtitulo.innerHTML += 'Invitado';
}*/

parrafos.forEach((parrafo, index) => {
    (index + 1) % 2 === 0 ? parrafo.classList.add("destacadoPar") : parrafo.classList.add("destacadoImpar")
})




