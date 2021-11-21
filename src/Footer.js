import { Navbar, Container } from 'react-bootstrap'


function Footer() {
    return (
        <Navbar bg="dark" variant="dark" fixed="bottom">
            <Container>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Github: <a href="https://github.com/dharmil-patel/">Dharmil Patel</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}


export default Footer;