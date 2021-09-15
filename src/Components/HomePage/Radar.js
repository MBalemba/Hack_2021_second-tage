import React, {useContext, useEffect} from 'react';
import ReactApexChart from "react-apexcharts";
import './Radar.scss'
import {Context} from "../../index";
import {observer} from "mobx-react-lite";

class ApexChat extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

            series: [{
                name: 'Средние показатели за месяц',
                data: [80, 50, 30],
            }, {
                name: 'Текущие показатели',
                data: [20, 30, 40],
            }],


            options: {

                chart: {

                    fontFamily: 'Gilroy',
                    fontSize: '12px',
                    type: 'radar',

                    dropShadow: {
                        enabled: true,
                        blur: 1,
                        left: 1,
                        top: 1
                    },
                    toolbar: {
                        show: false
                    },
                },

                colors: ['#2C2D84', '#EA5616'],
                legend: {

                    show: true,
                    showForSingleSeries: false,
                    showForNullSeries: true,
                    showForZeroSeries: true,
                    position: 'bottom',
                    horizontalAlign: 'center',
                    floating: false,
                    fontSize: '12px',
                    fontFamily: 'Gilroy',
                    fontWeight: 600,
                    formatter: undefined,
                    inverseOrder: false,
                    width: '450px',
                    height: '150px',
                    tooltipHoverFormatter: undefined,
                    customLegendItems: [],
                    offsetX: 0,
                    offsetY: -20,
                    labels: {
                        useSeriesColors: false
                    },
                    markers: {
                        width: 12,
                        height: 12,
                        strokeWidth: 0,
                        strokeColor: '#fff',
                        fillColors: undefined,
                        radius: 12,
                        customHTML: undefined,
                        onClick: undefined,
                        offsetX: 0,
                        offsetY: 0
                    },
                    itemMargin: {
                        horizontal: 5,
                        vertical: 0
                    },
                },


                tooltip: {
                    enabled: true,
                },
                markers: {
                    size: 3,
                    hover: {
                        size: 10
                    }
                },


                plotOptions: {
                    radar: {
                        polygons: {
                            strokeColor: '#e8e8e8',
                            fill: {
                                colors: ['#f8f8f8']
                            }
                        }
                    }
                },
                stroke: {
                    width: 2
                },
                fill: {
                    opacity: 0.1
                },
                xaxis: {

                    categories: ['Развлечения', 'Комунальные услуги ', 'Супермаркеты']
                },

                yaxis:{
                    show: false,
                    tickAmount: 6,
                },
                zoom: {
                    enabled: true,
                },
            },


        };
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.data.monthlyAverages.length !== this.props.data.monthlyAverages.length) {

            const avrMas = this.props.data.monthlyAverages.map(el => el.summary)
            const curMas = this.props.data.currentIndicators.map(el => el.summary)
            const categoryMas = this.props.data.monthlyAverages.map(el => el.category)

            this.setState({
                series: [{
                    name: 'Средние показатели за месяц',
                    data: avrMas,
                }, {
                    name: 'Текущие показатели',
                    data: curMas,
                }],
                options: {
                    xaxis: {
                        categories: categoryMas
                    }
                },
            })
        }
    }

    render() {
        return (


            <div className="radar">
                <ReactApexChart options={this.state.options} series={this.state.series} width={550} type="radar"/>
            </div>


        );
    }
}


const Radar = observer(() => {
    const {homePage, login} = useContext(Context)
    useEffect(() => {
        const getData = () => homePage.weekGroupExpenses()

        getData()
            .then(() => {

            })
            .catch((status) => {
                login.checkStatus(status).then(() => {
                    getData()
                }).catch(() => {

                })
            })
    }, [])

    return (
        <ApexChat data={homePage.RadarData}/>
    );
});

export default Radar;