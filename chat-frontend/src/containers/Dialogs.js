import React, { useState, useEffect } from 'react';
import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux';

import { dialogsActions } from 'redux/actions';
import { Dialogs } from 'components';


const DialogsContainer = (props) => {
    const { items, setDialogs, setCurrentDialogId, currentDialogId } = props;
    const [value, setValue] = useState('');
    const [filteredItems, setFilteredItems] = useState(items);
    useEffect(() => {
        if (!items.length) {
            setDialogs();
        }
    }, []);
    useEffect(() => {
        setFilteredItems(items);
    }, [items]);
    
    const onChangeInput = (e) => {
        const value = e.target.value;
        const filtered = items
            .filter(dialog => dialog
                .user.fullname.toLowerCase().indexOf(value.toLowerCase()) >= 0);
        setValue(value);
        setFilteredItems(filtered);
    };
    
    return <Dialogs
        {...props}
        items={filteredItems}
        onSearch={onChangeInput}
        inputValue={value}
        onSelectDialogs={setCurrentDialogId}
    />;
};

export default connect(
    ({ dialogs, messages }) => ({
        currentDialogId: dialogs.currentDialogId,
        items: dialogs.items,
        messages: messages.items,
    }),
    dialogsActions,
)(DialogsContainer);
