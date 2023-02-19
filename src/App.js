import { useState } from "react";
import QuizPage from "./Components/QuizPage";
import Welcome from "./Components/Welcome";
import styled from "styled-components";
import Example from './Components/Modal'
import { ThemeProvider } from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import Fib from "./Fib";


function App() {
  const [isStarted, setIsStarted] = useState(false);

  const Container = styled.div`
background-color: ${({ theme }) => theme.colors.footer};
font-size: ${({ dupa }) => dupa ? '50px' : '10px'

    };
`
  const theme = {
    colors: {
      body: '#444',
      footer: '#040430',
    },
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {!isStarted && <Welcome isStarted={{ isStarted, setIsStarted }} />}
        {isStarted && <QuizPage />}
        <Container dupa className='container '>Dupa</Container>
        <Example ></Example>
        <Fib />
      </div>
    </ThemeProvider>
  );
}

export default App;
