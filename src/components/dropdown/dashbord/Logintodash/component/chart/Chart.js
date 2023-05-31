import React from 'react';
import { AreaChart,Area, CartesianGrid, XAxis, YAxis, Tooltip,ResponsiveContainer } from "recharts";
import data from '../BODY/data.json';
import './Chart.css'

const Chart = () => {
  return (
          <ResponsiveContainer width="100%" aspect={2/1}>
        <AreaChart data={data} >
  <defs>
    <linearGradient style={{width:"100%"}} id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0.2}/>
    </linearGradient>
    <linearGradient style={{width:"100%"}} id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0.2}/>
    </linearGradient>
  </defs>
  <XAxis dataKey='id' style={{width:'100%'}} />    
  <YAxis />
  <CartesianGrid strokeDasharray="1"  />
  <Tooltip  contentStyle={{width:"100%"}} />
  <Area type="monotone" dataKey="price" stroke="#8884d8" strokeWidth={1}  strokeOpacity={1} fill="url(#colorUv)" />
</AreaChart>
</ResponsiveContainer>
      
  )
}

export default Chart
