export const validatePassword =(password) => {
    const regex = /^\S{6,12}$/;
    return regex.text(password)
}

export const validatePasswordMessage = 'La contrasena '