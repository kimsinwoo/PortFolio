import { docker, ec, ini, js, node, react, ts, vs, vue } from "../asset/img";
import React, { forwardRef } from "react";

const Stack = forwardRef<HTMLDivElement>((props, ref) => {
    return (
      <div className="ScreenLast" ref={ref}>
        <div className="greenCricle"></div>
          <div className="stackContainer">
            <h1>스택</h1>
            <div className="stackBox">
                <div><img width={90} src={react} alt="" /></div>
                <div><img width={90} src={vue} alt="" /></div>
                <div><img width={90} src={node} alt="" /></div>
                <div><img width={90} src={js} alt="" /></div>
                <div><img width={90} src={ts} alt="" /></div>
            </div>
          </div>
          <div className="stackContainer">
            <h1>프로그램</h1>
            <div className="stackBox">
                <div><img width={90} src={vs} alt="" /></div>
                <div><img width={90} src={ini} alt="" /></div>
                <div><img width={90} src={ec} alt="" /></div>
                <div><img width={90} src={docker} alt="" /></div>
            </div>
          </div>
      </div>
    );
  })

  export default Stack
  