import axios from "axios";
import React, { useEffect, useState } from "react";

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
} from "recharts";


import jondoe from "../Assets/media.png";
import facebook from "../Assets/facebook.png";
import instagram from "../Assets/instagram.png";
import twitter from "../Assets/twitter.png";





function Home() {
  const [dataLineChart, setDataLineChart] = useState([]);
  const [dataPieChart, setDataPieChart] = useState([]);
  const [dataTable, setDataTable] = useState([]);


 
 



 
  useEffect(() => {
    //linedata
    axios.get("http://localhost:3001/api/graph").then((response) => {
      setDataLineChart(response.data);
    });
    ///piechart
    axios.get("http://localhost:3001/api/pie-chart").then((response) => {
      setDataPieChart(response.data);
    });
    //tabledata
    axios.get("http://localhost:3001/api/table").then((response) => {
      setDataTable(response.data);
    });
  }, []);

  const COLORS = ["#aaf0d1", "#90EE90", "#77dd77", "#00a86b", "#77dd77"];

  const RADIAN = Math.PI / 180;

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };


  
  const styles = {
    paginationButton: {
      backgroundColor: 'white', // Set the background color to white
    },
  }



  return (
    <main className="main-container">
      <div className="charts">
        <ResponsiveContainer
          width="100%"
          height="100%"
          style={{
            backgroundColor: "white",
            borderRadius: ".5rem",
            boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
          }}
        >
          <LineChart
            width={500}
            height={300}
            data={dataLineChart}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="x" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="y"
              stroke="#8884d8"
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
        <ResponsiveContainer
          width="100%"
          height="100%"
          style={{
            backgroundColor: "white",
            borderRadius: ".5rem",
            display: "flex",
            boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
          }}
        >
          <PieChart
            width={600}
            height={700}
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
          >
            <Legend
              align="left"
              verticalAlign="bottom"
              layout="vertical"
              iconSize={10}
              iconType="circle"
              formatter={(value, entry) => entry.payload.label}
            />
            <Pie
              data={dataPieChart}
              cx="35%"
              cy="40%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {dataPieChart.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>



      
      <div className="tableandinfo">


<div style={{alignItems:'center',justifyContent:'center',gap:'10px'}} >
        <div
          style={{ width: "100%", height: "67%", overflow: "auto" }}
          className="table"
        >
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <tr style={{ width: "200px", height: "50px" }}>
              <th style={{ width: "70px", height: "40px" }}>id</th>
              <th style={{ width: "200px", height: "40px" }}>name</th>
              <th style={{ width: "200px", height: "40px" }}>quantity</th>
              <th style={{ width: "200px", height: "40px" }}>price</th>
            </tr>
            {dataTable.map((item, index) => (
              <>
                <tr
                  key={index}
                  className={item.id % 2 == 0 ? "trbackground" : ""}
                  style={{ width: "200px", height: "30px" }}
                >
                  <td style={{ width: "70px", height: "10%" }}>{item.id}</td>
                  <td style={{ width: "180px", height: "80%" }}>{item.name}</td>

                  <td style={{ width: "180px", height: "80%" }}>
                    {item.quantity}
                  </td>
                  <td style={{ width: "180px", height: "80%" }}>
                    {item.price}
                  </td>
                </tr>
              </>
            ))}
          </table>

           <div>

  
           </div>
     
        </div>
   

   <div style={{marginTop:'10px',marginLeft:'30%',display:"flex"}}  >



 
 

   <Stack spacing={2}>
    
   <Pagination
        count={10}
        variant="outlined"
        shape="rounded"
        
      />
    </Stack>


   </div>
   </div>



        <div className="userinfo">
          <div>
            <img src={jondoe} className="usercardimg" />
          </div>
          <div
            style={{
              marginTop: "0",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div>
              <h4 style={{ marginTop: "5px",marginBottom:'0' }}>Jon Doe</h4>
            </div>
            <div style={{ marginTop:"5px",marginBottom:'10px',fontWeight:'2px',color:"gray"}}>ceo</div>
            <div style={{ display: "flex", gap: "15px" }}>
              <img className="icon" src={facebook} />
              <img src={instagram} />
              <img src={twitter} />
            </div>
          </div>
        </div>
      
      </div>
      
    </main>
  );
}

export default Home;
