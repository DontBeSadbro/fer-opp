import React from "react";
import {Button} from "react-bootstrap";
import fetcingFactory from "../../Utils/external";
import { endpoints } from "../../Utils/Types";


export default class CreateConversation extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            pictureUrl: "",
            title: ""
        }
        this.createConversation = this.createConversation.bind(this);
    }
    
    createConversation() {
        let params = {
            title: this.state.title,
            pictureUrl: this.state.pictureUrl
        }
        fetcingFactory(endpoints.CREATE_CONVERSATION, JSON.stringify(params)).then(
            response => {
                if (response.ok) {
                    this.props.updateConversation()
                } else {
                    alert("Error creating conversation")
                }
            }
        )
    }
    render() {
        return (
            <React.Fragment>
                <input className = "form-control" onChange = {(e) => this.setState({pictureUrl: e.currentTarget.value})} value = {this.state.pictureUrl} placeHolder = "Conversation picture url"/>
                <br></br>
                <input className = "form-control" onChange = {(e) => this.setState({title: e.currentTarget.value})} value = {this.state.title} placeHolder = "Conversation title"/>

                <br></br>
                <Button variant="success" onClick = {this.createConversation}> Create </Button>
            </React.Fragment>
        )
    }
}