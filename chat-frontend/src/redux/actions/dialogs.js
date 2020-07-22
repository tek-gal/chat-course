import { dialogs as dialogsApi } from 'utils/api';


const actions = {
    setDialogs: () => dispatch => {
        dialogsApi.getAll().then(({ data }) => {
            dispatch({
                type: 'DIALOGS:SET_ITEMS',
                payload: data,
            });
        });
    },
    setCurrentDialogId: (id) => ({
        type: 'DIALOGS:SET_CURRENT_DIALOG_ID',
        payload: id,
    }),
};

export default actions;