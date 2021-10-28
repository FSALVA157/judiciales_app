export class TablasArray {
    
    public static drop_departamento: any[] = [
        {
            "id_departamento": 1,
            "departamento": "Capital",
            "provincia_id": 3,
            "provincia": {
                "id_provincia": 3,
                "provincia": "SALTA"
            }
        },
        {
            "id_departamento": 2,
            "departamento": "Cerrillos",
            "provincia_id": 3,
            "provincia": {
                "id_provincia": 3,
                "provincia": "SALTA"
            }
        },
        {
            "id_departamento": 3,
            "departamento": "Anta",
            "provincia_id": 3,
            "provincia": {
                "id_provincia": 3,
                "provincia": "SALTA"
            }
        },
        {
            "id_departamento": 4,
            "departamento": "Cachi",
            "provincia_id": 3,
            "provincia": {
                "id_provincia": 3,
                "provincia": "SALTA"
            }
        }
    ]; //array de columnas para dropdown
    public static drop_establecimiento_procedencia: any[] = [
        {
            "id_establecimiento_procedencia": 1,
            "establecimiento_procedencia": "Unidad Carcelaria Nº 1"
        },
        {
            "id_establecimiento_procedencia": 2,
            "establecimiento_procedencia": "Unidad Carcelaria Nº 2"
        },
        {
            "id_establecimiento_procedencia": 3,
            "establecimiento_procedencia": "Unidad Carcelaria Nº 3"
        },
        {
            "id_establecimiento_procedencia": 4,
            "establecimiento_procedencia": "Unidad Carcelaria Nº 4"
        },
        {
            "id_establecimiento_procedencia": 5,
            "establecimiento_procedencia": "Unidad Carcelaria Nº 5"
        },
        {
            "id_establecimiento_procedencia": 6,
            "establecimiento_procedencia": "Unidad Carcelaria Nº 6"
        }
    ]; //array de columnas para dropdown

    public static drop_estado_civil: any[] = [
        {
            "id_estado_civil": 1,
            "estado_civil": "casado"
        },
        {
            "id_estado_civil": 2,
            "estado_civil": "soltero"
        },
        {
            "id_estado_civil": 3,
            "estado_civil": "divorciado"
        },
        {
            "id_estado_civil": 4,
            "estado_civil": "concubinato"
        },
        {
            "id_estado_civil": 5,
            "estado_civil": "viudo"
        }
    ]; //array de columnas para dropdown

    public static drop_estado_procesal: any[] = [
        {
            "id_estado_procesal": 1,
            "estado_procesal": "agregado"
        },
        {
            "id_estado_procesal": 2,
            "estado_procesal": "penado"
        },
        {
            "id_estado_procesal": 3,
            "estado_procesal": "procesado"
        },
        {
            "id_estado_procesal": 4,
            "estado_procesal": "inimputable"
        }
    ]; //array de columnas para dropdown 

    public static drop_jurisdiccion: any[] = [
        {
            "id_jurisdiccion": 1,
            "jurisdiccion": "federal"
        },
        {
            "id_jurisdiccion": 2,
            "jurisdiccion": "provincial"
        }
    ]; //array de columnas para dropdown 

    public static drop_juzgado: any[] = [
        {
            "id_juzgado": 1,
            "juzgado": "camara 1ra en lo criminal"
        },
        {
            "id_juzgado": 2,
            "juzgado": "camara 2da en lo criminal"
        },
        {
            "id_juzgado": 3,
            "juzgado": "camara 3ra en lo criminal"
        },
        {
            "id_juzgado": 4,
            "juzgado": "juzgado correccional N°1"
        },
        {
            "id_juzgado": 5,
            "juzgado": "juzgado correccional N°2"
        },
        {
            "id_juzgado": 6,
            "juzgado": "juzgado correccional N°3"
        },
        {
            "id_juzgado": 7,
            "juzgado": "juzgado correccional N°4"
        },
        {
            "id_juzgado": 8,
            "juzgado": "juzgado correccional N°5"
        }
    ]; //array de columnas para dropdown 

    public static drop_nacionalidad: any[] = [
        {
            "id_nacionalidad": 1,
            "nacionalidad": "argentina"
        },
        {
            "id_nacionalidad": 2,
            "nacionalidad": "boliviana"
        },
        {
            "id_nacionalidad": 3,
            "nacionalidad": "chilena"
        },
        {
            "id_nacionalidad": 4,
            "nacionalidad": "brasileña"
        }
    ]; //array de columnas para dropdown 

    public static drop_nariz_forma: any[] = [
        {
            "id_nariz_forma": 1,
            "nariz_forma": "reprimida"
        },
        {
            "id_nariz_forma": 2,
            "nariz_forma": "aguileña"
        },
        {
            "id_nariz_forma": 3,
            "nariz_forma": "aplastada"
        },
        {
            "id_nariz_forma": 4,
            "nariz_forma": "deprimida"
        },
        {
            "id_nariz_forma": 5,
            "nariz_forma": "recta"
        },
        {
            "id_nariz_forma": 6,
            "nariz_forma": "respingada"
        },
        {
            "id_nariz_forma": 7,
            "nariz_forma": "torcida"
        }
    ]; //array de columnas para dropdown 

    public static drop_nariz_tamanio: any[] = [
        {
            "id_nariz_tamanio": 1,
            "nariz_tamanio": "pequeño"
        },
        {
            "id_nariz_tamanio": 2,
            "nariz_tamanio": "mediano"
        },
        {
            "id_nariz_tamanio": 3,
            "nariz_tamanio": "grande"
        }
    ]; //array de columnas para dropdown 

    public static drop_nivel_educacion: any[] = [
        {
            "id_nivel_educacion": 1,
            "nivel_educacion": "Primario completo"
        },
        {
            "id_nivel_educacion": 2,
            "nivel_educacion": "Primario incompleto"
        },
        {
            "id_nivel_educacion": 3,
            "nivel_educacion": "Secundario completo"
        },
        {
            "id_nivel_educacion": 4,
            "nivel_educacion": "Secundario incompleto"
        },
        {
            "id_nivel_educacion": 5,
            "nivel_educacion": "Terciario completo"
        },
        {
            "id_nivel_educacion": 6,
            "nivel_educacion": "Terciario incompleto"
        }
    ]; //array de columnas para dropdown 

    public static drop_oficio: any[] = [
        {
            "id_oficio": 1,
            "oficio": "carpintero"
        },
        {
            "id_oficio": 2,
            "oficio": "albañil"
        },
        {
            "id_oficio": 3,
            "oficio": "plomero"
        },
        {
            "id_oficio": 4,
            "oficio": "electricista"
        }
    ]; //array de columnas para dropdown 

    public static drop_ojos_color: any[] = [
        {
            "id_ojos_color": 1,
            "ojos_color": "azules"
        },
        {
            "id_ojos_color": 2,
            "ojos_color": "grises"
        },
        {
            "id_ojos_color": 3,
            "ojos_color": "marrones"
        },
        {
            "id_ojos_color": 4,
            "ojos_color": "negros"
        },
        {
            "id_ojos_color": 5,
            "ojos_color": "verdes"
        }
    ]; //array de columnas para dropdown 

    public static drop_ojos_tamanio: any[] = [
        {
            "id_ojos_tamanio": 1,
            "ojos_tamanio": "pequeños"
        },
        {
            "id_ojos_tamanio": 2,
            "ojos_tamanio": "medianos"
        },
        {
            "id_ojos_tamanio": 3,
            "ojos_tamanio": "grandes"
        }
    ]; //array de columnas para dropdown 

    public static drop_pabellon: any[] = [
        {
            "id_pabellon": 1,
            "pabellon": "pabellon A"
        },
        {
            "id_pabellon": 2,
            "pabellon": "pabellon B"
        },
        {
            "id_pabellon": 3,
            "pabellon": "pabellon C"
        },
        {
            "id_pabellon": 4,
            "pabellon": "pabellon D"
        },
        {
            "id_pabellon": 5,
            "pabellon": "pabellon E"
        },
        {
            "id_pabellon": 6,
            "pabellon": "pabellon F"
        },
        {
            "id_pabellon": 7,
            "pabellon": "pabellon G"
        },
        {
            "id_pabellon": 8,
            "pabellon": "pabellon H"
        },
        {
            "id_pabellon": 9,
            "pabellon": "pabellon I"
        },
        {
            "id_pabellon": 10,
            "pabellon": "pabellon J"
        },
        {
            "id_pabellon": 11,
            "pabellon": "pabellon K"
        },
        {
            "id_pabellon": 12,
            "pabellon": "pabellon M"
        }
    ]; //array de columnas para dropdown 

    public static drop_pelo_color: any[] = [
        {
            "id_pelo_color": 1,
            "pelo_color": "marron"
        },
        {
            "id_pelo_color": 2,
            "pelo_color": "negro"
        },
        {
            "id_pelo_color": 3,
            "pelo_color": "rubio"
        },
        {
            "id_pelo_color": 4,
            "pelo_color": "castaño"
        },
        {
            "id_pelo_color": 5,
            "pelo_color": "canoso"
        },
        {
            "id_pelo_color": 6,
            "pelo_color": "gris"
        },
        {
            "id_pelo_color": 7,
            "pelo_color": "platinado"
        },
        {
            "id_pelo_color": 8,
            "pelo_color": "rojizo"
        }
    ]; //array de columnas para dropdown

    public static drop_pelo_tipo: any[] = [
        {
            "id_pelo_tipo": 1,
            "pelo_tipo": "crespo"
        },
        {
            "id_pelo_tipo": 2,
            "pelo_tipo": "lasio"
        },
        {
            "id_pelo_tipo": 3,
            "pelo_tipo": "mulato"
        },
        {
            "id_pelo_tipo": 4,
            "pelo_tipo": "ondulado"
        },
        {
            "id_pelo_tipo": 5,
            "pelo_tipo": "calvo"
        }
    ]; //array de columnas para dropdown 

    public static drop_piel: any[] = [
        {
            "id_piel": 1,
            "piel": "amarilla"
        },
        {
            "id_piel": 2,
            "piel": "blanca"
        },
        {
            "id_piel": 3,
            "piel": "negra"
        },
        {
            "id_piel": 4,
            "piel": "trigueña"
        }
    ]; //array de columnas para dropdown 

    public static drop_provincia: any[] = [
        {
            "id_provincia": 1,
            "provincia": "BUENOS AIRES"
        },
        {
            "id_provincia": 2,
            "provincia": "CATAMARCA"
        },
        {
            "id_provincia": 3,
            "provincia": "SALTA"
        }
    ]; //array de columnas para dropdown 

    public static drop_reincidencia: any[] = [
        {
            "id_reincidencia": 1,
            "reincidencia": "primario"
        },
        {
            "id_reincidencia": 2,
            "reincidencia": "reincidente 1ra vez"
        },
        {
            "id_reincidencia": 3,
            "reincidencia": "reincidente 2da vez"
        },
        {
            "id_reincidencia": 4,
            "reincidencia": "reincidente 3ra vez"
        },
        {
            "id_reincidencia": 5,
            "reincidencia": "reincidente 4ta vez"
        }
    ]; //array de columnas para dropdown 

    public static drop_reingreso: any[] = [
        {
            "id_reingreso": 1,
            "reingreso": "primario"
        },
        {
            "id_reingreso": 2,
            "reingreso": "reingreso"
        }
    ]; //array de columnas para dropdown 

    public static drop_religion: any[] = [
        {
            "id_religion": 1,
            "religion": "catolico"
        },
        {
            "id_religion": 2,
            "religion": "evangelico"
        },
        {
            "id_religion": 3,
            "religion": "testigo de jehova"
        }
    ]; //array de columnas para dropdown 

    public static drop_sexo: any[] = [
        {
            "id_sexo": 1,
            "sexo": "masculino"
        },
        {
            "id_sexo": 2,
            "sexo": "femenino"
        },
        {
            "id_sexo": 3,
            "sexo": "homosexual"
        },
        {
            "id_sexo": 4,
            "sexo": "transexual"
        }
    ]; //array de columnas para dropdown 

    public static drop_tipo_condena: any[] = [
        {
            "id_tipo_condena": 1,
            "tipo_condena": "medida de seguridad"
        },
        {
            "id_tipo_condena": 2,
            "tipo_condena": "prision"
        },
        {
            "id_tipo_condena": 3,
            "tipo_condena": "reclusion"
        }
    ]; //array de columnas para dropdown 

    public static drop_tipo_defensor: any[] = [
        {
            "id_tipo_defensor": 1,
            "tipo_defensor": "oficial"
        },
        {
            "id_tipo_defensor": 2,
            "tipo_defensor": "particular"
        }
    ]; //array de columnas para dropdown 

    public static drop_tipo_delito: any[] = [
        {
            "id_tipo_delito": 1,
            "tipo_delito": "microtrafico"
        },
        {
            "id_tipo_delito": 2,
            "tipo_delito": "delito contra las personas"
        },
        {
            "id_tipo_delito": 3,
            "tipo_delito": "delito contra el honor"
        }
    ]; //array de columnas para dropdown 

    public static drop_unidad: any[] = [
        {
            "id_unidad": 1,
            "unidad": "U.C.N° 1"
        },
        {
            "id_unidad": 2,
            "unidad": "U.C.N° 2"
        },
        {
            "id_unidad": 3,
            "unidad": "U.C.N° 3"
        },
        {
            "id_unidad": 4,
            "unidad": "U.C.N° 4"
        },
        {
            "id_unidad": 5,
            "unidad": "U.C.N° 5"
        },
        {
            "id_unidad": 6,
            "unidad": "U.C.N° 6"
        },
        {
            "id_unidad": 7,
            "unidad": "U.C.N° 7"
        }
    ]; //array de columnas para dropdown     

    public static drop_zona_residencia: any[] = [
        {
            "id_zona_residencia": 1,
            "zona_residencia": "urbana"
        },
        {
            "id_zona_residencia": 2,
            "zona_residencia": "rural"
        }
    ]; //array de columnas para dropdown 
     
    
}