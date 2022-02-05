import { Droppable } from "react-beautiful-dnd";
import { CONSTANTS } from ".";

export const addList = title => {
    return{
        type: CONSTANTS.ADD_LISTS,
        payload: title
    };
};


export const sort = (
    droppableIdStart,
    droppableIdEnd,
    droppableIndexStart,
    droppableIndexEnd,
    droppableId
    
) => {
    return {
        type: CONSTANTS.DRAG_HAPPENED,
        payload : {
            droppableIdStart,
            droppableIdEnd,
            droppableIndexStart,
            droppableIndexEnd,
            droppableId
        }
    };
};