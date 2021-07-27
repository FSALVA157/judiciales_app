
export class InternoModel {
    public id_interno!: number;
    public prontuario!: number;
    public apellido_1!: string;
    public apellido_2!: string;
    public nombre_1!: string;
    public nombre_2!: string;
    public nombre_3!: string;
    public alias!: string;
    public dni!: number;    
    public sexo_id!: number;
    public estado_civil_id!: number;
    public telefono!: string;
    public domicilio!: string;
    public departamento_id!: number; 
    public zona_residencia_id!: number;
    public nacionalidad_id!: number;
    public departamento_nacimiento_id!: number;
    public fecha_nacimiento!: Date;  
    public lugar_nacimiento!: string;
    public padre!: string;
    public madre!: string;
    public parientes!: string;
    public referente_emergencia!: string;
    public nivel_educacion_id!: number;
    public profesion!: string;
    public ultimo_oficio_id!: number;
    public religion_id!: number;
    public talla!: string;
    public ojos_color_id!: number;
    public ojos_tamanio_id!: number;
    public nariz_tamanio_id!: number;
    public nariz_forma_id!: number;
    public pelo_tipo_id!: number;
    public pelo_color_id!: number;
    public piel_id!: number;
    public marca_corporal!: number;
    public unidad_id!: number;
    public pabellon_id!: number;
    public establecimiento_procedencia_id!: number;
    public reingreso_id!: number;
    public reingreso_num!: number;
    public fecha_ingreso!: Date; 
    public causa_penal!: string;
    public tipo_condena_id!: number;
    public expediente_numero!: string;
    public prontuario_policial!: string;
    public expediente_policial!: string;
    public estado_procesal_id!: number;
    public tipo_delito_id!: number;
    public jurisdiccion_id!: number;
    public reincidencia_id!: number;
    public reincidencia_num!: number;
    public juzgado_id!: number;
    public detenciones!: string;
    public jurisdiccion_provinicia_id!: number;
    public fecha_detencion!: Date; 
    public condena_juzgado_id!: number;
    public total_anios!: number;
    public total_meses!: number;
    public total_dias!: number;
    public computo!: number;
    public fecha_cumple!: Date; 
    public tipo_defensor_id!: number;
    public abogado!: string;

 
    // public get prontuario() {
    //     return this._prontuario;
    // }

    // public set prontuario(prontuario: number) {
    //     this._prontuario = prontuario;
    // }

    // public get apellido_1() {
    //     return this._apellido_1;
    // }

    // public set apellido_1(apellido_1: string) {
    //     this._apellido_1 = apellido_1;
    // }

    // public get age() {
    //     return this._age;
    // }

    // public set age(theAge: number) {
    //     // if (theAge <= 0 || theAge >= 200) {
    //     //     throw new Error('The age is invalid');
    //     // }
    //     this._age = theAge;
    // }

    // public getFullName(): string {
    //     return `${this._firstName} ${this._lastName}`;
    // }
}