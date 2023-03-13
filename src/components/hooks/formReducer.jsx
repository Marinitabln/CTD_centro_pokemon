/**
 * @typedef {object} estadoInicial
 * @property {entrenador | undefined}  entrenador
 * @property {pokemon | undefined} pokemon
 */

/**
 * @typedef {object} accion
 * @property {string} type
 * @property {object} payload
 */

/**
 * @typedef {object} entrenador
 * @property {string} nombre
 * @property {string} apellido
 * @property {string} email
 */

/**
 * @typedef {object} pokemon
 * @property {string} nombrePokemon
 * @property {string} tipoPokemon
 * @property {string} elementoPokemon
 * @property {number} alturaPokemon
 * @property {number} edadPokemon
 * @property {string} especiePokemon
 */


export const initialState = {
  /**
   * @type {entrenador}
   */
  entrenador: {
    nombre: "",
    apellido: "",
    email: "",
  },
  /**
   * @type {pokemon}
   */
  pokemon: {
    nombre:"",
    tipo: "",
    elemento: "",
    altura: "",
    edad: "",
  },
};

/**
 * funcion para actualizar el estado del entrenador y pokemon
 * @param {estadoInicial} state recibe el estado inicial
 * @param {accion} action recibe la accion para modificar el estado
 * @returns {estadoInicial}
 */

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

