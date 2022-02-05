import React  from "react";
import { Button, Card } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { Draggable } from "react-beautiful-dnd";
import { Icon } from "@material-ui/core";

const Tsprint =({text, id, index})=> {
    return(


        <Draggable draggableId={String(id)} index={index} >

            {provided => (
                    <div ref={provided.innerRef}  {...provided.draggableProps}
                     {...provided.dragHandleProps}
                     >
                      <Card style={styles.cardContainer}>
                      <CardContent>
                      <Icon style ={{
                            marginLeft: 8,
                            cursor: "pointer"
                        }}  >
                                close </Icon>

                                <Icon style ={{
                            marginLeft: 8,
                            cursor: "pointer"
                        }} >
                                modeediticon
                                </Icon>
                                 
                       <Typography  gutterBottom>
                         {text}
                       </Typography>
                       </CardContent>  
                       </Card>
                       
                       <div>
                         
                       </div>
                    </div>   
            )  }


      
        </Draggable>
    );
};

const styles = {
    cardContainer: {
        marginBottom: 8
    }
}


export default Tsprint;