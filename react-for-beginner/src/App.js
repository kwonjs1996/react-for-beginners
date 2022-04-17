//import Button from "./Button";
//import styles from "./App.module.css";
import { useState, useEffect } from "react";
//css파일을 모듈화 할 수 있다. 모듈화 한 css를 가져왔을 때 임의의 ClassName이 들어간다
//이건 엄청난 일이다 근데 왜인지는 잘 모르겠다. 아마도 파일을 분리해서 관리하기에 용이하기 때문?
function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("i run all the time");
  useEffect(() => {
    console.log("Call the API...");
  }, []);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
