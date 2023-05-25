import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
/*document.getElementById('root')
root라는 ID을 가진 요소를 프로젝트에 있는 HTML파일에 접근
render에 jsx코드를 전달
이 코드를 화면에 뿌리라는 거임
StrictMode가 하는 일은 우리가 작성한 코드가 최적인지 아닌지를 확인
APP부분 jsx코드 반환
컴포넌트는 보통 jsx코드를 반환하는 함수
render함수에 전달한 것은 결국 h1요소
*/
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
