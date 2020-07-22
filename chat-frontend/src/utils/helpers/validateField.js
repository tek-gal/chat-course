export default (key, touched, errors) => {
    if (!touched[key]) {
        return null;
    } else {
        if (errors[key]) {
            return 'error';
        } else {
            return 'success';
        }
    }
};