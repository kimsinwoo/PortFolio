import my from "../asset/img/my.jpeg";
import React, { forwardRef } from "react";

const About = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div className="ScreenLastAboutMobile" ref={ref}>
      <div>
        <h2>안녕하세요!!</h2>
        <h3>김신우 입니다!</h3>
        <p>
          사진에서 보시는 것처럼, 저는 열정적이고 도전을 즐기는 개발자입니다.
          마이크로소프트 애저 해커톤, 교내 캡스톤, 그리고 교내 해커톤 등 다양한
          대회에 참가하며 경험을 쌓았습니다.
        </p>
        <p>
          현재 Express와 JSON Web Token을 활용한 로그인 인증 및 CRUD 작업에
          능숙하며, 새로운 기술인 NestJS와 Vue.js를 학습하고 있습니다. 주력
          기술로는 React.js를 사용하여 개발하고 있습니다.
        </p>
        <p>
          항상 밝은 미소로 새로운 도전에 임하는 저의 모습처럼, 개발 분야에서도
          긍정적인 에너지로 혁신적인 솔루션을 만들어내고자 노력하고 있습니다.
        </p>
      </div>
      <img src={my} alt="" />
    </div>
  );
})

export default About
