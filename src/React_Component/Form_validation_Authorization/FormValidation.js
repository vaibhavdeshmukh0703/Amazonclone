import React,{useState} from 'react';

function FormValidation(e) {
    
   const value = {}
    const [values, setValues] = useState(value)
    
    console.log( e.target.name, e.target.value);  
    const handleSubmit=(e)=>{
        setValues(
            
            e.target.name = e.target.value
        )
       
    }
    return value
}

export default FormValidation;
