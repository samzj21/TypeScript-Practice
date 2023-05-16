// Interface: me sirve para generar la estructura de un objeto o definir un contrato para una clase.


// Dicionario
enum Rol {
    Junior,
    Middle,
    Senior
}
// Diccionario
enum TipoContrato {
    Indefinido,
    TerminoFijo,
}

// Definir un contrato para una clase (la I al principio del nombre del contrato ES BUENA PRÁCTICA y significa Interface)
interface IContrato { // En una interface TODO ES PÚBLICO.
    salario?: number;
    fechaInicio?: Date; // Opcional (con el ?)
    rol: Rol; // Requerido (sin el ?)

    // Solo se crea la firma de los métodos. Quien implemente debe definir su funcionalidad
    cancelar?(): void; // Opcional (?)

    pagar(): number; // Obligatorio
    suspender(cantidad: number): void;

}


class ContratoUltraCredit implements IContrato {

    // Atributos que debo tener de la interface IContrato
    rol: Rol;
    salario?: number;

    // Atributos propios
    tipoContrato: TipoContrato;

    constructor() {
        this.tipoContrato = TipoContrato.Indefinido;
        this.rol = Rol.Junior;
    }

    pagar(): number {
        return 1000000;
    }
    suspender(cantidad: number): void {
        console.log(`Estás suspendido ${cantidad} días`);
        console.log('Información del contrato');
        // ?? Operador Null Coalescing - Valida que la expresión de la izq. sea diferente de Null o Undefined. 
        // Si es Null o Undefined, devuelve la expresión de la der. De lo contrario retorna el valor de la izq.
        console.log(`Tu salario es: ${this.salario ?? 1000}`);
        // Validando Null, Undefined, 0, False, '', NaN.
        console.log(`Tu salario es: ${this.salario ? this.salario : 1000}`)
    }


}

class ContratoGlobal implements IContrato {
    salario?: number;
    fechaInicio?: Date;
    rol: Rol;

    constructor() {
        this.rol = Rol.Middle;
    }

    cancelar?(): void {
        console.log('Contrato cancelado');
    }
    pagar(): number {
        return 2000000;
    }
    suspender(cantidad: number): void {
        console.log(`Estás suspendido por: ${cantidad} meses`);
    }

}
// Son dos objetos de diferentes clases (implementaciones) pero de la misma interfaz.
// Polimorfismo por Interfaz
const contratoJuan: IContrato = new ContratoGlobal();
const contratoJuana: IContrato = new ContratoUltraCredit();

const listaContratos = [contratoJuan, contratoJuana];

listaContratos.forEach((contrato: IContrato) => {
    console.log('================================================================');
    contrato.suspender(3);
    console.log(typeof contrato); // Instanceof me permite saber de que Clase es un Objeto
    if (contrato instanceof ContratoUltraCredit) {
        console.log(contrato.tipoContrato);
    } else if (contrato instanceof ContratoGlobal) {
        contrato.cancelar!(); // Simbolo ! es para utilizar los opcionales (?)
    }
    console.log('================================================================');
});