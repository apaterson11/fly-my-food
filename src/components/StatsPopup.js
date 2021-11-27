import React, { useState } from "react";
import { PieChart, Pie, LabelList, Label, CartesianGrid, Bar, BarChart, XAxis, YAxis } from 'recharts';

require("./css/BarcodePopup.css");

function StatsPopup (props) {

  const pie_data = [
    {name: 'Asia', items: 4},
    {name: 'Africa', items: 1},
    {name: 'North America', items: 2},
    {name: 'South America', items: 1},
    {name: 'Europe', items: 3},
    {name: 'Australia', items: 1}
  ];

  const bar_data = [
    {name: '', items: 10},
    {name: '', items: 1.3},
    {name: '', items: 3.6},
    {name: '', items: 7},
    {name: '', items: 3},
    {name: "Today's shopping", items: 6.4}
  ];

  return (
    <div className="statsPopup">
      <div className="pie-chart">
        <PieChart width={300} height={300}>
          <Pie data={pie_data} nameKey="name" dataKey="items" outerRadius={100} fill="green"><LabelList dataKey="name" position="inside"/></Pie>
        </PieChart>
      </div>
      <div className="text">
        84% of your food came from outside the UK.
      </div>
      <div className="bar-chart">
        <BarChart 
          width={650} 
          height={250} 
          data={bar_data} 
          margin={{ top: 15, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis>
            <Label value="Your previous shops" offset={0} position="insideBottom" />
          </XAxis>
          <YAxis label={{ value: 'CO2 emissions (kg)', angle: -90, position: 'insideLeft' }} />
          <Bar dataKey="items" fill="#8884d8">
            <LabelList dataKey="name" position="top" />
          </Bar>
        </BarChart>
      </div>
      <div className="text">
        Today's shopping was a 113.33% increase from your previous.
      </div>
    </div>
  );
};

export default StatsPopup;