import React from 'react';
import {Link} from "react-router-dom";
import './Offer.scss'
const Offer = () => {
    return (

            <div className={'recommendedServices'}>
                <div className={'recommendedServices__blockText'}>
                    <p className={'recommendedServices__title'}>Потребителький Кредит</p>
                    <p className={'recommendedServices__subtitle'}>Переворачиваем ваше представление о ставках</p>
                </div>
                <Link>
                    <button className={'button button_orn'}>
                        Подробнее
                    </button>
                </Link>
            </div>
    );
};

export default Offer;