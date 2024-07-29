import React  from 'react'
import { Link } from 'react-router-dom'
import HeaderA from './HeaderA'
import { useState } from 'react'
const Mechanical = () => {

  const containerStyle = {
    display: 'flex',
  };

  const imageContainerStyle = {
    flex: 0,
    padding: '10px',
  };

  const imageStyle = {
    width: '500px',
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
  <img src='https://www.srikrishna.ac.in/images/Slider/Slide3.jpg' alt="Mech" width="1520px" height="600px" />
  <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: '#fff' }}>
    <h1 style={{ fontSize: '4rem', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}>MECHANICAL DEPARTMENT</h1>
    
  </div>
</div>
<div style={{ marginLeft: '20px' }}>
<h2 style={{color:'blue'}}>DEPARTMENT OF MECHANICAL ENGINEERING</h2>
<h3>ACCREDITED BY NBA (2021-2027), RECOGNIZED RESEARCH CENTRE - ANNA UNIVERSITY.</h3>
<hr></hr>
<div style={{backgroundColor:"white"}}>
  <h2 style={{color:'orange'}}>ABOUT DEPARTMENT</h2>
  <p>The department of Mechanical Engineering was established in the year 1985. We are equipped with state-of-the-art laboratories and computing facilities. Dr. P. Prathap leads the team of highly qualified and accelerated faculty from the front for the development of the students in academic activities and placement. Our alumni’s are occupying accountable positions in several Industries like Hyundai, TVS – Sundram Fasteners, Bosch, Turbo Energy and Asahi Glass. We are renovating our students with a perfect balance of intellectual and real-world experiences that help them in serving the demands from our society.</p>
</div>

<h2 style={{color:'orange'}}>VISION</h2>
<p>The Department of mechanical engineering strives to provide excellent education and research leading to competent mechanical engineers who are creative, entrepreneurial and expertise in advanced fields of mechanical engineering to cater for the challenging industrial demands and societal needs</p>

<h2 style={{color:'orange'}}>MISSION</h2>
<li> Impart quality education which includes a strong foundation in fundamental theory and versatile exposure to practical applications.</li>
<li>Enhance their skills in advanced fields to make them globally competitive mechanical engineers to cater for the ever-changing industrial demands.
</li>
<li>Maintain a collaborative research environment with state-of-art facilities that stimulate faculty and students with opportunities to learn, create and disseminate knowledge.</li>
<li>Inculcate entrepreneurial skills and ethical values with opportunities to meet societal needs.</li>
<h2 style={{color:'orange'}}>HOD'S DESK</h2>
<div style={containerStyle}>
      <div style={imageContainerStyle}>
        <img src="data:image/jpeg;base64,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" alt="hod" style={imageStyle} />
      </div>
      <div style={detailsContainerStyle}>
        <p>A warm welcome to the Department of Mechanical Engineering at Sri Krishna College of Technology, Coimbatore. The journey was started in the year of 1985. Over the last three decades, the department has grown with a wide range of competence in the core Mechanical Engineering curriculum. The basic focus of the curriculum is to impart technical knowledge to students to handle the problems effectively and succeed them without making it as a hurdle by utilizing the recent technologies. The students are motivated to take up various innovative project works to augment their skill of problem solving. We have state of the art research facilities in the constitution to make students as industry ready graduates. Our department holds a good track record in both teaching and research areas. Faculty members have excellent academic credentials and experience. Our department looks forward to contributing to solving the technological challenges of the society with active participation from all sections of the society. We also arrange various industrial visits to reputed industries and research organizations, conduct talks by eminent personalities and technocrats, organise national & international conferences, seminars on recent developments. The department has also established a product development cell to groom the students to participate in Hackathons, SAE events, Quality Circle forum events and various robotic related events. If you have further questions after browsing this website, please do not hesitate to contact us. You may also correspond with individual faculty members, or contact them by email, using the addresses shown on the faculty pages.</p> 
      </div>
    </div>
    <h2 style={{color:'orange'}}>PROGRAM EDUCTIONAL OBJECTIVES</h2> 
    <p>PEO1.Graduates will be successful profession in mechanical or allied Industries/ Research/ Academics/Business enterprise.</p>
<p>PEO2. Graduates will exhibit attitudes and abilities of leaders to adapt the changing global scenario.</p>
<p>PEO3.Graduates will possess good professional personality and ethical values to lead as good human beings, responsible citizens and competent professionals.</p>

<h2 style={{color:'orange'}}>PROGRAM OUTCOMES</h2> 

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

<p>PSO 1: Graduates have an ability to identify, formulate and analyze the problems of existing mechanical engineering system and new product development.</p>
<p>PSO 2: Graduates have an ability to implement appropriate manufacturing techniques, computer aided engineering tools for modelling, simulation and analysis of mechanical engineering problems</p>
</div>
<div
        style={footerStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <h2>HEAD OF THE DEPARTMENT</h2>
        <h3>Dr. P. Prathap</h3>
        <h3>EMAIL: prathap.p@skct.edu.in</h3>
        <h3>PHONE: 9894196974</h3>
     
</div>
</div>

  )
}

export default Mechanical