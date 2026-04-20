const grid=document.getElementById("grid-productos");

const inventario=[

{nombre:"Anillo Diamantes",precio:5500000,imagen:"img/anillo.png",categoria:"Diamantes"},
{nombre:"Collar Perlas",precio:1200000,imagen:"img/collar.png",categoria:"Perlas"},
{nombre:"Reloj Lujo",precio:8900000,imagen:"img/relojes.png",categoria:"Relojes"},
{nombre:"Esclava Oro",precio:3400000,imagen:"img/esclava.png",categoria:"Caballeros"},

{nombre:"Aretes Oro Rosa",precio:480000,imagen:"img/aretes1.png",categoria:"Damas"},
{nombre:"Pulsera Elegante",precio:620000,imagen:"img/pulsera1.png",categoria:"Damas"},
{nombre:"Cadena Cubana",precio:2100000,imagen:"img/cadena1.png",categoria:"Caballeros"},
{nombre:"Anillo Corona",precio:980000,imagen:"img/anillo2.png",categoria:"Diamantes"},
{nombre:"Collar Corazon",precio:750000,imagen:"img/collar2.png",categoria:"Perlas"},
{nombre:"Reloj Ejecutivo",precio:3200000,imagen:"img/reloj2.png",categoria:"Relojes"},
{nombre:"Pulsera Diamante",precio:4500000,imagen:"img/pulsera2.png",categoria:"Diamantes"},
{nombre:"Aretes Estrella",precio:390000,imagen:"img/aretes2.png",categoria:"Damas"},
{nombre:"Cadena Oro 18k",precio:5200000,imagen:"img/cadena2.png",categoria:"Caballeros"},
{nombre:"Anillo Infinity",precio:870000,imagen:"img/anillo3.png",categoria:"Diamantes"}

];

let slideIndex=0;
const slides=document.querySelectorAll(".slide");

setInterval(()=>{
slides[slideIndex].classList.remove("active");
slideIndex=(slideIndex+1)%slides.length;
slides[slideIndex].classList.add("active");
},4000);

function mostrar(lista){
grid.innerHTML="";
lista.forEach(p=>{
grid.innerHTML+=`
<div class="product-card">
<img src="${p.imagen}" class="product-img">
<h3>${p.nombre}</h3>
<p>$${p.precio.toLocaleString()}</p>
<button onclick="agregarCarrito('${p.nombre}',${p.precio})">
Agregar al carrito
</button>
</div>`;
});
}

function cargarPortada(){mostrar(inventario);}

function filtrar(cat){
mostrar(inventario.filter(p=>p.categoria===cat));
}

function buscarProducto(){
const t=document.getElementById("inputBusqueda").value.toLowerCase();
mostrar(inventario.filter(p=>p.nombre.toLowerCase().includes(t)));
}

let carrito=[];

function agregarCarrito(nombre,precio){
carrito.push({nombre,precio});
actualizarCarrito();
}

function actualizarCarrito(){

const items=document.getElementById("items-carrito");
const total=document.getElementById("total");
const contador=document.getElementById("contador-carrito");

items.innerHTML="";
let suma=0;

carrito.forEach((item,i)=>{
suma+=item.precio;

items.innerHTML+=`
<div class="item-carrito">
${item.nombre}
$${item.precio.toLocaleString()}
<button onclick="eliminar(${i})">❌</button>
</div>`;
});

total.textContent=suma.toLocaleString();
contador.textContent=carrito.length;
}

function eliminar(i){
carrito.splice(i,1);
actualizarCarrito();
}

function abrirCarrito(){
document.getElementById("carrito").classList.add("activo");
}

function cerrarCarrito(){
document.getElementById("carrito").classList.remove("activo");
}

document.addEventListener("DOMContentLoaded",cargarPortada);