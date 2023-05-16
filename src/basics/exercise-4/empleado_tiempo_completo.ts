import { Empleado } from "./empleado";
import { TipoEmpleado } from "./tipo_empleado.enum";

export class empleadoTiempoCompleto extends Empleado{
    tipoEmpleado: string;

    constructor (nombre: string, id: number, public salarioMensual: number) {
        super(nombre, id);
        this.tipoEmpleado = TipoEmpleado.TIEMPO_COMPLETO;
    }

    public calcularSalario(): number {
        return this.salarioMensual;
    }

}