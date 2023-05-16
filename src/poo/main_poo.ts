import { Comercial } from './Comercial';
import { Residencial } from './Residencial';
import { Hombre } from "./Hombre";
import { IPersona } from "./IPersona";
import { Mujer } from "./Mujer";
import { Construccion } from './Construccion';


const hombre1: IPersona = new Hombre( 'Samuel', 'Zapata' );
hombre1.edad = 29;
hombre1.nombre_completo();

const hombre2: IPersona = new Hombre();
hombre2.edad = 18;
hombre2.nombre_completo();

const hombre3: IPersona = new Hombre('Juanito Alimaña');
hombre3.edad = 18;
hombre3.nombre_completo();

const hombre4: IPersona = new Hombre(undefined, 'Pana Miguel');
hombre4.edad = 18;
hombre4.nombre_completo();

const mujer: IPersona = new Mujer('Diana', 'Jaramillo');

const residencial = new Residencial(6);
console.log(residencial.impuestos());

const comercial = new Comercial(3, 25);
console.log(comercial.impuestos());

console.log(`La constructoras bienes y buenes hizo ${Construccion.edificios_contador()} construcciones.`);