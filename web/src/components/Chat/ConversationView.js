import React from "react";
import {Card, Avatar} from "antd"

export default class ConversationsView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            conversationList: [],

            clickedConversation: ""
        }
        this.handleConversationList = this.handleConversationList.bind(this);
    }
    
    handleConversationList(list) {
        let helperList = []
       if (list && list.length > 0) {
           helperList = list.map(element => {
                let participants = element.participantsId.map(participant => {
                    return participant.name
                });
                let pictureUrl = element.pictureUrl;
                let title = element.title
                let messages = element.messages
                return {participants, pictureUrl, title, messages}
            })
            this.setState({conversationList: helperList}, ()=> console.log(this.state))
       } else {
           this.setState({conversationList: []})
       }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.list) {
           this.handleConversationList(nextProps.list)
        } else {
            this.setState({conversationList: []})
        }
    }

    render() {
        return (
            this.state.conversationList.map((element, index) => {
               
                
                return (
                    <Card onClick= {() => this.props.updateParent(index)} title={element.participants.join(", ")} headStyle = {{color: "white"}} style = {{cursor: "pointer", marginBottom: "5px", backgroundColor: "darkcyan", color: "white", fontWeight: "bold"}}>
                        {element.messages && element.messages.length > 0 ?
                            <Card title = {element.messages[element.messages.length-1].sender.name} extra = {element.messages[element.messages.length-1].sentTime}>
                                <Avatar src = {element.messages[element.messages.length-1].sender.pictureUrl} />
                                <p>
                                {element.messages[element.messages.length-1].content}
                                </p>
                            </Card>
                            :
                            "No messages"
                        }
                    </Card>
                )
            })
        )
    }
}