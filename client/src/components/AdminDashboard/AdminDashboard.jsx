import React from 'react';
import Chart1 from './Chart1';
import Chart2 from './Chart2';
import Chart3 from './Chart3';
import styles from './AdminDashboard.module.css';
import alertShippingIcon from '../../assets/alertShippingIcon.png';
import alertPaymentIcon from '../../assets/alertPaymentIcon.png';


export default function AdminDashboard(){
    return (
        <div className={styles.main}>
            {/* <h1>Dashboard</h1> */}
            <div className={styles.chartscontainer}>
            <div className={styles.alerts}>
            <div className={styles.alert}>
            <img src={alertShippingIcon} width='78px' alt=''/>
            <div className={styles.text}><span>1 Pending Order/s</span><br/>
            Waiting for shipping confirmation
            </div>
            </div>
            <div className={styles.alert}>
            <img src={alertPaymentIcon} width='78px' alt=''/>
            <div className={styles.text}><span>3 Pending Order/s</span><br/>
            Waiting for payment confirmation
            </div>
            </div>
            </div>
                <div className={styles.chartcontainer}>
                    <div className={styles.title}>Total sales per month (in thousands)</div>
                    <div className={styles.chart1}>
                        <Chart1 />
                    </div>
                </div>
                <div className={styles.chartcontainer}>
                    <div className={styles.title}>Top 5 categories total sales</div>
                    <div className={styles.chart1}>
                        <Chart3 />
                    </div>
                </div>
                <div className={styles.chartcontainer}>
                    <div className={styles.title}>Sales per category (all categories / in %)</div>
                    <div className={styles.chart2}>
                        <Chart2 />
                    </div>
                </div>
                {/* <div className={styles.chartcontainer}>
                    <div className={styles.title}>Sales per category</div>
                    <div className={styles.chart1}>
                        <Chart4 />
                    </div>
                </div> */}
            </div>
        </div>
    )
}
