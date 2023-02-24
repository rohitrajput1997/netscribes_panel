const passwordValidation = (password) => {
    const pattern = /(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,}).*$/;
    if (password.match(pattern)) {
        return true;
    }

    return false;
};

export default passwordValidation;
