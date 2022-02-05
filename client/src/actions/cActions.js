import { CONSTANTS } from ".";

export const addCard = ( listID,  text) => {
    return{
        type: CONSTANTS.ADD_SPRINT,
        payload: {text , listID }
    };
};