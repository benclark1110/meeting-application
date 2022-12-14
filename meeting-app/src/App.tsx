import React from 'react';
import './App.css';
import { Container } from 'reactstrap';
import Header from './components/header';
import MeetingInput from './components/add-meeting';
import Participant from './components/add-participant';
import Case from './components/add-case';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header></Header>
      <Container>
        <Case></Case>
        <br/>
        <MeetingInput></MeetingInput>
        <br/>
        <Participant></Participant>
      </Container>
    </div>
  );
}

export default App;
