import React from 'react';
import ReactApexChart from "react-apexcharts";
import './PieChart.scss'
import styled from "styled-components";



     const Div = styled.div`
         background-color: ${({colorDiv})=> colorDiv};
 `


class ApexChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [44, 55, 13, 43, 22, 33, 55],
            height: 50,
            options: {
                dataLabels: {
                    enabled: true,
                },
                height: 50,
                chart: {
                    type: 'pie',
                    height: 50,
                },
                colors: ['#EA5616', '#2C2D84', '#403179', '#52356E', '#663963', '#783D58', '#9E4642',],
                labels: ['Супермаркеты', 'Переводы', 'Рестораны', 'Развлечения', 'Одежда', 'Транспорт', 'Развлечения'],
                legend: {
                    show: false,
                },
                responsive: [{
                    breakpoint: 200,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            },


        };
    }


    render() {
        return (

            <div className={"chart"}>
                <ReactApexChart options={this.state.options} series={this.state.series} type="pie" width={270}
                                height={240}
                />
            </div>


        )
    }
}

const PieChart = () => {
    const colors = ['#EA5616', '#2C2D84', '#403179', '#52356E', '#663963', '#783D58', '#9E4642',]
    return (<>
            <ApexChart/>

            <div  className={'categories'}>
                {colors.map(el =>
                    <div key={el} className={'categories__item'}>
                        <Div colorDiv={el} className={'categories__circle'}></Div>
                        <div className={'categories__text'}>Категория</div>
                    </div>
                )}

            </div>

        </>
    );
};

export default PieChart