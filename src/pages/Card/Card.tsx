import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Card.css';
import cardPhoto from '../../assets/images/IMG-20241116-WA0062.jpg';

const Card = () => {
  const navigate = useNavigate();
  const [cardClass, setCardClass] = useState('');

  const handleOpen = () => {
    setCardClass('open-half');
    setTimeout(() => {
      setCardClass('open-fully');
    }, 1000);
  };

  const handleClose = () => {
    setCardClass('close-half');
    setTimeout(() => {
      setCardClass('');
    }, 1000);
  };

  const handleNext = () => {
    setTimeout(() => {
      navigate('/story');
    }, 1000);
  };

  return (
    <div className="card-page">
      <div id="card" className={cardClass}>
        <div id="card-inside">
          <div className="wrap">
            <center>
              <p className="animated-text">
                <b><u>Happy <span style={{ fontSize: '30px' }}>19th</span> Birthday, Imma-O-bong! 🎉❤️</u></b>
              </p>
            </center>
            <p>You are the sunshine in my life and the reason my days are so bright. As you step into this beautiful chapter, may your dreams soar higher and your heart be filled with endless joy 😍</p>
            <p>You are more than just my girlfriend; you’re my best friend, my inspiration, and my everything. I’m so lucky to celebrate you today and always. Cheers to many more adventures, laughter, and love together!</p>
            <p className="signed"><u>Made With ❤️</u></p>
            <p className="text-center">OluwaFisayomi</p>
          </div>
          <button id="closee" onClick={handleNext}>&RightTeeArrow;</button>
        </div>

        <div id="card-front">
          <div className="wrap">
            <h1 className="animated-swing">Happy Birthday Love</h1>
            <div className="cake_and_velas">
              <div className="velas">
                <div className="fuego"></div>
                <div className="fuego"></div>
                <div className="fuego"></div>
                <div className="fuego"></div>
                <div className="fuego"></div>
              </div>
              <svg id="cake" version="1.1" x="0px" y="0px" width="290px" height="500px" viewBox="0 0 200 500">
                <path fill="#a88679" d="M173.667-13.94H26.333c-3.999 0-4-16.002 0-16.002h147.334c4 0 4.001 16.002 0 16.002z" />
                <path fill="#8b6a60" d="M100-178.521a3.364 3.364 0 0 1 3.364 3.363V-13.75a3.364 3.364 0 1 1-6.728 0v-40.607-76.575-44.226a3.364 3.364 0 0 1 3.364-3.363z" />
                <path fill="#a88679" d="M173.667-15.929H26.333c-3.999 0-4-16.002 0-16.002h147.334c4 0 3.999 16.002 0 16.002z" />
                <path fill="#8b6a60" d="M101.368-73.685V-6.35c0 1.753-2.958 1.847-2.958 0v-30.401-8.305-28.628c.001-2.199 2.958-1.908 2.958-.001z" />
                <path fill="#a88679" d="M173.667 21.571H26.333c-4 0-4-16.002 0-16.002h147.334c4.001 0 4 16.002 0 16.002z" />
                <path fill="#fefae9" d="M104.812 113.216c0 3.119-2.164 5.67-4.812 5.67-2.646 0-4.812-2.551-4.812-5.67V90.841 70.273v-29.33-22.092V5.67C95.188 2.551 97.353 0 100 0c2.648 0 4.812 2.551 4.812 5.669V113.216z" />
                <path fill="#fefae9" d="M10 475.571h180v4H10z" />
              </svg>
            </div>
          </div>
          <button id="open" onClick={handleOpen}>&gt;</button>
          <button id="close" onClick={handleClose}>&lt;</button>
          <div className="card-front_inside">
            <br /> <br /> <br />
            <div className="polaroid">
              <div className="img" style={{ backgroundImage: `url(${cardPhoto})` }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
