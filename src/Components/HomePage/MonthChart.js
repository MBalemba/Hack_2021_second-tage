import React from 'react';
import ReactApexChart from "react-apexcharts";
import './MonthChart.scss'


class ApexChat extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
                name: "Desktops",
                data: [[1, 34000], [2, 5400], [3, 23000], [4, 43000], [5, 34000],
                    [6, 34000], [7, 5400], [8, 2300], [9, 43000], [10, 34000],
                    [11, 34000], [12, 5400], [13, 2300], [14, 43000], [15, 34000]]
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
                    text: '',
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
                    max: 31,


                },
                tooltip: {
                    enabled: true,
                    enabledOnSeries: undefined,
                    shared: true,
                    custom: function ({series, seriesIndex, dataPointIndex, w}) {
                        console.log('dataPointIndex: ', dataPointIndex)
                        console.log('series: ', series)
                        console.log('seriesIndex: ', seriesIndex)
                        return `<div class='tooltip monthChart__tooltip'>
                            <div class='tooltip__tooltipContent'>
                                <div class='tooltip__tooltipInfo'>
                                    <p class='tooltip__tooltipInfo_price'>
                                        ${series[0][dataPointIndex]}
                                        <span class='tooltip__tooltipInfo_span'>₽</span>
                                    </p>                           
                                    <p color={'rgba(20, 24, 52, 0.5);'} >
                                        
                                    </p>
                                    
                                </div>
                            </div>   
                        </div>
                        `
                    },
                    theme: false,
                    style: {
                        fontSize: '12px',
                        fontFamily: 'Gilroy',
                    },

                },


            }


        }
    }


    render() {
        return (


            <div className="MonthChart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={260}/>
            </div>


        );
    }
}


const MonthChart = () => {
    return (
        <div>
            <ApexChat/>
        </div>
    );
};

export default MonthChart;