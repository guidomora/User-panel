import {useState} from "react";

const useValue = (inicial) => {
    const [value, setValue] = useState(inicial)
    const handleChange = ({target}) => {
      setValue((state) => ({
        ...state,
        [target.name] : target.value,
      }))
    }
  
    console.log(value)
    return[value, handleChange]
}

export default useValue;