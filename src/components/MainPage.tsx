import { useNavigate } from "react-router-dom";
import React, { forwardRef, useState, useEffect } from "react";

const MainPage = forwardRef<HTMLDivElement>((props, ref) => {
  const phrases = ["미래를 생각하는", "도전을 즐기는", "성장을 추구하는"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let charIndex = isDeleting ? phrases[index].length : 0;
    let typingInterval: NodeJS.Timeout;

    const typeText = () => {
      if (!isDeleting && charIndex < phrases[index].length) {
        setText(phrases[index].slice(0, charIndex + 1));
        charIndex++;
      } else if (isDeleting && charIndex > 0) {
        setText(phrases[index].slice(0, charIndex - 1));
        charIndex--;
      } else {
        clearInterval(typingInterval);
        if (!isDeleting) {
          setTimeout(() => setIsDeleting(true), 3000);
        } else {
          setIsDeleting(false);
          setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }
      }
    };

    typingInterval = setInterval(typeText, isDeleting ? 100 : 150);

    return () => clearInterval(typingInterval);
  }, [index, isDeleting]);

  return (
    <div className="Screen" ref={ref}>
      <div className={`intro`}>
        <div>
          <h2 style={{ fontSize: "30px" }}>{text}</h2>
          <h1 style={{ fontSize: "47px" }}>김신우 입니다.</h1>
          <p>
            현재 프론트엔드를 지향하고 있으며 백엔드와 함께 공부를 하고
            있습니다.
          </p>
        </div>
      </div>
      <div className="arrow_background"></div>
      <div className="arrowContainer">
        <p className={`arrowText`}>스크롤을 해주세요!</p>
        <i className={`arrow`}></i>
      </div>
    </div>
  );
});

export default MainPage;
