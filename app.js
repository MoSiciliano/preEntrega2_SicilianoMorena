
//INICIO
class Entrada{
    constructor(usuario, email){
        this.usuario = usuario = prompt("Ingrese su nombre de usuario");
        this.email = email = prompt("Ingrese su email");
        this.saludar = function(){ 
            return alert(`Bienvenido a La Joie, ${this.usuario}, comencemos con su compra`)
        }
    }
}
const usuarios1 = new Entrada ()

console.log(usuarios1.saludar());

//Voy a mostrar Productos con un array de objetos 
const seccionLiving =[
    {
        id: 001,
        nombre: "Mesa de Tv, estilo nórdica",
        seccion: "Living",
        precio:  50000,
    },
    {
        id: 002,
        nombre:  "Mesa de Tv con cajones, estilo nórdica",
        seccion:"Living",
        precio: 55000,
    },
    {
        id: 003,
        nombre: "Mesa ratona, estilo nórdica",
        seccion: "Living",
        precio:  45500,
    }
]
const seccionHabitación =[
    {
        id: 004,
        nombre: "Escritotio con cajón, estilo nórdica",
        seccion: "Habitación",
        precio:  45500,
    },
    {
        id: 005,
        nombre:  "Mesa de luz, estilo escandinava",
        seccion:"Habitación",
        precio:  35000,
    },
    {
        id: 006,
        nombre: "Cajonera, estilo nórdica",
        seccion: "Habitación",
        precio:  50000,
    }   
]
//Array con todos los  productos
const productos = seccionLiving.concat(seccionHabitación);

let total = 0
//function iD (id){
    //productos.find (()=>)  
//}
//
function menuCompra(){ 
    let lista = " ";
    let option = prompt("Elija una opción\n 1. Iniciar compra \n 2. Terminar Compra" );
    if (option == 1 ) {
        productos.forEach((producto) => {
        lista +=  `${producto.id} ${producto.nombre} \n`
        })
        alert(lista) 
    } else{
        alert("Gracias por visitarnos");
    }
} 
menuCompra()
const carrito = [] 
let productoElegido = 0
function agregarCarrito (){
    let eleccion = prompt ("Ingrese el numero de Id del producto que desea comprar")
    productoElegido = productos.find ((producto)=> producto.id === eleccion)
    if (productoElegido) {
        carrito.push (productoElegido)
        alert (carrito)
    }else{
        alert ( "Ingrese un Id válido por favor")
    }
}
agregarCarrito()
//function buscarProducto (id){
//    return productos.find((producto)=> producto.id == id );
//}
//function seleeccionLista (producto){
//    let seleccion = prompt("Coloque el Id del producto que desea comprar") 
//    if (seleccion) {
//        carrito.push (seleccion)
//    } else{
//
//    }   
//}
//const carrito = []





//para la suma final del carrito
//function suma (precio){return total += precio;}



                                         