import { useState, useEffect } from "react";
//css파일을 모듈화 할 수 있다. 모듈화 한 css를 가져왔을 때 임의의 ClassName이 들어간다
//이건 엄청난 일이다 근데 왜인지는 잘 모르겠다. 아마도 파일을 분리해서 관리하기에 용이하기 때문?

function Hello() {
  useEffect(() => {
    console.log("Hi");
    return () => console.log("Bye");
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
