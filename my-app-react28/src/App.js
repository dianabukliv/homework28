import './App.css';
import Form from './components/Form';
import Main from './components/Main';
import styled from "styled-components";

const MainApp = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 30px;
`
function App() {
  return (
   <MainApp>
      <Form/>
      <Main/>
   </MainApp>
  );
}

export default App;
