import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Carose() {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  const goToNextSlide = () => {
    sliderRef.current.slickNext();
  };

  const goToPrevSlide = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div style={{ position: 'relative' }}>

      <Slider ref={sliderRef} {...settings}>
        <div>
          <div style={{ backgroundImage: `url('https://t4.ftcdn.net/jpg/03/78/40/11/360_F_378401105_9LAka9cRxk5Ey2wwanxrLTFCN1U51DL0.jpg')`, backgroundSize: 'cover', height: '750px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>

            <img src="https://greenwoodhigh.edu.in/wp-content/uploads/2023/09/PV3_6175-ANISH-VIVEK.jpg" alt="Slide 1 Image" style={{ width: '400px', height: '400px' ,borderRadius: '50%', objectFit: 'cover',position: 'absolute', top: '50%', left: '100px', transform: 'translateY(-50%)' }} />
            <img src="https://via.placeholder.com/150" alt="Side Image" style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', position: 'absolute', top: '50%', left: '-100px', transform: 'translateY(-50%)' }} />
            <img src="https://via.placeholder.com/150" alt="Side Image" style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', position: 'absolute', top: '50%', right: '-100px', transform: 'translateY(-50%)' }} />
           
<h1>
<h1 style={{ textAlign: 'center', marginBottom:'600px',marginRight:'10px'}}>
              ALUMNI SPEAKS</h1>
  </h1>           

    
            <p >
            <p style={{ textAlign: 'center', maxWidth: '450px', margin: '0 auto', textAlign: 'center',justifyContent:'center',alignItems:'center',fontSize:'100' }}>

"I am now an entrepreneur for nearly 5 years successfully running my own company UPDATE STUDIOS. I still remember the first time I won a short film contest in SKCT and that was the starting point of my career. From then on, the responsibilities and opportunities they gave me made me find my inner potential. I am overwhelmed by the recognition I am receiving from SKCT and my teachers till today. According to me, if every college finds the students' right field of interest and talent and encourage them to work passionately , then their talent will eventually reach out to the world and they will become a star."
</p>
</p>
          </div>
        </div>
        <div>
        <div style={{ backgroundImage:` url('https://img.freepik.com/free-photo/abstract-textured-backgound_1258-30581.jpg?size=626&ext=jpg&ga=GA1.1.684216697.1708873947&semt=ais')`, backgroundSize: 'cover', height: '750px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>

            <img src="https://i.pinimg.com/736x/8c/6a/78/8c6a785483ee3e92d8163f2fac2cc567.jpg" alt="Slide 1 Image" style={{ width: '400px', height: '400px', borderRadius: '50%', objectFit: 'cover',position: 'absolute', top: '50%', left: '100px', transform: 'translateY(-50%)' }} />
            <img src="https://via.placeholder.com/150" alt="Side Image" style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', position: 'absolute', top: '50%', left: '-100px', transform: 'translateY(-50%)' }} />
            <img src="https://via.placeholder.com/150" alt="Side Image" style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', position: 'absolute', top: '50%', right: '-100px', transform: 'translateY(-50%)' }} />
            <h1>
<h1 style={{ textAlign: 'center', marginBottom:'600px',marginRight:'10px'}}>
NAZIA (2017 – 2020)

  </h1>
  </h1>    
            <p style={{ textAlign: 'center', maxWidth: '450px', margin: '0 auto', textAlign: 'center',justifyContent:'center',alignItems:'center',fontSize:'100' }}>

            <p>“Choosing Sri Krishna College of Technology to pursue B.Tech IT was one of the best decisions in my life. The faculty were master’s of the trade, supportive and friendly, the management was keen in the welfare of students and the placement cell was at the top of their feet to ensure a good career for their students. Thanks to SKCT, after 6 years in the Industry working for companies like DELL EMC, I’m at Trinity College Dublin, Ireland for my Master’s and the basic skill set I acquired from SKCT is helping me even now. I would surely vouch for my Alma Mater!”
</p>
</p>
          </div>
        </div>
        <div>
        <div style={{ backgroundImage: `url('https://img.freepik.com/free-photo/abstract-textured-backgound_1258-30581.jpg?size=626&ext=jpg&ga=GA1.1.684216697.1708873947&semt=ais')`, backgroundSize: 'cover', height: '750px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>

            <img src="https://media.licdn.com/dms/image/C5603AQHN8TmDgS1A_Q/profile-displayphoto-shrink_800_800/0/1649483085305?e=2147483647&v=beta&t=veB7wfcYOs_331W-3xGxLOpW18zgzO_i0CXkiIK0YrU" alt="Slide 1 Image" style={{ width: '400px', height: '400px', borderRadius: '50%', objectFit: 'cover',position: 'absolute', top: '50%', left: '100px', transform: 'translateY(-50%)' }} />
            <img src="https://via.placeholder.com/150" alt="Side Image" style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', position: 'absolute', top: '50%', left: '-100px', transform: 'translateY(-50%)' }} />
            <img src="https://via.placeholder.com/150" alt="Side Image" style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', position: 'absolute', top: '50%', right: '-100px', transform: 'translateY(-50%)' }} />
            <h1>
<h1 style={{ textAlign: 'center', marginBottom:'600px',marginRight:'10px'}}>NITHIN KUMAR(2019 - 2021)

  </h1>
  </h1>    
            <p>
            <p style={{ textAlign: 'center', maxWidth: '450px', margin: '0 auto', textAlign: 'center',justifyContent:'center',alignItems:'center',fontSize:'100' }}>

The most important four years of my career started here at SKCT. I can never forget the contribution of the CSE Department, my faculty, and Placement cell towards helping me develop those crucial skills which allowed me to hit the ground running and have success in various roles so far. The faculty here are very supportive, providing us freedom to explore and excel in our areas of interest to bring out the best in us. We were given opportunities to organize several workshops and participate in many programs which I found to be rewarding in every aspect. I feel I use the knowledge learned from my degree every day in my career. I currently work with ZetaOpt (LLC) as a Programmer/Infrastructure Consultant. In spite of having a 6-year break, I could resume my career solely due to these foundations. 
</p>
</p>
          </div>
        </div>
        <div>
        <div style={{ backgroundImage:` url('https://img.freepik.com/free-photo/abstract-textured-backgound_1258-30581.jpg?size=626&ext=jpg&ga=GA1.1.684216697.1708873947&semt=ais')`, backgroundSize: 'cover', height: '750px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
            <img src="https://live.staticflickr.com/3741/8875025219_fa4ab2ceb4_z.jpg" alt="Slide 1 Image" style={{ width: '400px', height: '400px', borderRadius: '50%', objectFit: 'cover',position: 'absolute', top: '50%', left: '100px', transform: 'translateY(-50%)' }} />
            <img src="https://via.placeholder.com/150" alt="Side Image" style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', position: 'absolute', top: '50%', left: '-100px', transform: 'translateY(-50%)' }} />
            <img src="https://via.placeholder.com/150" alt="Side Image" style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', position: 'absolute', top: '50%', right: '-100px', transform: 'translateY(-50%)' }} />
            <h1>
<h1 style={{ textAlign: 'center', marginBottom:'600px',marginRight:'10px'}}>
SOFIYA (2016 - 2019)

  </h1>
  </h1>    
            <p style={{ textAlign: 'center', maxWidth: '450px', margin: '0 auto', textAlign: 'center',justifyContent:'center',alignItems:'center',fontSize:'100' }}>

            <p>My journey at SKCT was the cornerstone of my success. The solid foundation I built during my bachelor's degree provided me with the essential skills and knowledge to embark on a path of success. It propelled me to pursue a master's degree at Cardiff University (A Russell Group of University) with a scholarship, in the United Kingdom, and I am now a fully-funded doctoral researcher at Loughborough University in the U.K., where I am directing an innovative initiative on "Renewable Energy from Waste". I owe a significant part of my success to the exceptional faculty members at SKCT who not only shaped my academic journey during my bachelor's but continue to influence and inspire me in my pursuit of knowledge and innovation. They were my biggest ladder towards achieving my dreams, and I am forever grateful for their guidance and mentorship.

</p>
</p>
          </div>
          </div>
          <div>
          <div style={{ backgroundImage: `url('https://img.freepik.com/free-photo/abstract-textured-backgound_1258-30581.jpg?size=626&ext=jpg&ga=GA1.1.684216697.1708873947&semt=ais')`, backgroundSize: 'cover', height: '750px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
            <img src="https://i.pinimg.com/originals/83/60/f6/8360f6e8e6167d545b0c34de7490cc1e.jpg" alt="Slide 1 Image" style={{ width: '400px', height: '400px', borderRadius: '50%', objectFit: 'cover',position: 'absolute', top: '50%', left: '100px', transform: 'translateY(-50%)' }} />
            <img src="https://via.placeholder.com/150" alt="Side Image" style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', position: 'absolute', top: '50%', left: '-100px', transform: 'translateY(-50%)' }} />
            <img src="https://via.placeholder.com/150" alt="Side Image" style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', position: 'absolute', top: '50%', right: '-100px', transform: 'translateY(-50%)' }} />
            <h1>
<h1 style={{ textAlign: 'center', marginBottom:'600px',marginRight:'10px'}}>
PREM CHAND (2019 - 2022)

  </h1>
  </h1>    
            <p style={{ textAlign: 'center', maxWidth: '450px', margin: '0 auto', textAlign: 'center',justifyContent:'center',alignItems:'center',fontSize:'100' }}>

            <p>Delivering an 'Alumni Talk' at my Alma Mater, visiting after more than a decade, was indeed a nostalgic and breath-taking experience. The rejuvenated atmosphere, the vastness of the campus and the facilities within, the vibrant student community, the sincere and committed faculty and staff members of the institution made me feel proud of the institution. I would be delighted to contribute to the institution's success story in some way."

</p>
</p>
          </div>
          </div>

      </Slider>
      <button className="prev" style={{ position: 'absolute', top: '45%', left: '10px', zIndex: '1', border: 'none', backgroundColor: 'transparent', color: 'black', fontSize: '50px' }} onClick={goToPrevSlide}>{"<"}</button>
      <button className="next" style={{ position: 'absolute', top: '45%', right: '10px', zIndex: '1', border: 'none', backgroundColor: 'transparent', color: 'black', fontSize: '50px' }} onClick={goToNextSlide}>{">"}</button>
    </div>
  );
}

export default Carose;