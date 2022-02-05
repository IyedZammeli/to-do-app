import React, { Component } from "react";
import TLists from "./TList";
import {connect} from "react-redux";
import TActionButton from "./TActionButton";
import { DragDropContext } from "react-beautiful-dnd";
import { sort } from "../actions";
import styled from "styled-components";













class App extends Component 
{



  onDragEnd = (result) => {
    const {destination, source, draggableId} = result;


    if(!destination) {
      return;
    }


    this.props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId
      )
    );

      
  };

  render() {
    const { lists } = this.props;

    
  return (

    <DragDropContext onDragEnd={this.onDragEnd} >


    <div >
    <h2> Task lists app</h2>


      <div style={styles.listContainer}>
    { lists.map(list => 
    (<TLists   
        listID = {list.id}
        key={list.id} 
        title={list.title} 
        cards={list.cards} />
      )
    )}
        <TActionButton list />
     </div>
    </div>
    </DragDropContext>
  );
}
}

const styles = {
  listContainer: {
    display: "flex",
    flexDirection: "row"
  }
};

const mapStateToProps = state => ({
  lists: state.lists
});

export default connect (mapStateToProps) (App);
