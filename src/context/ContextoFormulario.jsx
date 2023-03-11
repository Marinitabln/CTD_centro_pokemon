// Aqui debemos crear nuestro contexto y nuestro provider.
import { createContext, useReducer} from "react";
import { formReducer, initialState } from "../components/hooks/formReducer";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  /*  const [formValues, setFormValues] = useState({
    nombre: "",
    apellido: "",
    email: "",
    nombrePokemon: "",
  }); */

  /* REDUCER:
        store ---> almacena la data a medida que se va modifcando
        dispatch ---> funcion que envía lo que quiero modificar
        useReducer ---> recibe 2 parámetros: 1 función reductora y 1 estado inicial
    */

  const [store, dispatch] = useReducer(formReducer, initialState);

  /*   const data = {
    formValues,
    setFormValues,
  }; */

  return <FormContext.Provider value={[store, dispatch]}>{children}</FormContext.Provider>;
};
