
import ScrollSpy from "react-scrollspy-navigation";
import { createRef } from "react";
import HeaderA from "./HeaderA";

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

export default function Table() {
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
      <style>{`.App {
    font-family: sans-serif;
    
  }
  
  
  .r {
    height: 84vh;
  
    background: white;
  }
  
  .k {
    height: 35vh;
    background: white;
  }
  .u {
    height: 44vh;
    background: white;
  }
  .v {
    height: 35vh;
    background: white;
  }
  
  .n {
  
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(255, 255, 255);
    gap: 2em;
    position: fixed;
    top: 0;
    width: 100%;
    font-size: 1.5em;
    padding: 0.4em;
    color:bisque
  }
  
  
  
  `
}</style>


    <div className="App">
        
      <div className="n">
        <ScrollSpy>
          <a href="#s1" ref={createRef()}>
            About
          </a>
          <a href="#s2" ref={createRef()}>
            Mess
          </a>
          <a href="#s3" ref={createRef()}>
            
Dining Facilities
          </a>
          <a href="#s4" ref={createRef()}>
           Timings
          </a>
          <a href="#s5" ref={createRef()}>
           
Facilities
          </a>
        </ScrollSpy>
      </div>
      <div id="s1" className="s r">
        
        <img src="https://skcet.ac.in/wp-content/uploads/2023/12/Hostel-2.jpg" style={{width:'50%', height:'90%'}} ></img>
        <img src="https://skcet.ac.in/wp-content/uploads/2023/12/Food-Court-2.jpg" style={{width:'50%' ,height:'90%'}}></img>
        <h2 style={{color:'brown'}}>ABOUT HOSTEL</h2>
        <p>SKCT students boys hostel is an integral part of the college campus and girls hostel is located 3kms away from campus. Hostel bus is ply from girls hostel to college campus. The gents’ hostel comprises of five blocks with a capacity to accommodate 1200 students. The Ladies hostel has a total of 143 rooms in its three blocks with a capacity to accommodate 484 students. All men and women residents of the hostel are provided rooms on a four sharing basis. Beauty Parlour & Spa, Photostat Shop, Fresh Juice Shop, Chat shop, General Stores., etc. are the facilities available in girls hostel.</p>
      </div>
      <div id="s2" className="s k">
        <br></br><br></br><br></br><br></br>
        <h2 style={{color:'brown'}}>MESS</h2>
        <p>
        Our Hostel Mess, presently feeding 803 students, is run by the contractor M/s Saraswathi Natarajan Hospitality Pvt Ltd . Only Vegetarian food is served in the mess. The mess is run on a fixed rate system. For the smooth functioning of Hostel mess, there is a Mess Manager who looks after the day – to – day affairs of the Hostel mess and guides the Mess Committee in the smooth functioning of the hostel and mess. All residents are required to take their meals in the dining hall during the prescribed mess timings.
        </p>
        <h2 style={{color:'brown'}}>TOTAL NO. OF STUDENTS</h2>
        <ul>
                    <li>Boys – 916</li>
                    <li>Girls – 484</li>
        </ul>
       
        
      </div>
      <div id="s3" className="s u">
        <br></br><br></br><br></br>
        <h2 style={{color:'brown'}}>DINING HALLS</h2>
        <ul>
                    <li>No. of dining halls for boys – 2 </li>
                    <li> No. of dining halls for girls – 1</li>
        </ul>
        <h2 style={{color:'brown'}}>SEATING CAPACITY</h2>
        <ul>
                    <li>Boys dining – 732</li>
                    <li>Girls dining – 432</li>
                    <li>Total – 1164</li>
                    <li>Staff dining Capacity – 24</li>
        </ul>
      
      </div>
      <div id="s4" className="s v"> 
 <h2 style={{color:'brown'}}>HOSTEL MESS WILL BE OPERATED ONLY ON THE FOLLOWING TIME FOR STUDENTS.</h2>
 <table style={tableStyle}>
          <thead>
              <tr>
                  <th style={thStyle}>Morning(Breakfast)</th>
                  <th style={thStyle}>Afternoon(Lunch)</th>
                  <th style={thStyle}>Tea time</th>
                  <th style={thStyle}>Night(Dinner)</th>
                  
              </tr>
          </thead>
          <tbody>
          <tr>
                  <th style={thTdStyle}>07.30 A.M to 8.30 A.M</th>
                  <th style={thTdStyle}>01.00 P.M to 02.00 P.M</th>
                  <th style={thTdStyle}>5.00 P.M to 06.00 P.M</th>
                  <th style={thTdStyle}>07.00 P.M to 08.30 P.M</th>
                  
              </tr> 
              <h2 style={{color:'brown'}}>FOR SUNDAYS ONLY</h2>
              <tr>
                  <th style={thTdStyle}>07.30 A.M to 09.30 A.M</th>
                  <th style={thTdStyle}>12.30 P.M to 02.30 P.M</th>
                  <th style={thTdStyle}>4.30 P.M to 06.00 P.M</th>
                  <th style={thTdStyle}>07.00 P.M to 08.30 P.M
</th>
                  
              </tr>  
              </tbody>
              </table>
      </div>
      <div id="s5" className="s v">
        <br></br><br></br>
 <h2 style={{color:'brown'}}>
 RO WATER FACILITY
 </h2>
 <p>Purified water from Reverse Osmosis Plant is utilized for cooking and drinking. Hot water is also provided for cooking and drinking purposes.</p>
 <h2 style={{color:'brown'}}>24X7 WI-FI FACILITIES</h2>
 <p>24 hours wi-fi facilities available in both boys and Girls Hostel</p>
 <h2 style={{color:'brown'}}>ATTENDANCE</h2>
 <ul>
  <li>Boys Hostel- Biometric attendance (students must punch in biometric between 8:00P.M -9:00 P.M and attendance details are send to parents immediately through SMS)</li>
  <li>Girls Hostel- Taken by deputy wardens between 8:00P.M -9:00 P.M</li>
 </ul>
 <h2 style={{color:'brown'}}>DEPUTY WARDEN</h2>
 <p>Deputy Warden is alloted for every 40 students for monitoring and taking care. Deputy wardens are accompanied with sick students for Hospital Visit.</p>
 <h2 style={{color:'brown'}}>24X7 AMBULANCE FACILITY</h2>
 <p>24 hours Ambulance facility is available for both boys and girls hostel</p>
 <h2 style={{color:'brown'}}>KITCHEN</h2>
 <p>Cleanliness, ease of working and time saving are the crucial factors that have gone into the design of kitchen at the SKCT Hostel. Steam and LPG power the kitchen. All vessels, both cooking and serving, are of quality stainless steel.</p>
 <h2 style={{color:'brown'}}>PRODUCTION</h2>
 <p>All items are prepared hygienically with extra care in centralized kitchen only. Quality of food is checked at every stage of preparation by Mess Manager.</p>
 <h2 style={{color:'brown'}}>
 DISTRIBUTION 
 </h2>
 <p>The food is served hot. We are able to manage the crowd at peak hours minimizing wastage of food and maintaining hygienic condition.</p>
 <h2 style={{color:'brown'}}>REPORTS</h2>
 <p>Every month mess committee meeting is held with students, Residential wardens, Chief wardens, Deputy warden, Mess Manager and Catering Unit Manager. Daily mess information report is submitted to higher authorities. Remarks from higher authorities and students are discussed with Contractor immediately recording explanation. Housekeeping schedule is periodically inspected.</p>
 <h2 style={{color:'brown'}}>HOUSE KEEPING</h2>
 <p>Daily House Keeping information report is submitted to higher authorities.</p>
 <h2 style={{color:'brown'}}>HOSTEL MAINTENANCE</h2>
 <p>Infrastructure, Water, Electrical facilities are checking daily basis and Students complaints are taken into action Immediately.</p>
 </div>
    </div>
    </div>
    
  );
}
