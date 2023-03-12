import { createContext, useReducer} from "react";
import { formReducer, initialState } from "../components/hooks/formReducer";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {

  /* REDUCER:
        store ---> almacena la data a medida que se va modifcando
        dispatch ---> funcion que envía lo que quiero modificar
        useReducer ---> recibe 2 parámetros: 1 función reductora y 1 estado inicial. Importa el orden
    */

  const [store, dispatch] = useReducer(formReducer, initialState);

  return <FormContext.Provider value={[store, dispatch]}>{children}</FormContext.Provider>;
};

