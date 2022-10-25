import React, { useEffect } from 'react';
import { BsFillPeopleFill } from "react-icons/bs";
import { FaRegCaretSquareRight, FaRegUser, FaTag } from "react-icons/fa";
import { Link } from "react-router-dom";
import Chart from "react-apexcharts";
import { useDispatch, useSelector } from 'react-redux';
import { dashboard_index_data_get } from '../../store/actions/Dashborad/dashboardAction';
const DashboradIndex = () => {
    const { dashboard_data, articleCount, categoryCount, tagCount, subAdminCount } = useSelector(state => state.dashboardIndex)
    const dispatch = useDispatch()

    let graphData = []
    if (dashboard_data.monthArray?.length > 0) {

        for (let i = 0; i < 12; i++) {
            graphData.push(dashboard_data.monthArray[i].viewer)
        }

    }
    const chartOptions = {
        series: [
            {
                name: "Visitor",
                data: graphData
            }
        ],
        options: {
            color: ['#181ee8', '#181ee8'],
            chart: {
                background: 'transparent'
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'soomth'
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apl', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            legend: {
                position: 'top'
            },
            grid: {
                show: 'false'
            }
        }
    }
    useEffect(() => {
        dispatch(dashboard_index_data_get())
    }, [])
    return (
        <div className='dashborad-main-content-elements'>
            <div className="dashborad-elements">
                <div className="cards">
                    <div className="single-card">
                        <div className="card_icon">
                            <BsFillPeopleFill />
                        </div>
                        <div className="card_info">
                            <h2>{dashboard_data.viewer > 1 ? `${dashboard_data.viewer - 1}+` : dashboard_data.viewer}</h2>
                            <span>Visitoes</span>
                        </div>
                    </div>
                    <Link className="single-card">
                        <div className="card_icon">
                            <BsFillPeopleFill />
                        </div>
                        <div className="card_info">
                            <h2>{articleCount > 1 ? `${articleCount - 1}+` : articleCount}</h2>
                            <span>Articles</span>
                        </div>
                    </Link>
                    <Link className="single-card">
                        <div className="card_icon">
                            <FaRegCaretSquareRight />
                        </div>
                        <div className="card_info">
                            <h2>{categoryCount > 1 ? `${categoryCount - 1}+` : categoryCount}</h2>
                            <span>Categorys</span>
                        </div>
                    </Link>
                    <Link className="single-card">
                        <div className="card_icon">
                            <FaTag />
                        </div>
                        <div className="card_info">
                            <h2>{tagCount > 1 ? `${tagCount - 1}+` : tagCount}</h2>
                            <span>Tags</span>
                        </div>
                    </Link>
                    <Link to='/deshborad/all-sub-admin' className="single-card">
                        <div className="card_icon">
                            <FaRegUser />
                        </div>
                        <div className="card_info">
                            <h2>{subAdminCount > 1 ? `${subAdminCount - 1}+` : subAdminCount}</h2>
                            <span>Sub Admins</span>
                        </div>
                    </Link>
                </div>
                <div className="card-chart">
                    <Chart
                        options={chartOptions.options}
                        series={chartOptions.series}
                        type='bar'
                        height='100%'
                        width='100%'
                    />
                </div>
            </div>
        </div>
    )
}

export default DashboradIndex