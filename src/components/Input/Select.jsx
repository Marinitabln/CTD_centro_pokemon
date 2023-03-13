import React, { useContext } from 'react';
import { getType } from '../hooks/getType';
import { FormContext } from '../../context/ContextoFormulario';
import { useQuery } from 'react-query';
import PropTypes from 'prop-types';

function Select({ name, label, rol }) {
    const [store, dispatch] = useContext(FormContext);
    const { isLoading, isSuccess, data } = useQuery('typeKey', getType);
   

    const onBlur = (e) => {
        e.preventDefault();
        dispatch({
          type: `ACTUALIZAR_${rol}`,
          payload: { [e.target.name]: e.target.value },
        });
    };

    return (
        <div className='input-contenedor'>
            <label htmlFor={name}> {label} </label>
            <select
                name={name}
                disabled={!isSuccess || isLoading}
                onBlur={onBlur}
            >
                {data &&
                    !isLoading &&
                    data?.results.map((item, index) => (
                        <option key={index} value={item.name}>
                            {item.name}
                        </option>
                    ))}
            </select>
        </div>
    );
}

export default Select;

Select.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    rol: PropTypes.string,
};
