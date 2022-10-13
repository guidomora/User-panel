import React from "react";
import Input from "./Input";
import Boton from "./Boton";
import useValue from "../Hooks/useValue";
import "../Styles/UserForm.css";

const UserForm = ({ submit }) => {
  const [value, handleChange, reset] = useValue({
    nombre: "",
    apellido: "",
    mail: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    submit(value);
    reset();
  };
  return (
    <form onSubmit={handleSubmit} className="form">
      <Input
        label="Nombre"
        type="text"
        name="nombre"
        value={value.nombre}
        onChange={handleChange}
      />
      <Input
        label="Apellido"
        type="text"
        name="apellido"
        value={value.apellido}
        onChange={handleChange}
      />
      <Input
        label="Email"
        type="email"
        name="mail"
        value={value.mail}
        onChange={handleChange}
      />
      <Boton>Enviar</Boton>
    </form>
  );
};

export default UserForm;
