
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

let elegirOtro = 1;
let eleccion; 
const carrito =[]
while (elegirOtro === 1){
    //Menu de compra 

    function menuCompra(){ 
        let lista = " ";
        productos.forEach((producto) => {
        lista +=  `${producto.id} ${producto.nombre} \n`
        })
        eleccion = Number(prompt(`${lista} \n Elegi tu producto por id`))
    } 
    menuCompra()
    // Array de carrito vacio 
    //const carrito = [] 
    let productoElegido = 0
    //agregar al carrito
    function agregarCarrito (){
        productoElegido = productos.find ((producto)=> producto.id === eleccion)
          if (productoElegido) {
              carrito.push (productoElegido)
          }else{
              do {
                alert ( "Ingrese un Id válido por favor")
                eleccion = Number(prompt(`${lista} \n Elegi tu producto por id`))
            } while (productoElegido)
          } elegirOtro = Number(prompt("Desea agregar Otro?\n 1.si\n 2.no"))
    }
    
    agregarCarrito()
}

const nombreProducElegido = []
function listaNombre (){
let listanombreProducElegido = "";
    carrito.forEach ((producto)=>{
        listanombreProducElegido += `ID:${producto.id} Nombre:${producto.nombre}\n`
    })    
    if (listanombreProducElegido != ""){
        nombreProducElegido.push (listanombreProducElegido)
        alert(nombreProducElegido)
    } else{ 
        alert 
    }
}             
    
listaNombre ()