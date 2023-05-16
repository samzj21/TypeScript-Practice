class Animal {
    color!: string;
    especie!: string;
    peso!: number;
    tamanio!: number;

    alimentarse(): void {
        console.log('Alimentándome');
    }
}

// La herencia se da gracias a la palabra reservada Extends
class Gato extends Animal {
    constructor() {
        super();
        console.log('Creando un gato a partir de Animal');
    }
}

class Perro extends Animal {
    constructor() {
        super();
        console.log('Creando un perro a partir de Animal');
    }
}

const cualquierAnimal: Animal = new Animal();

