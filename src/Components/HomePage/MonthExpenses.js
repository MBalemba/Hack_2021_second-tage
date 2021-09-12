import React from 'react';
import './Monthexpenses.scss'

const MonthExpenses = () => {
    return (
        <div className={'monthExpenses'}>
            <div className={'monthExpenses__card'}>
                <p className={'monthExpenses__title monthExpenses__title_orn'}>
                    Траты за месяц
                </p>
                <p className={'monthExpenses__price monthExpenses__price_big'}>
                    81 827
                    <span> ₽</span>
                </p>

            </div>
            <div className={'monthExpenses__card'}>
                <p className={'monthExpenses__title'}>
                    Супермаркеты
                </p>
                <div className={'monthExpenses__numbers'}>
                    <p className={'monthExpenses__price'}>
                        81 827
                        <span className={'monthExpenses__price_currency'}>&nbsp;₽</span>
                    </p>
                     <p className={'monthExpenses__percent'}>
                         49%
                     </p>

                </div>

                    <div className={'monthExpenses__line'}>
                        <div className={'monthExpenses__line'} style={{position: 'absolute', left: '0', width: '49%', backgroundColor: '#EA5616'}} >
                        </div>
                    </div>

            </div>

            <div className={'monthExpenses__card'}>
                <p className={'monthExpenses__title'}>
                    Супермаркеты
                </p>
                <div className={'monthExpenses__numbers'}>
                    <p className={'monthExpenses__price'}>
                        81 827
                        <span className={'monthExpenses__price_currency'}>&nbsp;₽</span>
                    </p>
                    <p className={'monthExpenses__percent'}>
                        49%
                    </p>

                </div>

                <div className={'monthExpenses__line'}>
                    <div className={'monthExpenses__line'} style={{position: 'absolute', left: '0', width: '49%', backgroundColor: '#EA5616'}} >
                    </div>
                </div>

            </div>

            <div className={'monthExpenses__card'}>
                <p className={'monthExpenses__title'}>
                    Супермаркеты
                </p>
                <div className={'monthExpenses__numbers'}>
                    <p className={'monthExpenses__price'}>
                        81 827
                        <span className={'monthExpenses__price_currency'}>&nbsp;₽</span>
                    </p>
                    <p className={'monthExpenses__percent'}>
                        49%
                    </p>

                </div>

                <div className={'monthExpenses__line'}>
                    <div className={'monthExpenses__line'} style={{position: 'absolute', left: '0', width: '49%', backgroundColor: '#EA5616'}} >
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MonthExpenses;