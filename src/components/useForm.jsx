import { useState } from 'react';


export const useForm = (initialValue) => {

    const [values, setValues] = useState(initialValue);
    
    
    
    return [values, event => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        })
    }]
}
 
export default useForm;