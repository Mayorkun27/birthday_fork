import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Greeting.css";
import Cake from "../../components/common/Cake";

// Import assets
import balloonBorder from "../../assets/images/Balloon-Border.png";
import banner from "../../assets/images/banner.png";
import hbdSong from "../../assets/audio/hbdsong.mp3";
import otitoImg from "../../assets/images/otito.png";

const Greeting = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [isLightsOn, setIsLightsOn] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [balloonsFlying, setBalloonsFlying] = useState(false);
  const [showCake, setShowCake] = useState(false);
  const [candlesLit, setCandlesLit] = useState(false);
  const [showWish, setShowWish] = useState(false);
  const [showSunmenceMessage, setShowSunmenceMessage] = useState(false);
  const [showStory] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(-1);

  const audioRef = useRef<HTMLAudioElement>(null);
  const balloonRefs = useRef<(HTMLDivElement | null)[]>([]);

  const messages = [
    "Today is...",
    "as beautiful as other days",
    "but you realize",
    "another year has gone",
    "in a blink of the eyes",
    "however",
    "Do you know..?",
    "today is just special",
    "so special to you",
    "that's why",
    "Let's make it...",
    "the best celebration ever",
    "and let me share...",
    "a piece of happiness to you",
    "I made all this...",
    "as a birthday present to you",
    "thanks for being there",
    "thanks for the friendship we made",
    "thanks for everything",
    "I wish you all the best",
    "May your life be at ease",
    "May all your wishes come true",
    "Remember",
    "your ambitions",
    "you live as a free bird...",
    "flying in the blue sky",
    "Now things are different...",
    "real story of your life",
    "is just about to begin",
    "indeed..",
    "but...",
    "don't worry",
    "because...",
    "God has your back",
    "and",
    "this year will be better",
    "and I hope",
    "you'll find...",
    "happiness along the way",
    "keep your spirit up",
    "enjoy every single moment...",
    "that you experience today",
    "fill it with your most beautiful smile",
    "and make it the best memory..",
    "lastly...",
    "I'd like to wish you one more time",
    "a very happy birthday Edem Joy Imma-o-Bong",
  ];

  useEffect(() => {
    if (balloonsFlying) {
      balloonRefs.current.forEach((balloon) => {
        if (balloon) {
          const animateBalloon = () => {
            gsap.to(balloon, {
              left: Math.random() * (window.innerWidth - 100),
              bottom: Math.random() * (window.innerHeight - 200) + 200,
              duration: 10 + Math.random() * 5,
              onComplete: animateBalloon,
              ease: "none",
            });
          };
          animateBalloon();
        }
      });

      gsap.to(".balloon-border", {
        top: "-500px",
        duration: 8,
        ease: "power1.inOut",
      });
    }
  }, [balloonsFlying]);

  useEffect(() => {
    if (showWish) {
      gsap.to(
        [
          ".balloons-container",
          ".balloon-border",
          ".bulbs-row",
          ".bannar",
          ".cake-cover",
        ],
        {
          opacity: 0,
          duration: 2,
          onComplete: () => {
            setShowSunmenceMessage(true);
          },
        },
      );
    }
  }, [showWish]);

  useEffect(() => {
    if (showStory) {
      if (currentMessageIndex === -1) {
        gsap.to(".final-message-container", {
          opacity: 0,
          duration: 1,
          onComplete: () => {
            setShowSunmenceMessage(false);
            setCurrentMessageIndex(0);
          },
        });
      } else if (currentMessageIndex < messages.length) {
        const timer = setTimeout(() => {
          if (currentMessageIndex < messages.length - 1) {
            setCurrentMessageIndex((prev) => prev + 1);
          } else {
            setTimeout(() => {
              navigate("/card");
            }, 3000);
          }
        }, 2500);
        return () => clearTimeout(timer);
      }
    }
  }, [showStory, currentMessageIndex, navigate, messages.length]);

  const handleTurnOn = () => {
    setIsLightsOn(true);
    setStep(1);
  };

  const handlePlayMusic = () => {
    setIsMusicPlaying(true);
    if (audioRef.current) {
      audioRef.current.play();
    }
    setStep(2);
  };

  const handleBanner = () => {
    setShowBanner(true);
    setStep(3);
  };

  const handleBalloons = () => {
    setBalloonsFlying(true);
    setStep(4);
  };

  const handleCake = () => {
    setShowCake(true);
    setStep(5);
  };

  const handleCandle = () => {
    setCandlesLit(true);
    setStep(6);
  };

  const handleWish = () => {
    setShowWish(true);
    setStep(7);
  };

  return (
    <div
      className={`greeting-body ${isLightsOn ? "peach" : ""} ${isMusicPlaying ? "peach-after" : ""}`}
    >
      <audio ref={audioRef} loop>
        <source src={hbdSong} type="audio/mpeg" />
      </audio>

      <div className="loading" style={{ display: "none" }}></div>

      {!showSunmenceMessage && (
        <img
          src={balloonBorder}
          width="100%"
          className="balloon-border"
          alt=""
        />
      )}

      <div
        className="container"
        style={{ borderWidth: "4px", borderColor: "yellow" }}
      >
        {!showSunmenceMessage && (
          <>
            <div className="row bulbs-row">
              {["yellow", "red", "blue", "green", "pink", "orange"].map(
                (color) => (
                  <div key={color} className="col-md-2 col-xs-2 bulb-holder">
                    <div
                      className={`bulb bulb-${color} ${isLightsOn ? `bulb-glow-${color}` : ""} ${isMusicPlaying ? `bulb-glow-${color}-after` : ""}`}
                    ></div>
                  </div>
                ),
              )}
            </div>

            <div className="row">
              <div className="col-md-12 text-center">
                <img
                  src={banner}
                  className={`bannar ${showBanner ? "bannar-come" : ""}`}
                  alt=""
                />
              </div>
            </div>
          </>
        )}

        {showCake && !showStory && !showSunmenceMessage && (
          <div className="row cake-cover">
            <div
              className="col-md-12 text-center position-relative"
              style={{ height: "300px" }}
            >
              <div className="cake-wrapper" style={{ display: "block" }}>
                <Cake />
                {candlesLit && (
                  <style>{`.fuego { display: block !important; }`}</style>
                )}
              </div>
            </div>
          </div>
        )}

        {showSunmenceMessage && (
          <div className="final-message-container fade-in">
            <div className="titobox">
              <img
                src={otitoImg}
                alt="Otito"
                className="otito-img"
              />
            </div>
            <div className="text-center text-md-start mt-4 mt-md-0">
              <h1 className="sunmence-text">
                Happy Birthday Miss Tito, 
              </h1>
              <p className="sub-sub-sub">from all of us at Sunmence</p>
            </div>
          </div>
        )}

        {showStory && (
          <div className="row message">
            <div className="col-md-12 text-center">
              {messages.map((msg, i) => (
                <p
                  key={i}
                  className={`story-message ${i === currentMessageIndex ? "active" : ""}`}
                >
                  {msg}
                </p>
              ))}
            </div>
          </div>
        )}

        <div className="navbar navbar-fixed-bottom">
          <div className="row w-100">
            <div className="col-md-12 text-center">
              {step === 0 && (
                <button className="btn btn-primary" onClick={handleTurnOn}>
                  turn on lights
                </button>
              )}
              {step === 1 && (
                <button className="btn btn-primary" onClick={handlePlayMusic}>
                  play music
                </button>
              )}
              {step === 2 && (
                <button className="btn btn-primary" onClick={handleBanner}>
                  let's decorate
                </button>
              )}
              {step === 3 && (
                <button className="btn btn-primary" onClick={handleBalloons}>
                  fly with balloons
                </button>
              )}
              {step === 4 && (
                <button className="btn btn-primary" onClick={handleCake}>
                  most delicious cake ever
                </button>
              )}
              {step === 5 && (
                <button className="btn btn-primary" onClick={handleCandle}>
                  light candle
                </button>
              )}
              {step === 6 && (
                <button className="btn btn-primary" onClick={handleWish}>
                  a message for you
                </button>
              )}
              {/* {step === 7 && (
                <button className="btn btn-primary" onClick={handleStory}>
                  a message for you
                </button>
              )} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Greeting;