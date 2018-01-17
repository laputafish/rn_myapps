import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';
import Backend from '../components/Backend';

export default class ChatScreen extends Component<{}> {
  state = {
    messages: []
  };

  componentWillMount() {

  }

  render() {
    return (
      <GiftedChat
      messages={this.state.messages}
      onSend={(message) => {
        Backend.sendMessage( message );
        // send message to your backend
      }}
      user={{
        _id: Backend.getUid(),
        name: this.props.contact_name
      }}
      />
    )
  }

  componentDidMount() {
    Backend.loadMessages((message) => {
      this.setState((previousState) => {
        return {
          messages: GiftedChat.append(previousState.messages, message)
        };
      })
    })
  }

  componentWillUnmount() {
    Backend.closeChat();
  }
}
/*
*/

ChatScreen.defaultProps = {
  name: 'John'
};
//
// ChatScreen.propTypes = {
//   name: React.PropTypes.String
// };

const styles = StyleSheet.create({

});
