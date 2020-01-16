import React from "react";
import {Card, Avatar} from "antd";
import {Button} from "react-bootstrap";
import fetcingFactory from "../../Utils/external";
import { endpoints } from "../../Utils/Types";

export default class MessagesView extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            list: this.props.list,
            conversationId: this.props.id,
            messageInput: ""
        }
        this.submitMessage = this.submitMessage.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.list && nextProps.id) {
            this.setState({list: nextProps.list, conversationId: nextProps.id}, () => console.log(this.state));
        }
    }

    submitMessage() {
        let params ={
            "band": null,
            "content": this.state.messageInput,
            "conversationId": this.state.conversationId
        }
        fetcingFactory(endpoints.SEND_MESSAGE, JSON.stringify(params)).then(
            response => {
                if (response.ok) {
                    this.setState({messageInput: ""}, ()=> this.props.updateConversation())
                } else {
                    alert("Something went wrong!")
                }
            }
        )
    }
    render() {
        return (
            <div>
            {
                this.state.list && this.state.list.length > 0?
                    this.state.list.map(element => {
                        return (
                        <Card title = {element.sender.name} extra = {element.sentTime}>
                        <Avatar src = {element.sender.pictureUrl}/> {element.content}
                        </Card>)
                    }) : "No messages! Why don't you start a conversation?"
            }

            <input className = "form-control" placeholder="Write a message..." onChange = {(e) => this.setState({messageInput: e.currentTarget.value})}value = {this.state.messageInput}>
            </input>
                <Button onClick = {this.submitMessage}> Send </Button>         
            </div>
        )
    }
}