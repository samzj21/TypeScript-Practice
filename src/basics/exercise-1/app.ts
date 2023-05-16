const teacher = {
    name: 'Samuel',
    lastName: 'Zapata'
};

console.log('Teacher', teacher);

// Primitivos 
// Booleans
// Declaración Implícita
const isTeacher = true; // Toma el valor con el cual fue declarado y ese es el tipo
let isPlayer = true; // Toma el tipo del valor asignado
isPlayer = false;
// Declaración explícita
const hasErrors: boolean = false;
let isChampion: boolean = false;

let result = hasErrors ? 'Tiene errores' : 'No tiene errores';

// String
const firstName = 'Samuel';
const lastName = 'Zapata';

let fullName = `Su nombre es: ${firstName} ${lastName}, bienvenido`;
console.log(fullName.toUpperCase());

// Number
let countStudents: number = 29;
let average: number = 4.5;

console.log(average.toFixed());

// Array 
let fruits = ['pera', 'banano'];
let sports: string[] = ['futbol', 'baloncesto'];

type stringOrNull = string | null;

// Union Types
let students: Array<string | null> = ['Nico', 'Yhoan', null];

console.log(students.filter((student) => student !== null));

// Tuplas
let exampleTuple: [string, null] = ['hola', null];

// Tipos Personalizados
type statusCode = 'active' | 'inactive';
let studentStatus = 'inactive';

// Any
let working: any = 25;
working = 'hola';

// Funciones
// function nombreFunction(parametro: tipoDato): tipoDatoQueRetornaLaFuncion {}
function validateValue(value: unknown): boolean {

    // Unknown es un tipo de dato desconocido
    // Para cualquier validación que deba hacer con el dato, primero debo saber o validar que tipo de dato es
    if (typeof (value) === 'string') {
        console.log(value.trim().toUpperCase);
    } else if (typeof (value) === 'number') {
        console.log(value.toFixed());
    }

    if (value === '') {
        return false;
    } else {
        return true;
    }
}

function getFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
}

console.log(getFullName(firstName, lastName));

// Void
function processResponse(saved: boolean) {
    if (saved) {
        console.log('Guardado');
    } else {
        console.log('Ocurrió un error');
    }
}

console.log(getFullName(firstName, lastName));
processResponse(true);


// Enum crea diccionarios, strings o numericos, para evitar strings magicos
enum Role {
    Admin,
    Client,
    Users,
    SuperAdmin,
}

let users: Array<{name: string, role: Role}> = [
    {
        name: 'Pepito',
        role: Role.Admin
    },
    {
        name: 'Juanito',
        role: Role.Client
    },
    {
        name: 'Fulanito',
        role: Role.Client
    }
]

console.log(users.filter((users) => users.role === Role.Client));
