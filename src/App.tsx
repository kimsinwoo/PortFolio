import { useEffect, useState, useRef } from "react";
import "./App.css";
import my from "./asset/img/back.png";
import MainPage from "./components/MainPage";
import About from "./components/About";
import Stack from "./components/Stack";
import { isMobile } from "react-device-detect";
import { AboutMobile, MainPageMobile, StackMobile } from "./components";

function App() {
  const [img, setImg] = useState(true);

  // 각 컴포넌트를 참조하기 위한 ref 생성
  const mainPageRef = useRef(null);
  const aboutRef = useRef(null);
  const stackRef = useRef(null);

  useEffect(() => {
    // 페이지 로드 시 이미지 표시 여부 설정
    setImg(window.location.pathname === "/");
  }, []);

  // 특정 요소로 스크롤하는 함수
  const scrollToComponent = (ref: any) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  if(isMobile) {
    return (
      <div className="App">
      {img ? <img src={my} alt="" className="imgContainer" /> : ""}
      <div className="NavBar">
        <ul className="navbarElements">
          <li>
            <a href="https://github.com/kimsinwoo"></a>
          </li>
          <li>
            <a href="https://velog.io/@sinwoo_dev/posts"></a>
          </li>
          <li>
            <a href="https://www.instagram.com/kim_su37/"></a>
          </li>
          <li onClick={() => scrollToComponent(mainPageRef)}></li>
          <li onClick={() => scrollToComponent(aboutRef)}></li>
          <li onClick={() => scrollToComponent(stackRef)}></li>
        </ul>
        <div className="navbarElements">
          <p></p>
          <p>김신우</p>
        </div>
      </div>
      <div>
        <MainPageMobile ref={mainPageRef} />
        <AboutMobile ref={aboutRef} />
        <StackMobile ref={stackRef} />
      </div>
    </div>
    )
  }
  return (
    <div className="App">
      {img ? <img src={my} alt="" className="imgContainer" /> : ""}
      <div className="NavBar">
        <ul className="navbarElements">
          <li>
            <a href="https://github.com/kimsinwoo">GitHub</a>
          </li>
          <li>
            <a href="https://velog.io/@sinwoo_dev/posts">Velog</a>
          </li>
          <li>
            <a href="https://www.instagram.com/kim_su37/">Instagram</a>
          </li>
          <li onClick={() => scrollToComponent(mainPageRef)}>Home</li>
          <li onClick={() => scrollToComponent(aboutRef)}>About</li>
          <li onClick={() => scrollToComponent(stackRef)}>Skill</li>
        </ul>
        <div className="navbarElements">
          <p>dev.sinwoo@gmail.com</p>
          <p>김신우</p>
        </div>
      </div>
      <div>
        <MainPage ref={mainPageRef} />
        <About ref={aboutRef} />
        <Stack ref={stackRef} />
      </div>
    </div>
  );
}

export default App;
