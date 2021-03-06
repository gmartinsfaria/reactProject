import {USER_FETCH_ERROR, USER_FETCH_SUCCEEDED} from "../constants/action-types";

const initialState = [];

// Criação do Reducer que vai gerir as operações relativas aos articles
// um Reducer recebe sempre 2 parâmetros:
// 1) o state atual
// 2) a action
const userReducer = (state = initialState, action) => {

    // consoante a action irá executar uma operação diferente
    switch (action.type) {

        case USER_FETCH_SUCCEEDED:
            console.log('user: ', action.payload);
            return [ ...state,  action.payload ];
        case USER_FETCH_ERROR:
            console.log('user fetch error: ', action.message);
        default:
            // devolver sempre o state atual, para o caso de nenhuma das ações acima corresponderem
            return state;
    }
};;

export default userReducer;