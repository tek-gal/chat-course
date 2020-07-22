import React from 'react';
import orderBy from 'lodash/orderBy';
import { Input, Empty } from 'antd';

import { DialogItem } from 'components';
import './Dialogs.sass';


const Dialogs = ({ items, userId, onSearch, inputValue, currentDialogId, onSelectDialogs }) => {
    return (
        <div className="dialogs">
            <div className="dialogs__search">
                <Input.Search
                    valur={inputValue}
                    placeholder="Поиск среди контактов"
                    onChange={onSearch}
                />
            </div>
            <div className="dialogs__container">
                <div className="dialogs__dialogs">
                    {   
                        items.length > 0
                            ? orderBy(items, 'createdAt', 'desc')
                                .map((item) => <DialogItem
                                    key={item._id}
                                    isCurrent={currentDialogId === item._id}
                                    isMe={item.user._id === userId}
                                    onSelect={onSelectDialogs}
                                    {...item}
                                />)
                            : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="Ничего не найдено" />
                    }
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
