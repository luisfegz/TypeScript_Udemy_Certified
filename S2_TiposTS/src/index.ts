/**
 * tipos de JS
 * number
 * string 
 * boolean
 * null
 * undefined
 * object
 * function
 * 
 * Tipos de TS
 * any NO LO USES, VAS A ELIMINAR EL PROPOSITO DE TS
 * and
 * unknown
 * never
 * arrays
 * tuplas 
 * enums
 * 
 * Tipos Inferidos
 * 
 */
let msm: string = "Hola papu"

msm = "Hola pepe" 

console.log(msm)
console.log(typeof [])

let extincionDinosaurios: number = 76_000_000
let dinosaurioFavorito: string = "T-Rex"
let extintos = true

//extintos = 32


//Siempre asignar el tipo de dato a una variable en TypeScript
let mivariable
mivariable = "Chanchito Feliz"
mivariable = 42

function ChanchitoFeliz(config: any) {
    return config
}

let animales: string[] = ['Chanchito', 'feliz','felipe']
let nums: number[] = [ 1, 2, 3]
let checks: boolean[] = []
let nums2: Array<number> = []

//nums.map(x => x.) // El autocompletado sugiere métodos del tiepo de dato

/*  Tuplas

    Las Tuplas son exclusivas de TypeScript,

    arreglo de longitud fija:

    Tratar de solo dejar maximo de 3 items dentro del arreglo de la Tupla
*/ 

let tupla: [number, string[]] = [ 1, ['Chanchit Feliz', 'Chanchito Pepe']]
tupla.push(12) //Esto es un error de TypesScript OJO CON ESO

// Enum -> tipo enumerada (Representar estados de carga en la base de datos)

const chica = 's'
const mediana = 'm'
const grande = 'l'
const extraGrande = 'xl'

// Usa de Pascal Case, cada comienzo de la palabra es con Mayuscula
enum Talla { Chica = 's', Mediana = 'm', Grande = 'l', ExtraGrande = 'xl' }
//Por defecto  0       1       2           3

const variable1 = Talla.Grande
console.log(variable1)

const enum LoadingState { Idle, Loading, Success, Error }
// Es necesario crear variables que tengan el valor de nuestro Enum para 
// que en el archivo index.js le asigne un valor x defecto en este caso 2.
const estado = LoadingState.Success

const objeto : {
    id: number, 
    nombre: string 
} = { id: 1, nombre: 'Hola mundo' }

type Direccion ={
    numero: number,
    calle: string,
    pais: string

}
type Persona ={ 
    readonly id: number, 
    nombre: string,
    talla: Talla,
    direccion: Direccion
}

//     objeto   Tipo
const objeto2: Persona = {
    id: 1,
    nombre: 'Hola Mundo',
    talla: Talla.Mediana,
    direccion: {
        numero: 1,
        calle: 'Siempre viva',
        pais: 'Chanchitolandia'
    }
}

// De esta manera podemos definir los tipos de los objetos, y a su ves componerlos. 
// Tambien lo podemos implementar con los arreglos

// Arrays: Podemos crear un arreglo que va poder contener los objetos que definamos
// o queramos que este tenga.

const arr: Persona[] = [] 

/* Funciones y restricciones para ayudarte 
¿Como tipar las funciones en TypeScript? 

    Existen dos formas de realizar funciones en TSC, las cuales son: OPC1 & OPC2
    
    OPC1: las funciones VOID no retornan absolutamente nada.
    
    TSC nos ayuda para que siempre retornemos algo dentro de nuestras
    funciones, esto es sumamente util ya que nos va ayudar a prevenir
    errores que podamos tener e nuestra aplicacion cuando nosotros
    no estemos manejando los valores de retorno*/

const fn: (a: number) => string = (edad: number) => {
    if (edad > 17)
        return 'puedes ingresar'
    return 'no puedes pasar'

    
}

//  OPC2:

function validaEdad(edad: number, msg: string = 'Chanchito feliz' ): string {
    if(edad > 17)
        return  `puedes ingresar ${msg}`

    return 'no puedes pasar'

}

validaEdad(18)

// Lanzar errores -> never: lanzar un error 
function ErrorUsuario(): never {
    throw new Error('error de usuario')
}