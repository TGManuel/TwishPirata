import { useState } from "react";
import { Logo } from "./Logo";
import { Input } from "./Input";
import { 
    emailValidateMessage,
    validateEmail,
    validatePassword,
    validatePasswordMessage    
 } from '../shared/validators'

 import { useLogin } from '../shared/hooks'

 export const Login = ({ switchAuthHandler }) => {

    const { login, isLoading } = useLogin()
 
    const [formState, setFormState] = useState({
        email:{
            value: '',
            isValid: false,
            showError: false
        },
        password:{
            value: '',
            isValid: false,
            showError: false
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
            case 'password':
                isValid = validatePassword(value);
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

    const handleLogin = (event) => {
        event.preventDefault()
        Login(formState.email.value, formState.password.value)
    }

    const isSubmitButtonDisabled = isLoading || !formState.email.isValid || !formState.password.isValid;

    return(
        <div className="login-container">
            <Logo text={'login kinal cast'}/>
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
                    field= 'password'
                    label= 'Password'
                    value={formState.password.value}
                    onChangeHandler={handleInputValueChange}
                    type='text'
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.password.showError}
                    validationMessage={validatePasswordMessage}                    
                />
                <button onClick={handleLogin} disabled={isSubmitButtonDisabled}>
                    Log in
                </button>
                <span onClick={switchAuthHandler} className="auth-form-swith-label">
                    Don't have an account? Sign up
                </span>
        </div>
    )
}


