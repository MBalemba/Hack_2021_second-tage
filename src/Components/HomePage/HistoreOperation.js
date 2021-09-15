import React, {useEffect, useState,createRef, useContext} from 'react';
import './HistoreOperation.scss'
import {Context} from "../../index";
import TransactionOut from "../common/HomePage/svg/TransactionOut";
import TransactionMe from "../common/HomePage/svg/TransactionMe";
import {observer} from "mobx-react-lite";
import {BarLoader, BounceLoader, PuffLoader, SkewLoader} from "react-spinners";

const HistoreOperation = observer(() => {

    const {homePage, login} = useContext(Context)
    const ref = createRef()
    function doRequest() {
        homePage.setFetchingHistory(true)
        const getData = () => homePage.historyExpenses()
        getData()
            .then(() => {
                homePage.setFetchingHistory(false)
            })
            .catch((status) => {
                login.checkStatus(status).then(() => {
                    // debugger
                    getData().then(() => {
                        homePage.setFetchingHistory(false)
                    })
                }).catch(() => {
                    homePage.setFetchingHistory(false)
                })
            })
    }

    useEffect(() => {
        debugger
        doRequest()

    }, [])

    useEffect(()=>{

        console.log(homePage.HistoryData.length)
        debugger

    }, [homePage.HistoryData.length])




    const scrollFunc = (e)=>{
        if(e.target.scrollHeight - e.target.scrollTop - e.target.clientHeight < 750 && !homePage.FetchingHistory){
            debugger
            if(homePage.HistoryCount>1 && homePage.HistoryCount!== homePage.HistoryMax){
                doRequest()
            }
        }
    }

    useEffect(()=>{
        const element = ref.current
        console.log(element)
        element.addEventListener('scroll', scrollFunc)
    }, [])



    return (
        <div className={'history'}>
            <div className={'history__toggle '}></div>


            <div className="history__content">

                <div ref={ref} className={'history__menu'}>

                    {
                        homePage.HistoryData.map((el, index) =>
                            <div key={index} className={'history__timeBlock'}>
                                <div className="history__time">
                                    {el.date}
                                </div>

                                <div className="history__transArr">
                                    {
                                        el.info.map(({currency, description, sum}, index) =>
                                            <div key={index} className={"history__transItemWrapper"}>
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
                        {homePage.HistoryCount <= 1 && <div className="history__buttonWrapper">
                            <button onClick={doRequest} className={'history__button button button_blue'}>
                                Посмотреть больще операций
                            </button>
                        </div>}

                    </div>
                </div>
                {homePage.FetchingHistory &&
                <div className={'history__spinner'}>
                    <PuffLoader size={50} />
                </div>}



            </div>
        </div>
    );
});

export default HistoreOperation;