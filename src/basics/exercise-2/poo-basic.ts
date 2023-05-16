class Auto {

    // Atributos de la clase o propiedades
    color: string = 'Negro';  // Iinicializar directamente
    puertas: number; // Inicializar en el constructor
    marca?: string; // Marcar como opcionales

    // Metodo que se ejecuta al realizar una instancia de una clase - Inicializar propiedades de la clase
    constructor(marca?: string) {
        this.puertas = 4;  // Con this accedo a todas las propiedades y métodos de la clase
        this.marca = marca;
    }

    // Metodos de la clase
    acelerar() {
        console.log('Acelerando');
    }
    frenar() {
        console.log('Frenando');
    }
    prender() {
        console.log('Prendiendo');
    }
}


let ferrari: Auto = new Auto(); // Instancia de la clase Auto - Objeto
console.log(ferrari);
ferrari.marca = 'Ferrari';
console.log(ferrari.marca);
console.log(ferrari);
ferrari.color = 'Blanco';
console.log(ferrari);

let lambo = new Auto();
console.log(lambo);
lambo.puertas = 2;
console.log(lambo);
lambo.marca = 'Lamborghini';
lambo.color = 'Exotico';

class Auto2 {

    color: string = 'Negro' ; // Implícita - Por defecto es púlico
    public puertas: number; // Forma explícita para colocar una propiedad pública

    // En el constructor yo puedo crear propieades de la clase...
    // ...si y solo si tienen el modificador de acceso (public, private, protected)
    // Los parámetros que son opcionales siempre deben ir al final de cualquier método o función...
    // ...en este caso el constructor es un método
    constructor(public peso: number, public marca?: string) {
        this.puertas = 4;
        this.encender();
    }

    apagar() {
        console.log('Apagando');
    }

    encender() {
        console.log(`Bienvenido ${this.marca}, tu color es: ${this.color}, tu peso es: ${this.peso} y tienes ${this.puertas} puertas.`)
    }
}
let ford = new Auto2(500, 'Ford');
console.log(ford);