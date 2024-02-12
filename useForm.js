import { useState } from "react";

const capitalize = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

export const useForm = (initialForm = {}) => {
    const [formState, setFormState] = useState(initialForm);
    
      const onInputChange = ({ target }) => {
        const { name, value } = target;
          //console.log(name, value);
          
          const capitalizeValue = name === "username" ? capitalize(value) : value;
        setFormState({
          ...formState,
          [name]: capitalizeValue,
        });
      };
    
    const onResetForm = () => {
        setFormState(initialForm);
     }
    
    return {
        ...formState,
        formState,
        onInputChange, 
        onResetForm,
 }
}
