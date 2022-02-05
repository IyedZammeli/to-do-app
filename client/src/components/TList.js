import React from "react";
import Tsprint from "./Tsprint";
import TActionButton from "./TActionButton";
import { Droppable } from "react-beautiful-dnd";
import { Button } from "@material-ui/core";






const TLists =({title, cards, listID })=> {
 
    return(
        <Droppable droppableId={ String (listID)} >

            {provided => (

                
                <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                 style={styles.container}>
                <h4>{title}</h4>
                    { cards.map( (card , index )  => (
                    <Tsprint  
                      key={card.id}  
                      index={index}  
                      text ={card.text} 
                      id={card.id}
                        />

                    ) ) }
                 <TActionButton listID={listID} />
                 {provided.placeholder}
                 <div  >
                     <Button>Export </Button>
                 </div>
                </div>

            ) }
        
        </Droppable>
    );
};


const styles = {
    container: {
        backgroundColor: "#32CD32",
        borderRadius:3,
        width: 300,
        padding: 8,
        height: "100%",
        marginRight:8
    }
};



export default TLists;
