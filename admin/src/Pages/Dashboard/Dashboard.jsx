import React from 'react'
// import Cards from '../Cards/Cards'
import {Chart} from 'react-google-charts';
//import {useMediaQuery} from 'react-responsive';
import './Dashboard.css'
// import Seller from '../Sellers Page/Seller';
// import { Route, Routes ,Link} from "react-router-dom";

export const data = [
  [
    "Month",
    "Bolivia",
    "Ecuador",
    "Madagascar",
    "Papua New Guinea",
    "Rwanda",
    "Average",
  ],
  ["2004/05", 165, 938, 522, 998, 450, 614.6],
  ["2005/06", 135, 1120, 599, 1268, 288, 682],
  ["2006/07", 157, 1167, 587, 807, 397, 623],
  ["2007/08", 139, 1110, 615, 968, 215, 609.4],
  ["2008/09", 136, 691, 629, 1026, 366, 569.6],
];

export const data1 = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7],
];

export const options1 = {
  pieHole:"0.6",
  title: "My Daily Activities",
};

export const options = {
  title: "Monthly Coffee Production by Country",
  vAxis: { title: "Cups" },
  hAxis: { title: "Month" },
  seriesType: "bars",
  series: { 5: { type: "line" } },
};

const Dashboard = () => {
  return (
  <div className='dashboardBox'>
    <div className="Main">
      <h1>Dashboard</h1>
      <div className='cards'>
        <div className="card1" >
  <h3>Weekly Sales</h3>
<h2>$ 17,0000</h2><br/>
<h3>Increased by 60%</h3>
{/* <Link to="/seller">seller go</Link>
<Routes><Route exact path='/seller' Component={Seller}/></Routes> */}
</div>
        <div className="card2" >
  <h3>Weekly Orders</h3>
<h2>45,6344</h2><br/>
<h3>decreased by 10%</h3>
</div>
        <div className="card3" >
  <h3>Visitors Online</h3>
<h2>95,476</h2><br/>
<h3>Increased by 5%</h3>
</div>
      </div>

      <div className="graph">
      <Chart
      chartType="ComboChart"
      width="100%"
      height="380px"
      data={data}
      options={options}
    />
      </div>
    </div>
    <div className="chartColumn">
      <div className="chart">
      <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"300px"}
    />
      </div>
      <div className="chart"><Chart
      chartType="PieChart"
      data={data1}
      options={options1}
      width={"100%"}
      height={"300px"}
    /></div>
    </div>
   
  </div>
    
  )
}

export default Dashboard
