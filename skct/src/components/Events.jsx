import React from 'react';
import HeaderA from './HeaderA';

const Events = () => {
  const containerStyle = {
    margin: '0 auto', 
    // width:'fit-content', 
  };

  const ContainerStyle = {
    display:'flex',
    justifyContent:'left',
    alignItems: 'left',
    height: '50vh', 
    padding:'10px',
  };

  const iframeStyle = {
    marginBottom: '20px', 
    border: 'none',
    margin: '0 auto',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  return (
   
    <div style={containerStyle}> 
    <HeaderA/>
    <br></br><br></br><br></br>
         <h1 style={{ textAlign: 'center' }}>CAMPUS LIFE</h1>

    <div style={ContainerStyle}>{}
      <iframe
        width="420"
        height="315"
        margin= '0 auto'
        src="https://www.youtube.com/embed/1Qzr8jDWRVM?si=8OZm9Rnw5M6ByQEj"

        title="YouTube video player"
        style={iframeStyle}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      {/* </div> */}
      {/* <div style={ContainerStyle}>{} */}
<iframe 
  width="420" 
  height="315" 
  style={iframeStyle}
  src="https://www.youtube.com/embed/-MCPJqC2Iy8?si=dL7ijKpDgMJBcLrg"
  title="YouTube video player" 
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  allowfullscreen>
</iframe>
{/* </div>`` */}
{/* <div style={ContainerStyle}>{} */}
<iframe width="420" height="315"   style={iframeStyle} src="https://www.youtube.com/embed/CS80fJJHWqw?si=43FffQJAhGcyAjhv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

      </div> 
    </div>
  );
}

export default Events;