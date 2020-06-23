import React from 'react';
import { InfoCircleTwoTone } from '@ant-design/icons';


const SuccessBlock = () => {
    return (
        <div className="auth__register-success-block">
            <div>
                <InfoCircleTwoTone style={{ fontSize: '50px' }} />
            </div>
            <h2>Подтвердите свой аккаунт</h2>
            <p>На вашу почту было отправлено письмо со ссылкой на подтверждение аккаунта.</p>
        </div>
    );
};

export default SuccessBlock;