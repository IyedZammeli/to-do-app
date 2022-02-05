import { CONSTANTS } from "../actions";



let listID= 3;

let cardID =7;




const initialState = [
    {
        title: "Open Tasks",
        id: `list-${0}`,
        cards: [
            {
                id:`card-${0}`,
                text:" Routing the app"
            },
             {
                 id:`card-${1}`,
                 text: "Creating github Repositry"
             }
        ]
    },
    {
        title: "In progress",
        id: `list-${1}`,
        cards: [
            {
                id:`card-${2}`,
                text:" Installing packages"
            },
             {
                 id:`card-${3}`,
                 text: "Creating the Database"
             },
             {
                 id:`card-${3}`,
                 text:"Installing express package"
             }
        ]
    },
    {
        title: "Complete tasks",
        id: `card-${2}`,
        cards: [
            {
                id:`card-${4}`,
                text:" updating the app"
            },
             {
                 id:`card-${5}`,
                 text: "solving problems"
             },
             {
                 id:`card-${6}`,
                 text:"Deploy project "
             }
        ]
    }
];


const ListReducer = (state = initialState , action) => {
    switch (action.type) {

        
        case CONSTANTS.ADD_LISTS:
            const newList = {
                title: action.payload,
                cards: [],
                id: `list-${listID}`
            };
            listID += 1;
            return[...state, newList];


        case CONSTANTS.ADD_SPRINT: {
        const newCard = {
            text: action.payload.text,
            id: `card-${cardID}`
        }
        cardID += 1;


        const newState =  state.map(list => {
            if(list.id === action.payload.listID){
                return {
                    ...list,
                    cards: [...list.cards, newCard]
                };

            }else {
                return list;
            }
        } );
        

        return newState;
        }


        case CONSTANTS.DRAG_HAPPENED:

            const {
                droppableIdStart,
                droppableIdEnd,
                droppableIndexStart,
                droppableIndexEnd,
                droppableId
             } = action.payload;
             
            const newState = [...state];
            if(droppableId === droppableIdEnd ) {
                const list = state.find(list => droppableIdStart === list.id );
                const Card = list.cards.splice(droppableIndexStart,1 )
                list.cards.splice(droppableIndexEnd, 0, ...  Card )
            }

                return newState;

            

        default:
            return state;
    }
};

export default ListReducer;