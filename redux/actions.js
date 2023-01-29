
export const GET_CHARACTERS = "GET_CHARACTERS"; // DEFINO UNA CONST PARA NO USAR UN STRING Y TENER ERRORES QUE REDUX NO VA A DETECTAR, PERO SI LO HACE SI PONGO OTRA VARIABLE//
export const DELETE_CHARACTER = "DELETE_CHARACTER";
export const CREATE_CHARACTER = "CREATE_CHARACTER";

export const getCharacters = () => {
    return function (dispatch) {
    fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data) => dispatch({ type: GET_CHARACTERS, payload: data.results}));
};
};

export const deleteCharacter = (id) => {
    return {
        type: DELETE_CHARACTER,
        payload: id,
    };
};

export const createCharacter = (character) => {
    return {
        type: CREATE_CHARACTER,
        payload: character,
    }

}