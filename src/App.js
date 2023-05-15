import { styled } from "styled-components";
import "./App.css";
import { Counter } from "./Components/Counter/Counter";
import { Timer } from "./Components/Timer/Timer";
import { Input } from "./Components/Valid/Input";

function App() {
  return (
    <>
      <Counter />
      <Container>
        <h1>Form</h1>
        <Input type="email" />
        <Input type="password" />
      </Container>
      <Timer />
    </>
  );
}

export default App;
const Container = styled.div`
  background-color: #af6afd;
  margin: 0 auto;
  width: 500px;
  height: 300px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 70px;
`;
