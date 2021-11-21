import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Slide from './Slide'
import { Container } from 'react-bootstrap';
import Footer from './Footer'

function App() {
  return (
    <Container fluid>
      <Header />
      <br />
      <Slide />
      <Footer/>
    </Container>

  );
}

export default App;
