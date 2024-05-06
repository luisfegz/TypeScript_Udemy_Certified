let puntaje: number | string = 98
// Union Type: Ser muy estrictos, es mejor un solo tipo max: 2 tipos

puntaje = 'hola mundo'

type Animal = {
    id: number,
    estado: string
} 

type Usuario = {
    id: number,
    name: string
}

// Permite tener un objeto con un id y un estado
let animal: Usuario | Animal = { id: 1, estado: '', name: '' }

function suma( n: number | string ): number {
    if (typeof n === 'number') {
        return n + 2
        // Si colocamos: n.(Nos va mostrar los tipos de metodos de tipo number)
    }
    //Transformar a 'n'
    return parseInt(n) + 2
}

suma('2')
console.log('suma de dos mas dos','2' + 2)

//console.log('hola')	

/*Para ejecutar el código necesitamos escribir en consola node dist/index.js */

//Union type
let chanchito: number | string = 'feliz'

//Intersection type
type Audit = {
    created_at: string,
    modified_at: string,
}

type Product = {
    name: string,

}
// Intersection type: sirva para unir un tipo con otro tipo y despues juntarlos, para construir un objeto con ambas propiedades
//CREAMOS un objeto que va tener las propiedades de Audit y Product
const product: Audit & Product = { 
    created_at: '',
    modified_at: '',
    name: ''
}

//Tipos Literales
//const nDeFibo: 0 | 1 | 2 | 3 | 5 = 5

type Fibo =  0 | 1 | 2 | 3 | 5 
const nDeFibo: Fibo = 5

// Valores nulos
// Tomara el valor de un string y tratara de convertirlo en un numero

function toNumber(s: string | null | undefined) {
    if (!s) {
        return 0
    }
    return parseInt(s)
}

const n = toNumber(undefined)

// optional chain operator

// Primera instancia: getUser

function getUser(id: number) {
    if(id < 0) {
        return null
    }
    return {
        id: 1,
        name: 'Felipe',
        created_at: new Date()
    }
}

// Simular que el usuario no existe en la base de datos, 
// asignandole un valo de '-1'.
const user= getUser(-1)

// ChainOperator : preguntara si en verdad existe el user?
// Y si este es un objeto, nos dejara entrar a la opcion de created_at
console.log(user?.created_at)