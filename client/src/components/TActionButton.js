import React from "react";
import { Card, Icon } from "@material-ui/core";
import { render } from "@testing-library/react";
import TextareaAutosize from "react-textarea-autosize";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import { addList, addCard } from "../actions";




class TActionButton extends React.Component {


    state = {
        formOpen: false,
        text: ""
    }


    openForm = () => {
        this.setState({
            formOpen: true
        });
    };


    closeForm = e => {
        this.setState({
            formOpen: false
        });
    };


    handleInputChange = e =>{
        this.setState({
            text: e.target.value
        });
    };




    handleAddList = () => {
        const {dispatch} = this.props;
        const {text} = this.state;

        if (text) {
            this.setState({
                text:""
            });
            dispatch(addList(text));
        }
        return;
    };



    handleAddCard = () => {
        const {dispatch, listID} = this.props;
        const {text} = this.state;

        if(text) {
            this.setState({
                text:""
            });
            dispatch(addCard( listID ,text));
        }
    }


    renderAddButton = () => {
        const { list } = this.props;
        
        
        const buttonText = list ? "Add another list": "Add Another Sprint";
        const buttonTextOpacity = list ? 1 : 0.5;
        const buttonTextColor = list ? "white" : "inherit";
        const buttonTextBackground = list ? "rgba(0,0,0,.15)" : "inherit";



        return (
            <div 
                onClick={this.openForm}
                 style={{
                ...styles.openFormButtonGroup,
                 opacity: buttonTextOpacity ,
                 color: buttonTextColor,
                 backgroundColor: buttonTextBackground}}   >
                <Icon>add</Icon>
                <p>{buttonText}</p>
            </div>
        );
            

    };



    renderForm = () => {

        const {list} = this.props;

        const placeholder = list ? 
        "Enter a title for the list.." :
         "Enter a title for the sprint";
        
         const buttonTitle = list 
         ? "Add list "
         : "Add Sprint";


        return   <div>
                    <Card
                        style={{
                         
                            minHeight: 80,
                            minWidth: 272,
                            padding: "6px 8px 2px"
                        }}
                    >
                        <TextareaAutosize
                            placeholder={placeholder}
                            autoFocus
                            onBlur={this.closeForm}
                            value={this.state.text}
                            onChange={this.handleInputChange}
                            style={{
                                resize:"none",
                                width:"100%",
                                overflow: "hidden",
                                outline: "none",
                                borders:"none"
                            }}
                        />
                    </Card>

                    <div style={styles.openFormButtonGroup}>
                        <Button

                        onMouseDown={list ? this.handleAddList: this.handleAddCard }
                        variant="contained" style={{color:"white", backgroundColor:"#FFBF00"}}
                        > {buttonTitle}{" "} 
                        </Button>
                        <Icon style ={{
                            marginLeft: 8,
                            cursor: "pointer"
                        }}>
                            closeForm
                        </Icon>
                        


                    </div>

                </div>
    }; 


    render() {
        return  this.state.formOpen ? this.renderForm() : this.renderAddButton()
    }

}

const styles = {
    openFormButtonGroup: {
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        borderRadius: 3,
        height: 36,
        width:272,
        paddingLeft: 10
    },
    formButtonGroup: {
        marginTop: 8,
        display: "flex",
        alignItems: "center"
    }
};

export default connect() (TActionButton);