import React from 'react';
import './App.css';
import { Container } from 'reactstrap';
import Header from './components/header';
import MeetingInput from './components/add-meeting';
import Participant from './components/add-participant';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header></Header>
      <Container>
        <MeetingInput></MeetingInput>
        <br/>
        <Participant></Participant>
      </Container>
    </div>
  );
}

export default App;
