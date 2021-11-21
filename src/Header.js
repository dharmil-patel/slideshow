import { Navbar, Container} from 'react-bootstrap';

function Header(){
    return(
        <Navbar bg="dark" variant="dark" fixed="top">
        <Container className="justify-content-center" style={{ flex: 1}}>
          <Navbar.Brand >Slide Show</Navbar.Brand>
        </Container>
      </Navbar>
    );
}

export default Header;