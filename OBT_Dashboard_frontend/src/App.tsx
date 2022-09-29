import React from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

import './App.css';
import CustomNavBar from './components/CustomNavBar';

interface AppProps { }

class App extends React.Component<AppProps> {

  render() {
    return (
      <Container fluid className="m-0 p-0 bg-light w-100 h-100" >
        <CustomNavBar />
        <Container className="mt-1">
          <Container fluid>
            <Outlet />
          </Container>
        </Container>
      </Container>
    );
  }
}

export default App;
