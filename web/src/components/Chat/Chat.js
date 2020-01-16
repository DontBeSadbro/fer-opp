import React from "react";
import {Card} from "antd";
import {Col} from "react-bootstrap";
import fetcingFactory from "../../Utils/external";
import { endpoints } from "../../Utils/Types";
import ConversationsView from "./ConversationView";
import { Button } from "react-bootstrap";
import MessagesView from "./MessagesView";

export default class Chat extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userId: this.props.id,
            tabs: [{selected: true}, {selected: false}],
            conversationList: [],
            conversationId: "",
            messages: []
        }

        this.receiveConversation = this.receiveConversation.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.id) {
            this.setState({userId: nextProps.id})
        }
    }

    componentDidMount() {
        fetcingFactory(endpoints.GET_PERSONAL_CONVERSATIONS).then(
            response => {
                if (response.ok) {
                    return (response.json())
                } else {
                    alert("There was a problem fetching your conversations. Please try again")
                }
            }
        ).then(
            json => {
                if (json) {
                    this.setState({conversationList: json})
                } else {
                    this.setState({conversationList: []})
                }
            }
        )
    }

    receiveConversation(conversationIndex){
        this.setState({messages: this.state.conversationList[conversationIndex].messages}, ()=> console.log(this.state.messages))
    }

    render() {
        const createButton = () => {
            return (
                <Button onClick = {() => this.showCreateConversationModal}> Create conversation </Button>
            )
        }
        return (
            <Card style = {{width: 1200}}title = {createButton()}>
                <Col md={6}>
                    {<ConversationsView updateParent = {this.receiveConversation} list = {this.state.conversationList}/>
                    }
                </Col>
                <Col md = {6}>
                {this.state.messages.length > 0?
                    <MessagesView list = {this.state.messages}/>
                    :
                    <div>
                     {
                         this.state.conversationList.length === 0?
                            createButton() : "Click on conversation to view messages"
                     }
                    </div>
                }
                </Col>
            </Card>
        )
    }
}