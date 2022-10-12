import React from "react";
import useValue from "./Hooks/useValue";
import Input from "./Components/Input";


function App() {
  const [value, handleChange] = useValue({nombre: "", apellido: "", mail: ""})
  return (
    <form>
      <Input label="Nombre" type="text" name="nombre" value={value.nombre} onChange={handleChange}/>
      <Input label="Apellido" type="text" name="apellido" value={value.apellido} onChange={handleChange}/>
      <Input  label="Email" type="email" name="mail" value={value.mail} onChange={handleChange}/>
      <button type="submit" > Enviar </button>
    </form>
  );
}

export default App;
