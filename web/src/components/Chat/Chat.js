import React from "react";
import {Card} from "antd";
import {Col, Modal} from "react-bootstrap";
import fetcingFactory from "../../Utils/external";
import { endpoints } from "../../Utils/Types";
import ConversationsView from "./ConversationView";
import { Button } from "react-bootstrap";
import MessagesView from "./MessagesView";
import CreateConversation from "./CreateConversation";

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
        this.getData = this.getData.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.id) {
            this.setState({userId: nextProps.id})
        }
    }

    componentDidMount() {
        this.getData();
        console.log(this.state);
        
    }

    getData() {
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
                    if (this.state.conversationId) {
                        this.setState({messages: json[this.state.conversationIndex].messages, conversationList: json})
                    } else {
                        this.setState({conversationList: json})
                    }
                } else {
                    this.setState({conversationList: []})
                }
                this.setState({showCreateConversationModal: false})
            }
        )
    }
    receiveConversation(conversationIndex, conversationId){
        this.setState({messages: this.state.conversationList[conversationIndex].messages, conversationIndex: conversationIndex, conversationId : conversationId}, ()=> console.log(this.state.messages))
    }

    render() {
        const createButton = () => {
            return (
                <Button onClick = {() => this.setState({showCreateConversationModal: true})}> Create conversation </Button>
            )
        }
        return (
            <React.Fragment>
            <Modal show = {this.state.showCreateConversationModal} animation = {false}>
            <Modal.Body>
                <CreateConversation updateConversation = {this.getData}/>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick = {()=> this.setState({showCreateConversationModal: false})}> Cancel </Button>
            </Modal.Footer>
            </Modal>
            <Card style = {{width: 1200}}title = {createButton()}>
                <Col md={6}>
                    {<ConversationsView updateParent = {this.receiveConversation} list = {this.state.conversationList}/>
                    }
                </Col>
                <Col md = {6}>
                {this.state.messages && this.state.messages.length > 0?
                    <MessagesView list = {this.state.messages} id = {this.state.conversationId} updateConversation = {this.getData}/>
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
            </React.Fragment>
        )
    }
}