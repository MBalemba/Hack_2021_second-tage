import React from 'react';
import ReactApexChart from "react-apexcharts";
import './Radar.scss'

class ApexChat extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

            series: [{
                name: 'Средние показатели за месяц',
                data: [80, 50, 30, 40, 100, 20, 22],
            }, {
                name: 'Текущие показатели',
                data: [20, 30, 40, 80, 20, 80, 22],
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
                    categories: ['Развлечения', 'Комунальные услуги ', 'Супермаркеты', 'Рестораны', 'Переводы', 'Одежда', 'Транспорт']
                },
                zoom: {
                    enabled: true,},
            },


        };
    }


    render() {
        return (


            <div className="radar">
                <ReactApexChart options={this.state.options} series={this.state.series} width={550} type="radar"/>
            </div>


        );
    }
}


const Radar = () => {
    return (
        <ApexChat/>
    );
};

export default Radar;