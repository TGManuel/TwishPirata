import { useState } from "react";
import { Logo } from "./Logo";
import { Input } from "./Input";
import {
    validateUsername,
    validateEmail,
    validatePassword,
    validatePasswordMessage,
    validateConfirPassword,
    validateUsernameMessage,
    emailValidateMessage,
    passwordConfirmationMessage
} from '../shared/validators'

import { useRegister } from "../shared/hooks/useRegister";

export const Register = ({ switchAuthHandler }) => {

    const { register, isLoading } = useRegister()

    const [formState, setFormState] = useState({
        email: {
            value: '',
            isValid: false,
            ShowError: false
        },
        username: {
            value: '',
            isValid: false,
            ShowError: false
        },
        password: {
            value: '',
            isValid: false,
            ShowError: false
        },
        confirmPassword: {
            value: '',
            isValid: false,
            ShowError: false
        }
    });

    const handleInputValueChange =(value, field) => {
        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                value
            }
        }))
    }

    const handleInputValidationOnBlur = (value, field)=>{
        let isValid = false;
        switch (field) {
            case 'email':
                isValid = validateEmail(value);
                break;
            case 'username':
                isValid = validateUsername(value);
                break;
            case 'password':
                isValid = validatePassword(value);
                break;
            case 'passwordConfirm':
                isValid = validateConfirPassword(formState.password.value, value);
                break;
            default:
                break;
        }   
        setFormState((prevState) =>({
            ...prevState,
            [field]: {
                ...prevState[field],
                isValid,
                showError: !isValid
            }
        }));
    }

    const handleRegister = (event) => {
        event.preventDefault()
        register(formState.email.value, formState.username.value, formState.password.value)
    }

    const isSubmitButtonDisabled = isLoading ||
        !formState.email.isValid ||
        !formState.password.isValid ||
        !formState.confirmPassword.isValid ||
        !formState.username.isValid;

    return (
        <div className="register-container">
            <Logo text={'Registe Kinal Cast'}/>
            <form className="auth-form"/>
                <Input
                        field= 'email'
                        label= 'Email'
                        value={formState.email.value}
                        onChangeHandler={handleInputValueChange}
                        type='text'
                        onBlurHandler={handleInputValidationOnBlur}
                        showErrorMessage={formState.email.showError}
                        validationMessage={emailValidateMessage}                    
                />
                <Input
                    field= 'username'
                    label= 'Username'
                    value={formState.username.value}
                    onChangeHandler={handleInputValueChange}
                    type='text'
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.username.showError}
                    validationMessage={validateUsernameMessage}                    
                />
                <Input
                    field= 'password'
                    label= 'Password'
                    value={formState.password.value}
                    onChangeHandler={handleInputValueChange}
                    type='text'
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.password.showError}
                    validationMessage={validatePasswordMessage}                    
                />
                <Input
                    field= 'passwordConfir'
                    label= 'Password Confirmation'
                    value={formState.confirmPassword.value}
                    onChangeHandler={handleInputValueChange}
                    type='password'
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.confirmPassword.showError}
                    validationMessage={passwordConfirmationMessage}                    
                />
                <button onClick={handleRegister} disabled={isSubmitButtonDisabled}>
                    Register
                </button>
            <form/>
            <span onClick={switchAuthHandler} className="auth-form-switch-label">
                Alreday have an account? Sing in
            </span>
        </div>
    )
}

