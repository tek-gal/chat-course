import { withFormik } from 'formik';

import validate from 'utils/validate';
import RegisterForm from '../components';


export default withFormik({
    enableReinitialize: true,
    mapPropsToValues: () => ({
        email: '',
        name: '',
        password: '',
        passwordRepeat: '',
    }),
    validate: values => {
        let errors = {};
        validate({ isAuth: false }, values, errors);
        
        return errors;
    },
    handleSubmit: (values, { setSubmitting }) => {
        setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
        }, 1000);
    },
    displayName: 'RegisterForm',
})(RegisterForm);