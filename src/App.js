import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Slide from './Slide'
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container fluid>
      <Header />
      <br />
      <Slide />
    </Container>

  );
}

export default App;
