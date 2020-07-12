export default ({ isAuth }, values, errors) => {
    const rules = {
        email: (value) => {
            if (!value) {
                errors.email = 'Введите адрес';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
                errors.email = 'Некорректный адрес';
            }
        },
        name: (value) => {
            console.log(value)
            if (!value) {
                errors.name = 'Введите имя';
            } else if (value.length <= 3) {
                errors.name = 'Имя слишком короткое';
            }
        },
        password: (value) => {
            if (!value) {
                errors.password = 'Введите пароль';
            } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/i.test(value)) {
                errors.password = isAuth ? 'Неверный пароль' : 'Слишком легкий пароль';
            }
        },
        passwordRepeat: (value) => {
            if (!value) {
                errors.passwordRepeat = 'Повторите пароль';
            } else if (value !== values.password) {
                errors.passwordRepeat = 'Пароли не совпадают';
            }
        },
    };

    Object
        .keys(values)
        .forEach((key) => {
            rules[key] && rules[key](values[key]);
        });
};