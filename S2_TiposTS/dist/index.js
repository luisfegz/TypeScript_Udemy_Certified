"use strict";
let msm = "Hola papu";
msm = "Hola pepe";
console.log(msm);
console.log(typeof []);
let extincionDinosaurios = 76000000;
let dinosaurioFavorito = "T-Rex";
let extintos = true;
let mivariable;
mivariable = "Chanchito Feliz";
mivariable = 42;
function ChanchitoFeliz(config) {
    return config;
}
let animales = ['Chanchito', 'feliz', 'felipe'];
let nums = [1, 2, 3];
let checks = [];
let nums2 = [];
let tupla = [1, ['Chanchit Feliz', 'Chanchito Pepe']];
tupla.push(12);
const chica = 's';
const mediana = 'm';
const grande = 'l';
const extraGrande = 'xl';
var Talla;
(function (Talla) {
    Talla["Chica"] = "s";
    Talla["Mediana"] = "m";
    Talla["Grande"] = "l";
    Talla["ExtraGrande"] = "xl";
})(Talla || (Talla = {}));
const variable1 = Talla.Grande;
console.log(variable1);
const estado = 2;
const objeto = { id: 1, nombre: 'Hola mundo' };
const objeto2 = {
    id: 1,
    nombre: 'Hola Mundo',
    talla: Talla.Mediana,
    direccion: {
        numero: 1,
        calle: 'Siempre viva',
        pais: 'Chanchitolandia'
    }
};
const arr = [];
const fn = (edad) => {
    if (edad > 17)
        return 'puedes ingresar';
    return 'no puedes pasar';
};
function validaEdad(edad, msg) {
    if (edad > 17)
        return `puedes ingresar ${msg}`;
    return 'no puedes pasar';
}
validaEdad(18, 'chanchito feliz');
//# sourceMappingURL=index.js.map