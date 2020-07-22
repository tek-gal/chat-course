import { messages as messagesApi } from 'utils/api';


const actions = {
    setMessages: (dialogId) => dispatch => {
        messagesApi.getAllByDialogId(dialogId).then(({ data }) => {
            dispatch(actions.setIsLoading(true));
            dispatch({
                type: 'MESSAGES:SET_ITEMS',
                payload: data,
            });
        });
    },
    setIsLoading: (isLoading) => ({
        type: 'MESSAGES:SET_IS_LOADING',
        payload: isLoading,
    }),
};

export default actions;