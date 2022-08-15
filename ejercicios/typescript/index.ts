// Boolean
let muted: boolean = true;
muted = false;

// Numeros
let numerador: number = 42;
let denominador: number = 6;
let resultado = numerador / denominador;

// String
let nombre: string = 'Richard';
let saludo = `Me llamo ${nombre}`;

// Arreglos
let people: string[] = [];
people = ['Isabel', 'Nicole', 'Raul'];
// people.push(9000);

let peopleAndNumbers: Array < string | number > = [];
peopleAndNumbers.push('Ricardo');
peopleAndNumbers.push(9001);

// Enum
enum Color {
    Rojo = 'Rojo',
    Verde = 'Verde',
    Azul = 'Azul',
    Amarillo = 'Amarillo',
}

let colorFavorito: Color = Color.Verde;
console.log(`Mi color favorito es ${colorFavorito}`);

// Any
let comodin: any = 'Jocker';
comodin = { type: 'Wildcard' };

// Object
let someObject: object = { type: 'Wildcard' };

// Funciones
function add(a: number, b: number): number {
    return a + b;
}

const sum = add(4, 6);

function createAdder (a: number): (number) => number {
    return function (b: number) {
        return b + a;
    }
}

const addFour = createAdder(4);
const fourPlus6 = addFour(6);

function fullName(firstName: string, lastName: string = 'Smith'): string {
    return `${firstName} ${lastName}`;
}

const richard = fullName('Richard');
console.log(richard);

// Interfaces
interface Rectangulo {
    ancho: number
    alto: number
    color?: Color
};

let rect: Rectangulo = {
    ancho: 4,
    alto: 6,
    color: Color.Rojo,
};

function area(r: Rectangulo): number {
    return r.alto * r.ancho;
};

const areaRect = area(rect);
console.log(areaRect);

rect.toString = function () {
    return this.color ? `Un rectángulo ${this.color}` : `Un rectángulo`;
};

console.log(rect.toString());
