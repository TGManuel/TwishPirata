export const validateUsername = (username) =>{
    const regex = /^\S{3,8}$/;
    return regex.test(username);
}

export const validateTitleMessage = 'blablabla'