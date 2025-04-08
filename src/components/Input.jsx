import React from 'react'

export const Input = ({
    field, 
    label,
    value,
    onChangeHandler,
    type,
    showErrorMessage,
    validationMessage,
    onBlurHandler,
    textArea,
}) => {

    const handleValueChange = (event) => {
        onChangeHandler(event.target.value, field);
    }

    const handleInputBlur = (event) => {
        onBlurHandler(event.target.value, field);   
    }

  return (
    <>
      <div className='auth-from-label'>
        <span>{label}</span>
      </div>
      <div>
        {textArea ? (
            <textArea>
                type={type}
                value={value}
                onChange={handleValueChange}
                onBlur={handleInputBlur}
                rows={5}
                style={{maxWidth: '400px'}}
            </textArea>
        ) : (
            <input 
                type={type}
                value={value}
                onChange={handleValueChange}
                onBlur={handleInputBlur}    
            />
        )}
        <span className='auth-from-validation-message'>
            {showErrorMessage && validationMessage}
        </span>
      </div>
    </>
  )
}


