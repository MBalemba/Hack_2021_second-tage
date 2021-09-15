import React, {useEffect, useState, useContext} from 'react';
import './HistoreOperation.scss'
import {Context} from "../../index";
import TransactionOut from "../common/HomePage/svg/TransactionOut";
import TransactionMe from "../common/HomePage/svg/TransactionMe";
import {observer} from "mobx-react-lite";

const HistoreOperation = observer(() => {

    const {homePage, login} = useContext(Context)


    useEffect(() => {
        debugger
        const getData = () => homePage.historyExpenses()

        getData()
            .then(() => {

            })
            .catch((status) => {
                login.checkStatus(status).then(() => {
                    // debugger
                    getData().then(() => {

                    })
                }).catch(() => {

                })
            })

    }, [])

    useEffect(()=>{

        console.log(homePage.HistoryData.length)
        debugger

    }, [homePage.HistoryData.length])

    return (
        <div className={'history'}>
            <div className={'history__toggle '}></div>


            <div className="history__content">

                <div className={'history__menu'}>

                    {
                        homePage.HistoryData.map(el =>
                            <div key={el.date} className={'history__timeBlock'}>
                                <div className="history__time">
                                    {el.date}
                                </div>

                                <div className="history__transArr">
                                    {
                                        el.info.map(({currency, description, sum}) =>
                                            <div key={description} className={"history__transItemWrapper"}>
                                                <div className={'history__transItem'}>
                                                    <div className={'history__transItem_left'}>
                                                        {
                                                            sum<0 ? <TransactionOut/>
                                                                : <TransactionMe/>
                                                        }

                                                        <div className={'history__textBlock_left'}>
                                                            <p className={'history__text'}>{description}</p>
                                                            <p className={'history__text_grey'}>{sum} ₽</p>
                                                        </div>
                                                    </div>
                                                    <div className={'history__transItem_right'}>
                                                        <div className={'history__textBlock_right'}>
                                                            <p className={'history__text'}>Исходящая</p>
                                                            <p className={'history__text_grey history__text_uppercase'}>{currency}</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className={'history__hr'}/>
                                            </div>
                                        )
                                    }

                                </div>
                            </div>)
                    }


                    <div className={'history__buttonWrapperWrap'}>
                        <div className="history__buttonWrapper">
                            <button className={'history__button button button_blue'}>
                                Посмотреть больще операций
                            </button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
});

export default HistoreOperation;