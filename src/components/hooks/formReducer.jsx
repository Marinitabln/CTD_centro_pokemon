export const initialState = {
  entrenador: {
    nombre: "",
    apellido: "",
    email: "",
  },
  pokemon: {
    nombre: "",
    tipo: "",
    elemento: "",
    altura: "",
    edad: "",
  },
};

export const formReducer = (state, action) => {
  console.log(state, action.type);
  switch (action.type) {
    case "ACTUALIZAR_ENTRENADOR":
      return {
        ...state,
        entrenador: { ...state.entrenador, ...action.payload },
      };

    case "ACTUALIZAR_POKEMON":
      return {
        ...state,
        pokemon: { ...state.pokemon, ...action.payload },
      };
    default:
      return state;
  }
};
