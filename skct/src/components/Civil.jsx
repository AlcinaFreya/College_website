import React  from 'react'
import { Link } from 'react-router-dom'
import HeaderA from './HeaderA'
import { useState } from 'react'
const Civil = () => {

  const containerStyle = {
    display: 'flex',
  };

  const imageContainerStyle = {
    flex: 0,
    padding: '10px',
  };

  const imageStyle = {
    width: '300px',
    height: '300px',
  };

  const detailsContainerStyle = {
    flex: 1,
    padding: '10px',
    marginLeft: '100px',
    boxSizing: 'border-box',
  };

  const [isHovered, setIsHovered] = useState(false);

  const footerStyle = {
    backgroundColor: isHovered ? 'darkblue' : 'blue',
    textAlign: 'center',
    color: 'white',
    marginTop: '20px', 
    transition: 'background-color 0.3s ease', 
    margin: '0 auto', 
    padding:'15px',
    
  };


  return (
    <div style={{ marginBottom: '0px' }}>
      <HeaderA/>
      <br></br>
<br></br><br></br>
 
<div>
  <img src='https://www.srikrishna.ac.in/images/Slider/Slide2_1.jpg' alt="CIVIL" width="1520px" height="600px" />
  <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: '#fff' }}>
    <h1 style={{ fontSize: '4rem', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}>CIVIL DEPARTMENT</h1>
    
  </div>
</div>
<div style={{ marginLeft: '20px' }}>
<h2 style={{color:'blue'}}>DEPARTMENT OF CIVIL ENGINEERING</h2>
<h3>ACCREDITED BY NBA, RECOGNIZED RESEARCH CENTRE - ANNA UNIVERSITY.</h3>
<hr></hr>
<div style={{backgroundColor:"white"}}>
  <h2 style={{color:'orange'}}>ABOUT DEPARTMENT</h2>
  <p>The Department of Civil Engineering was established in 1985. This was followed by a Post Graduate Programme in Structural Engineering in 2002 and Ph.D. Programme in 2007. All the Programmes are approved by AICTE and the UG Programme is accredited by NBA. Dr. I. Padmanaban, HOD with a well qualified team of faculty provides the right academic atmosphere for the students to become Civil Engineers par excellence with an aptitude for research. In the past three decades, the department has seen a lot of progress in academics, research and consultancy activities. In addition, the department is recognized as a Research Centre by Anna University,Chennai. As of now about 19 scholars have earned their Ph.D. from our Research Centre and more than 30 scholars are pursuing Ph.D. We have a dedicated faculty team of 11 members for UG,PG and Ph.D. programmes, out of which 6 are doctorates. The Department has state-of-the-art labs and classrooms.</p>
</div>

<h2 style={{color:'orange'}}>VISION</h2>
<p>The Department of Civil Engineering strives to impart quality Education with Research focus on Social, Economical and Environmental needs through global technological developments.</p>

<h2 style={{color:'orange'}}>MISSION</h2>
<li>To offer a better facility and conducive environment for Education, Research and Innovation.</li>
<li>To promote entrepreneurial thinking and management skills in students.
</li>
<li>To inculcate social and environmental responsibilities in students.</li>
<li>To strive for continual improvement with global standards.</li>
<h2 style={{color:'orange'}}>HOD'S DESK</h2>
<div style={containerStyle}>
      <div style={imageContainerStyle}>
        <img src="https://media.licdn.com/dms/image/C5603AQFELU7Ze3z5nA/profile-displayphoto-shrink_800_800/0/1642068024077?e=2147483647&v=beta&t=Rnv6ZXOqzNKKJbVGNEId4DsvAzI6b-DVDQjzNdGI4ww" alt="hod" style={imageStyle} />
      </div>
      <div style={detailsContainerStyle}>
        <p>The Department of Civil Engineering was set up in 1985 and continues to offer excellent teaching and research by a team of well qualified and dedicated member of faculty. Dr.I.Padmanaban, Professor and Head with copious academic and research experience, steers the department. He completed his Bachelor's degree in Civil Engineering at the National Institute of Technology, Bhopal in 1999 and subsequently his Master's degree in Advanced Construction Technology from Pondicherry Engineering 2001. He received his doctoral degree in Studies of High and Low Volume Fly ash Concrete from Anna University, Chennai in 2001. At present 9 scholars are pursuing Ph.D. Programme under his guidance. He has 16 years of teaching and research experience. He has published 36 papers in national/international conferences and referred journals. He has also delivered guest lectures in various reputed institutions. He has organized various funded programs including Seminars, Workshops, Conferences and FDP’s by receiving funds from various agencies like DRDO, MOES, Anna University, etc.</p> 
      </div>
    </div>
    <h2 style={{color:'orange'}}>PROGRAM EDUCTIONAL OBJECTIVES</h2> 
    <p>PEO1. To produce students with proficiency in the fundamentals of engineering science, analytical, quantitative skills and design in the field of Civil Engineering.</p>
<p>PEO2. To train the students to develop safe, sustainable, economical and environmentally viable solutions for the overall welfare of the society.</p>
<p>PEO3. To produce graduates who can exhibit communication skills, attitude, professionalism, and ethics to solve civil engineering problems.</p>
<p>PEO4. To educate graduates to adopt the latest trends by engaging themselves in lifelong learning.</p>
<h2 style={{color:'orange'}}>PROGRAM OUTCOMES</h2> 
<p>Graduates of the Civil Engineering program of Sri Krishna College of Technology will have the ability to</p>
<ol>
  <li>Engineering knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.</li>
 <li>Problem analysis: Identity, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.</li>
<li>Design/development of solutions: Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations.</li>
<li> Conduct investigations of complex problems: Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.</li>
<li>Modern tool usage: Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations.</li>
<li> The engineer and society: Apply to reason informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.</li>
<li>Environment and sustainability: Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.</li>
<li>Ethics: Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.</li>
<li> Individual and teamwork: Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.</li>
<li>Communication: Communicate effectively on complex engineering activities with the engineering community and with society at large, such as being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.</li>
<li> Project management and finance: Demonstrate knowledge and understanding of the engineering and management principles and apply these to one’s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.</li>
<li> Life-long learning: Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.</li>
</ol>
<h2 style={{color:'orange'}}>PROGRAM SPECIFIC OUTCOMES</h2> 
<p>A graduate of the Civil Engineering Program of Sri Krishna College of Technology will demonstrate:</p>
<p>PSO 1. Professional Skills: Apply the concepts and solve problems in at least three subdivisions of Civil Engineering namely Structures, Environmental, Hydraulics, Transportation Engineering, Construction Management, and Geotechnical Engineering.</p>
<p>PSO 2. Successful Career and Leadership: Graduates can explain the role of a leader, leadership principles, and attitudes conducive to the effective professional practice of Civil Engineering.</p>
</div>
<div
        style={footerStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <h2>HEAD OF THE DEPARTMENT</h2>
        <h3>Dr.I.Padmanaban</h3>
        <h3>EMAIL: padmanaban.i@skct.edu.in</h3>
        <h3>PHONE: 9566775418</h3>
     
</div>
</div>

  )
}

export default Civil