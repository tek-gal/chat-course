import React, { useState } from 'react';

import { Dialogs } from 'components';


const DialogsContainer = (props) => {
    const { items } = props;
    const [value, setValue] = useState('');
    const [filteredItems, setFilteredItems] = useState(items);

    const onChangeInput = (e) => {
        console.log('onSearch')
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
    />;
};

export default DialogsContainer;
