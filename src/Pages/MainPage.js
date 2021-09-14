import React, {useContext, useState} from 'react';
import './MainPage.scss'
import {Link} from "react-router-dom";
import Logo from "../Components/common/HomePage/svg/Logo";
import MonthExpenses from "../Components/HomePage/MonthExpenses";
import Offer from "../Components/HomePage/Offer";
import WeekExpenses from "../Components/HomePage/WeekExpenses";
import {Context} from "../index";
import ReactApexChart from "react-apexcharts";
import MonthChart from "../Components/HomePage/MonthChart";
import Radar from "../Components/HomePage/Radar";
import PieChart from "../Components/HomePage/PieChart";
import HistoreOperation from "../Components/HomePage/HistoreOperation";


function Paper(props) {
    return (
        <div className={'paper paper_white' + " " + props.title === ''}>
            <p className={'paper__title'}>{props.title}</p>

            <div className="paper__content">
                {props.children()}
            </div>
        </div>

    );
}

class ApexChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
                name: "Desktops",
                data: [[1, 34000], [2, 5400], [3, 23000], [4, 43000], [5, 34000],
                    [6, 34000], [7, 5400], [8, 2300], [9, 43000], [10, 34000],
                    [25, 43], [31, 34],]
            }],
            options: {
                chart: {
                    height: 350,
                    type: 'line',
                    zoom: {
                        enabled: false
                    }
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'straight'
                },
                title: {
                    text: 'Product Trends by Month',
                    align: 'left'
                },
                grid: {
                    row: {
                        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                        opacity: 0.5
                    },
                },
                xaxis: {
                    type: 'category',
                    // tickPlacement: 'between',
                    categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
                    tickAmount: 6,


                },
                tooltip: {
                    enabled: true,
                    enabledOnSeries: undefined,
                    shared: true,
                    followCursor: true,
                    custom: function({series, seriesIndex, dataPointIndex, w}) {
                        console.log('dataPointIndex: ', dataPointIndex)
                        return '<div class="arrow_box">' +
                            "<span>" +
                            ": " +
                            series[seriesIndex][dataPointIndex] +
                            "</span>" +
                            "</div>"
                    },
                    fillSeriesColor: false,
                    theme: false,
                    style: {
                        fontSize: '12px',
                        fontFamily: 'Gilroy',
                    },

                },


            }


        }}


        render()
        {
            return (


                <div id="chart">
                    <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={260}/>
                </div>


            );
        }
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
                                    <MonthExpenses/>
                                </div>
                            </div>


                        </div>

                        <div className={'section__1_right'}>


                            <div className={'paper paper_dark'}>
                                <p className={'paper__title'}></p>

                                <div className="paper__content">
                                    <Offer/>
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
                            <div className={'paper paper_white'}>
                                <div className="paper__content">
                                    <p className={'paper__title '}>График расходов за месяц</p>
                                    <MonthChart />
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="section__3 section">
                        <div className={'section__3_left '}>
                            <div className={'paper paper_white'}>
                                <div className="paper__content">
                                    <p className={'paper__title '}>Диаграмма недельных расходов
                                        по категориям</p>
                                    <Radar/>
                                </div>

                            </div>
                        </div>

                        <div className={'section__3_middle'}>
                            <div className={'paper paper_white'}>
                                <div className="paper__content">
                                    <p className={'paper__title '}>Диаграмма недельных расходов
                                        по категориям</p>
                                    <HistoreOperation />
                                </div>
                            </div>
                        </div>

                        <div className={'section__3_right'}>
                            <div className={'paper paper_white'}>
                                <div className="paper__content">
                                    <p className={'paper__title '}>История операций</p>
                                        <PieChart/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    export
    default
    MainPage;