export function notEmpty(val: string): boolean | string {
    if (typeof val !== 'string' || val.trim().length === 0) {
        return 'Este campo es necesario';
    }

    // Validación adicional: Verificar si contiene solo letras
    const onlyLetters = /^[A-Za-z\s]+$/.test(val);
    if (!onlyLetters) {
        return 'El campo debe contener solo letras';
    }

    return true; // Opcionalmente, puedes devolver `true` si todo está bien.
}