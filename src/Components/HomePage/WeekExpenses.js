import React, {useContext} from 'react';
import './WeekExpenses.scss'
import styled from 'styled-components'
import {useEffect} from "react";
import {observer} from "mobx-react-lite";
import {Context, homePage, login} from "../../index";

const Diagram = styled.div`
  background-color: ${({color})=>color};
  height: ${ ({heightSc}) => heightSc+"%"};
  border-radius: 25px;
  min-width: 40%;
`

const WeekExpenses = observer(() => {
    const {homePage, login} = useContext(Context)

    const averageAmount =  homePage.WeekExpenses.averageAmount
    const currentAmount = homePage.WeekExpenses.currentAmount
    const maxPrice =  homePage.WeekExpenses.maxAmount
    useEffect(() => {
        debugger
        const getData = () => homePage.getWeekExpenses()

        getData()
            .then(() => {

            })
            .catch((status) => {
                login.checkStatus(status).then(() => {
                    debugger
                    getData()
                }).catch(() => {

                })
            })

    }, [])


    console.log('this._weekExpenses: ', homePage.WeekExpenses)

    return (
        <div className={'weekExpenses'}>
            <div className={'weekExpenses__graphic'}>
                <div onMouseMove={(e)=>{console.log(e.clientX)}} className={'weekExpenses__items'}>
                    {
                        averageAmount.map((el, index)=>
                            <div key={el.data} className={'weekExpenses__itemCategory'}>
                                <Diagram color={'#2C2D84;'} heightSc={el.sum*100/maxPrice}></Diagram>
                                <Diagram color={'#EA5616;'} heightSc={currentAmount[index].sum*100/maxPrice}></Diagram>
                            </div>
                        )
                    }

                </div>

                <div className={'weekExpenses__weekDays'}>
                    <div className={'weekExpenses__weekDay'}>
                        Пн
                    </div>

                    <div className={'weekExpenses__weekDay'}>
                        Вт
                    </div>

                    <div className={'weekExpenses__weekDay'}>
                        Cр
                    </div>

                    <div className={'weekExpenses__weekDay'}>
                        Чт
                    </div>

                    <div className={'weekExpenses__weekDay'}>
                        Пт
                    </div>

                    <div className={'weekExpenses__weekDay'}>
                        Сб
                    </div>

                    <div className={'weekExpenses__weekDay'}>
                        Вс
                    </div>
                </div>

            </div>

            <div className="weekExpenses__dataBlock">
                <div className="weekExpenses__data">{currentAmount[0]?.data} - {currentAmount[currentAmount.length-1]?.data}</div>
                <div className="weekExpenses__data"></div>
            </div>
            <div className="weekExpenses__price">

            </div>
        </div>
    );
});

export default WeekExpenses;