import { CREATE_CHARACTER, DELETE_CHARACTER, GET_CHARACTERS } from "./actions";

const initialstate = {
    characters: [],
    detail: {},
}

const rootReducer =  (state =initialstate, action) => {

    switch(action.type){
        case GET_CHARACTERS:
            return{
                ...state,
                characters: action.payload,
            };

            case DELETE_CHARACTER:
                return{
                    ...state,
                    characters: state.characters.filter(
                        (char) => char.id !== action.payload),

                };

            case CREATE_CHARACTER:
                return{
                    ...state,
                    characters: [...state.characters, action.payload]
                };

            
        //......................................................//
        default:
            return {
                ...state, //primero armo el default que retorna una copia del estado//
            };
    }
};


export default rootReducer;