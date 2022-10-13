import {useState} from "react";

const useValue = (inicial) => {
    const [value, setValue] = useState(inicial)
    const handleChange = (e) => {
      setValue({
        ...value,
        [e.target.name] : e.target.value,
      })
    }

    const reset = () => {
      setValue(inicial)
    }
  
    return[value, handleChange, reset]
}

export default useValue;