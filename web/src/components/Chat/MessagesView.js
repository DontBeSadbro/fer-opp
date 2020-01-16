import React from "react";
import {Card, Avatar} from "antd";

export default class MessagesView extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            list: this.props.list
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.list) {
            this.setState({list: nextProps.list}, () => console.log(this.state));
        }
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
            </div>
            
        )
    }
}