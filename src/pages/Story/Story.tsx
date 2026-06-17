import { useLayoutEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import './Story.css';

// Import assets
import hat from '../../assets/images/hat.svg';
import ballon1 from '../../assets/images/ballon1.svg';
import ballon2 from '../../assets/images/ballon2.svg';
import ballon3 from '../../assets/images/ballon3.svg';
import dp from '../../assets/images/IMG-20241116-WA0061.jpg';

const Story = () => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);

  const data = {
    greeting: "Hey love ❤️",
    name: "Edem Joy",
    greetingText: "I love your name so much; it’s as beautiful as you!",
    wishText: "May your days always shine as brightly as your smile, my Joy. ❤️",
    text1: "It’s your 19th birthday, my love!!! 🥳",
    textInChatBox: "Happy birthday to the most amazing girl ever! 🎉💕",
    sendButtonLabel: "Send with love",
    text2: "I wanted to make today all about celebrating you.",
    text3: "Because you deserve the world.",
    text4: "And I realized, I wanted to do something",
    text4Adjective: "extraordinary",
    text5Entry: "Because,",
    text5Content: "You are Extraordinary",
    smiley: "❤️",
    bigTextPart1: "S",
    bigTextPart2: "O",
    outroText: "I hope you loved this, just as much as I love you. 💕",
    replayText: "Or click, if you want to feel loved all over again.",
    outroSmiley: "😘"
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const ideaTextTrans = { opacity: 0, y: -20, rotationX: 5, skewX: "15deg" };
      const ideaTextTransLeave = { opacity: 0, y: 20, rotationY: 5, skewX: "-15deg" };

      const tl = gsap.timeline();

      tl.to(".container", { duration: 0.1, visibility: "visible" })
        .from(".one", { duration: 0.7, opacity: 0, y: 10 })
        .from(".two", { duration: 0.4, opacity: 0, y: 10 })
        .to(".one", { duration: 0.7, opacity: 0, y: 10 }, "+=2.5")
        .to(".two", { duration: 0.7, opacity: 0, y: 10 }, "-=1")
        .from(".three", { duration: 0.7, opacity: 0, y: 10 })
        .to(".three", { duration: 0.7, opacity: 0, y: 10 }, "+=2")
        .from(".four", { duration: 0.7, scale: 0.2, opacity: 0 })
        .from(".fake-btn", { duration: 0.3, scale: 0.2, opacity: 0 })
        .to(".hbd-chatbox span", { duration: 0.5, visibility: "visible", stagger: 0.05 })
        .to(".fake-btn", { duration: 0.1, backgroundColor: "rgb(127, 206, 248)" })
        .to(".four", { duration: 0.5, scale: 0.2, opacity: 0, y: -150 }, "+=0.7")
        .from(".idea-1", { duration: 0.7, ...ideaTextTrans })
        .to(".idea-1", { duration: 0.7, ...ideaTextTransLeave }, "+=1.5")
        .from(".idea-2", { duration: 0.7, ...ideaTextTrans })
        .to(".idea-2", { duration: 0.7, ...ideaTextTransLeave }, "+=1.5")
        .from(".idea-3", { duration: 0.7, ...ideaTextTrans })
        .to(".idea-3 strong", { duration: 0.5, scale: 1.2, x: 10, backgroundColor: "rgb(21, 161, 237)", color: "#fff" })
        .to(".idea-3", { duration: 0.7, ...ideaTextTransLeave }, "+=1.5")
        .from(".idea-4", { duration: 0.7, ...ideaTextTrans })
        .to(".idea-4", { duration: 0.7, ...ideaTextTransLeave }, "+=1.5")
        .from(".idea-5", { duration: 0.7, rotationX: 15, rotationZ: -10, skewY: "-5deg", y: 50, z: 10, opacity: 0 }, "+=0.5")
        .to(".idea-5 .smiley", { duration: 0.7, rotation: 90, x: 8 }, "+=0.4")
        .to(".idea-5", { duration: 0.7, scale: 0.2, opacity: 0 }, "+=2")
        .from(".idea-6 span", { duration: 0.8, scale: 3, opacity: 0, rotation: 15, stagger: 0.2, ease: "expo.out" })
        .to(".idea-6 span", { duration: 0.8, scale: 3, opacity: 0, rotation: -15, stagger: 0.2, ease: "expo.out" }, "+=1")
        .fromTo(".baloons img", { opacity: 0.9, y: 1400 }, { duration: 2.5, opacity: 1, y: -1000, stagger: 0.2 })
        .from(".lydia-dp", { duration: 0.5, scale: 3.5, opacity: 0, x: 25, y: -25, rotationZ: -45 }, "-=2")
        .from(".hat", { duration: 0.5, x: -100, y: 350, rotation: -180, opacity: 0 })
        .from(".wish-hbd span", { duration: 0.7, opacity: 0, y: -50, rotation: 150, skewX: "30deg", stagger: 0.1, ease: "elastic.out(1, 0.5)" })
        .to(".wish-hbd span", { duration: 0.7, scale: 1, rotationY: 0, color: "#ff69b4", stagger: 0.1, ease: "expo.out" }, "party")
        .from(".wish h5", { duration: 0.5, opacity: 0, y: 10, skewX: "-15deg" }, "party")
        .to(".eight svg", { duration: 1.5, visibility: "visible", opacity: 0, scale: 80, repeat: 3, repeatDelay: 1.4, stagger: 0.3 })
        .to(".six", { duration: 0.5, opacity: 0, y: 30, zIndex: "-1" })
        .from(".nine p", { duration: 1, ...ideaTextTrans, stagger: 1.2 })
        .to(".last-smile", { duration: 0.5, rotation: 90 }, "+=1");

    }, containerRef);
    return () => ctx.revert();
  }, []);

  const splitChars = (text: string) => {
    return text.split("").map((char, i) => (
      <span key={i} style={{ visibility: 'hidden', display: 'inline-block' }}>{char === " " ? "\u00A0" : char}</span>
    ));
  };

  return (
    <div className="story-body" ref={containerRef}>
      <div className="container">
        <div className="one">
          <h1 className="one">
            <span style={{ fontSize: '25px' }}>{data.greeting}</span> <br />
            <span>{data.name}</span>
          </h1>
          <p className="two">{data.greetingText}</p>
        </div>
        <div className="three">
          <p>{data.text1}</p>
        </div>
        <div className="four">
          <div className="text-box">
            <p className="hbd-chatbox">{splitChars(data.textInChatBox)}</p>
            <p className="fake-btn">{data.sendButtonLabel}</p>
          </div>
        </div>
        <div className="five">
          <p className="idea-1">{data.text2}</p>
          <p className="idea-2">{data.text3}</p>
          <p className="idea-3">
            <span>{data.text4}</span>
            <strong>{data.text4Adjective}</strong>.
          </p>
          <p className="idea-4">{data.text5Entry}</p>
          <p className="idea-5">
            <span>{data.text5Content}</span>
            <span className="smiley">{data.smiley}</span>
          </p>
          <p className="idea-6">
            <span>{data.bigTextPart1}</span>
            <span>{data.bigTextPart2}</span>
          </p>
        </div>
        <div className="six">
          <img src={dp} alt="" className="lydia-dp" />
          <img src={hat} alt="" className="hat" />
          <div className="wish">
            <h3 className="wish-hbd">{splitChars("Happy Birthday! 🎉❤️ ")}</h3>
            <h5>{data.wishText}</h5>
          </div>
        </div>
        <div className="seven">
          <div className="baloons">
            {[ballon2, ballon1, ballon3, ballon1, ballon2, ballon3, ballon2, ballon3, ballon1, ballon2, ballon3, ballon2, ballon1, ballon3, ballon2, ballon3, ballon1, ballon2, ballon1, ballon3, ballon3, ballon1, ballon2, ballon3, ballon2, ballon1, ballon3, ballon2, ballon3, ballon1, ballon2, ballon1, ballon3].map((b, i) => (
              <img key={i} src={b} alt="" />
            ))}
          </div>
        </div>
        <div className="eight">
          {Array.from({ length: 9 }).map((_, i) => (
            <svg key={i} viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="20" />
            </svg>
          ))}
        </div>
        <div className="nine">
          <p>{data.outroText}</p>
          <p id="replay" onClick={() => navigate('/')}>{data.replayText}</p>
          <p className="last-smile">{data.outroSmiley}</p>
        </div>
      </div>
    </div>
  );
};

export default Story;
