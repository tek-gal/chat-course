import React from 'react';
import { connect } from 'react-redux';

import { messagesActions } from 'redux/actions';
import { Messages } from 'components';


class MessagesContainer extends React.Component {
    componentDidUpdate(prepProps) {
        const { setMessages, currentDialogId } = this.props;
        if (currentDialogId && prepProps.currentDialogId !== currentDialogId) {
            setMessages(currentDialogId);
        }
    }

    render() {
        const { items, currentDialogId, isLoading } = this.props;

        return <Messages
            isLoading={isLoading}
            hasCurrentDialog={!!currentDialogId}
            items={items}
        />;
    }
}


export default connect(
    ({ messages, dialogs: { currentDialogId } }) => ({
        items: messages.items,
        isLoading: messages.isLoading,
        currentDialogId,
    }),
    messagesActions,
)(MessagesContainer);
