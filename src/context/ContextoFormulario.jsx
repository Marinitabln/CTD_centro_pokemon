// Aqui debemos crear nuestro contexto y nuestro provider.
import { createContext, useState } from "react";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formValues, setFormValues] = useState({
    nombre: "",
    apellido: "",
    email: "",
    nombrePokemon: "",
  });

  const data = {
    formValues,
    setFormValues,
  };
  return <FormContext.Provider value={data}>{children}</FormContext.Provider>;
};
