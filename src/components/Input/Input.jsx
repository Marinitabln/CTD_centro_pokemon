import React, { useContext, useState } from "react";
import { FormContext } from "../../context/ContextoFormulario";

const Input = ({ name, label, type = "text", rol }) => {

  const [value, setValue] = useState("");
  const [store, dispatch] = useContext(FormContext);

  //const {formValues, setFormValues} = useContext(FormContext); SIN REDUCER

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onBlur = (e) => {
    e.preventDefault();

    //setFormValues({ ...formValues, [e.target.id]: e.target.value }); SIN REDUCER

    dispatch({ type: `ACTUALIZAR_${rol}`, payload: { [e.target.name]: value } });
  };

  return (
    <div className="input-contenedor">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Input;
