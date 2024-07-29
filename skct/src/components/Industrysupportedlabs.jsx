import React from 'react'
import HeaderA from './HeaderA';

const Industrysupportedlabs = () => {
    const tableStyle = {
      width: "100%",
      borderRadius: "10opx",
  };
  const thTdStyle ={
      border: "0.5px solid #ddd",
      padding: "8px",
      textAlign: "center",
      color: "black",
  };
  const thStyle = {
    border: "0.5px solid #ddd",
      padding: "8px",
      backgroundColor: "white",
      color: "grey",
  };
  return (
    <div>
        <HeaderA/>
        <br></br><br></br><br></br>
        <h1 style={{color:'Orange'}}>INDUSTRY SUPPORTED LABS</h1>
        <br></br>
  <br></br>
      
      <table style={tableStyle}>
          <thead>
              <tr>
                  <th style={thTdStyle}>S.NO</th>
                  <th style={thTdStyle}>Labs</th>
                  <th style={thTdStyle}>Year Of Establishment</th>
                  <th style={thTdStyle}>Funding Organisation</th>

                  
              </tr>
          </thead>
          <tbody>
          <tr>
                  <th style={thTdStyle}>1</th>
                  <th style={thTdStyle}>NVIDIA SUPPORTED JETSON NANO POWERED MICROCONTROLLER LAB	</th>
                  <th style={thTdStyle}>2022	</th>
           <th style={thTdStyle}>NVIDIA Graphic Pvt. Ltd. Bangalore
</th>
              </tr> 
              <tr>
                  <th style={thTdStyle}>2</th>
                  <th style={thTdStyle}>AICTE MODROB SPONSORED ANTENNA DESIGN & PROTOTYPING LAB	</th>
                  <th style={thTdStyle}>2019	</th>
                  <th style={thTdStyle}>AICTE - MODERNISATION AND REMOVAL OF OBSOLESCENCE (MODROB)
</th>

              </tr>  
                
              <tr>
                  <th style={thTdStyle}>3</th>
                  <th style={thTdStyle}>IOT INNOVATIONS LAB	</th>
                  <th style={thTdStyle}>2018</th>
                  <th style={thTdStyle}>CTS</th>

                  
              </tr>  
              <tr>
                  <th style={thTdStyle}>4</th>
                  <th style={thTdStyle}>ARM SUPPORTED CYPRESS POWERED EMBEDDED SYSTEM LAB	</th>
                  <th style={thTdStyle}>2018</th>
                  <th style={thTdStyle}>Cypress Semiconductor Corporation
</th>

              </tr>  
              <tr>
                  <th style={thTdStyle}>5</th>
                  <th style={thTdStyle}>DELL EMC - CENTRE OF EXCELLENCE FOR DATA SCIENCE AND BIG DATA ANALYTICS	</th>
                  <th style={thTdStyle}>2017	</th>
                  <th style={thTdStyle}>Electronics Sector Skills Council of India (ESSCI), New Delhi
</th>

              </tr>  
              
              </tbody>   
      </table>
      </div>
  )
}

export default Industrysupportedlabs