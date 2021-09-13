import React, {useContext, useState} from 'react';
import './MainPage.scss'
import {Link} from "react-router-dom";
import Logo from "../Components/common/HomePage/svg/Logo";
import MonthExpenses from "../Components/HomePage/MonthExpenses";
import Offer from "../Components/HomePage/Offer";
import WeekExpenses from "../Components/HomePage/WeekExpenses";
import {Context} from "../index";


function Paper(props) {
    return (
        <div className={'paper paper_white' +" "+ props.title===''}>
            <p className={'paper__title'}>{props.title}</p>

            <div className="paper__content">
                {props.children()}
            </div>
        </div>

    );
}

const MainPage = () => {

    const {login} = useContext(Context)

    return (
        <div className={'background background-home'}>
            <div className="home-content">
                <div className="home-content__header">
                    <div className={'home-content__topLogo topLogo'}>
                        <Logo/>
                        <p className={'topLogo__text'}>Анализ финансов</p>
                    </div>

                    <Link className={'home-content__outLink'}>
                        Выход
                    </Link>

                </div>

                <div className="section__1 section">
                    <div className={'section__1_left '}>

                        <div className={'paper paper_white'}>
                            <p className={'paper__title'}></p>

                            <div className="paper__content">
                                <MonthExpenses />
                            </div>
                        </div>


                    </div>

                    <div className={'section__1_right'}>


                        <div className={'paper paper_dark'}>
                            <p className={'paper__title'}></p>

                            <div className="paper__content">
                                <Offer />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="section__2 section">
                    <div className={'section__2_left '}>
                        <div className={'paper paper_white'}>
                            <div className="paper__content">
                                <p className={'paper__title'}>График расхода по дням</p>
                                <WeekExpenses/>
                            </div>
                        </div>
                    </div>

                    <div className={'section__2_right'}>
                        <div className={'paper paper_dark'}>
                            <div className="paper__content">
                                <p className={'paper__title'}></p>

                            </div>
                        </div>
                    </div>
                </div>

{/*
                <div className="section_2 section">
                    <div className={'section__left'}>
                        <Paper title={'График расходов по дням'}>
                            {
                                ()=>(
                                    <div>
                                        dssad
                                    </div>
                                )
                            }
                        </Paper>

                    </div>

                    <div className={'section__right'}>
                        <Paper title={'График расходов за месяц'}>
                            {
                                ()=>(
                                    <div>

                                    </div>
                                )
                            }
                        </Paper>

                    </div>
                </div>*/}

                <div className="section_3 section">

                </div>
            </div>
        </div>
    );
};

export default MainPage;