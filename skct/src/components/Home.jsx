import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Home() {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  const goToNextSlide = () => {
    sliderRef.current.slickNext();
  };

  const goToPrevSlide = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div style={{ position: 'relative', textAlign: 'center', border: '1px solid #000', borderRadius: '8px', overflow: 'hidden',padding: '40px',borderColor:"gray" }}>
      <Slider ref={sliderRef} {...settings}>
        <div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
            <img
              src="https://data.skct.edu.in/media/certify_that_SRI_KRISHNA_COLLEGE_OF_TECHNOLOGY_Coimabatore_Tamil_Nadu_page-0001.jpg"
              alt="Slide 1"
              style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: '8px' }}
            />
          </div>
          <h2></h2>
          <p></p>
        </div>
        <div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
            <img
              src="https://data.skct.edu.in/media/WhatsApp_Image_2022-02-04_at_3.54.27_PM.jpeg"
              alt="Slide 2"
              style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: '8px' }}
            />
          </div>
          <h2></h2>
          <p></p>
        </div>
        <div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
            <img
              src="https://data.skct.edu.in/media/WhatsApp_Image_2021-06-27_at_12.20.38_PM.jpeg"
              alt="Slide 3"
              style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: '8px' }}
            />
          </div>
          <h2></h2>
          <p></p>
        </div>
        <div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
            <img
              src="https://data.skct.edu.in/media/ARI-C-37064_2_page-0001_1.jpg"
              alt="Slide 4"
              style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: '8px' }}
            />
          </div>
          <h2></h2>
          <p></p>
        </div>

        <div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
            <img
              src="https://data.skct.edu.in/media/IIC5.0_Achievment.jpeg"
              alt="Slide 5"
              style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: '8px' }}
            />
          </div>
          <h2></h2>
          <p></p>
        </div>

        <div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
            <img
              src="https://data.skct.edu.in/media/IMG-20230602-WA0011.jpg"
              alt="Slide 6"
              style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: '8px' }}
            />
          </div>
          <h2></h2>
          <p></p>
        </div>

        <div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
            <img
              src="https://data.skct.edu.in/media/ARI-C-37064_2_page-0001_1.jpg"
              alt="Slide 7"
              style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: '8px' }}
            />
          </div>
          <h2></h2>
          <p></p>
        </div>

        <div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
            <img
              src="https://data.skct.edu.in/media/IMG-20211209-WA0037.jpg"
              alt="Slide 8"
              style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: '8px' }}
            />
          </div>
          <h2></h2>
          <p></p>
        </div>

        <div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
            <img
              src="https://data.skct.edu.in/media/WhatsApp_Image_2021-12-01_at_8.25.27_PM.jpeg"
              alt="Slide 9"
              style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: '8px' }}
            />
          </div>
          <h2></h2>
          <p></p>
        </div>

        <div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
            <img
              src="https://data.skct.edu.in/media/0001_s7HgM0Y.jpg"
              alt="Slide 10"
              style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: '8px' }}
            />
          </div>
          <h2></h2>
          <p></p>
        </div>

        <div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
            <img
              src="https://data.skct.edu.in/media/WhatsApp_Image_2021-06-07_at_12.44.56_PM.jpeg"
              alt="Slide 11"
              style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: '8px' }}
            />
          </div>
          <h2></h2>
          <p></p>
        </div>


      </Slider>
      <button className="prev" style={{ position: 'absolute', top: '50%', left: '10px', zIndex: '1', border: 'none', backgroundColor: 'transparent', color: 'black', fontSize: '50px' }} onClick={goToPrevSlide}>{"<"}</button>
      <button className="next" style={{ position: 'absolute', top: '50%', right: '10px', zIndex: '1', border: 'none', backgroundColor: 'transparent', color: 'black', fontSize: '50px' }} onClick={goToNextSlide}>{">"}</button>
    </div>
  );
}

export default Home;
