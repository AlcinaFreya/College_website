import React from 'react'
import HeaderA from './HeaderA';

const Office = () => {
    const containerStyle = {
        textAlign: 'center'
    };

    const h1Style = {
        color: 'orange'
    };

    const h2Style = {
        color: 'blue'
    };

    const tableStyle = {
        margin: 'auto',
        borderCollapse: 'collapse',
        width: '80%',
        marginTop: '20px'
    };

    const thStyle = {
        backgroundColor: '#f2f2f2',
        padding: '12px 15px',
        textAlign: 'center',
        border: '1px solid #ddd'
    };

    const thTdStyle = {
        padding: '12px 15px',
        textAlign: 'center',
        border: '1px solid #ddd'
    };
  return (
    <div>
        <HeaderA/>
      <br></br>
      <br></br><br></br>
        <h1 style={h1Style}>COE OFFICE</h1>
        <br></br>
  <br></br>
      
      <table style={tableStyle}>
          <thead>
              <tr>
                  <th style={thStyle}>S.NO</th>
                  <th style={thStyle}>Name of the Faculty</th>
                  <th style={thStyle}>Designation</th>
                  
              </tr>
          </thead>
          <tbody>
          <tr>
                  <th style={thTdStyle}>1</th>
                  <th style={thTdStyle}>Dr. SUMITHRA M G</th>
                  <th style={thTdStyle}>Chief Controller</th>
                  
              </tr> 
              <tr>
                  <th style={thTdStyle}>2</th>
                  <th style={thTdStyle}>Dr.R.RAMESH KUMAR</th>
                  <th style={thTdStyle}>COE & Dean</th>
                  
              </tr>  
                
              <tr>
                  <th style={thTdStyle}>3</th>
                  <th style={thTdStyle}>Dr.J.S.SUJIN</th>
                  <th style={thTdStyle}>Deputy - CoE</th>
                  
              </tr>  
              <tr>
                  <th style={thTdStyle}>4</th>
                  <th style={thTdStyle}>	Mr.P.ARUN KARTHICK</th>
                  <th style={thTdStyle}>Deputy - CoE</th>
                  
              </tr>  
              <tr>
                  <th style={thTdStyle}>5</th>
                  <th style={thTdStyle}>Mr. N. ARAVIND KUMAR</th>
                  <th style={thTdStyle}>ERP Coordinator</th>
                  
              </tr>  
              <tr>
                  <th style={thTdStyle}>6</th>
                  <th style={thTdStyle}>	Mr.V.RAVISHANKAR</th>
                  <th style={thTdStyle}>Senior Assistant</th>
                  
              </tr>  
              <tr>
                  <th style={thTdStyle}>7</th>
                  <th style={thTdStyle}>Mr.G.PASUPATHI</th>
                  <th style={thTdStyle}>Junior Assistant</th>
                 
              </tr>  
              <tr>
                  <th style={thTdStyle}>8</th>
                  <th style={thTdStyle}>Mr. P. CHINNARAJ</th>
                  <th style={thTdStyle}>Office Assistant</th>
                  
              </tr>
              
              </tbody>   
      </table>
      </div>
  )
}

export default Office