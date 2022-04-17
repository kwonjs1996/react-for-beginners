import Button from "./Button";
import styles from "./App.module.css";
//css파일을 모듈화 할 수 있다. 모듈화 한 css를 가져왔을 때 임의의 ClassName이 들어간다
//이건 엄청난 일이다 근데 왜인지는 잘 모르겠다.
function App() {
  return (
    <div>
      <h1 className={styles.title}>Welcome back</h1>
      <Button text={"Continue"} />
    </div>
  );
}

export default App;
