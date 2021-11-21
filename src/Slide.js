import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import { useState } from 'react';
import './Slide.css';


function Slide() {

    const reactInfo = [
        {
            id: 1,
            title: 'Why React JS?',
            about: "It's used for handling the view layer for web and mobile apps. ...React also allows us to create reusable UI components.React allows developers to create large web applications that can change data, without reloading the page. The main purpose of React is to be fast, scalable, and simple."
        },
        {
            id: 2,
            title: 'How to start with React JS?',
            about: "React official documentation, Learn React Fundamentals, Build An App."
        }
        ,
        {
            id: 3,
            title: 'React JS 101',
            about: 'JSX is a powerful implementation detail of React. It’s a cool feature that makes React easy and fun to use because it’s relatively quick to make a feature and rewarding to see it. JSX brings HTML directly into avaScript and allows you to build HTML within the JavaScript code.'
        }
    ]

    let [slideIndex, setSlideIndex] = useState(0);
    let [prevDisplay, setPrevDisplay] = useState(false);
    let [resetDisplay, setResetDisplay] = useState(false);
    let [nextDisplay, setNextDisplay] = useState(true);

    function prevSlideInfo(e) {
        e.preventDefault();

        setNextDisplay(true);
        if (slideIndex === 1) {
            setPrevDisplay(false)
        }

        setSlideIndex(slideIndex - 1);
    }

    function nextSlideInfo(e) {
        e.preventDefault();

        if (slideIndex === reactInfo.length - 2) {
            setNextDisplay(false);
        } else {
            setResetDisplay(true);
            setPrevDisplay(true);
        }

        setSlideIndex(slideIndex + 1);
    }

    function resetSlideInfo(e) {
        e.preventDefault();
        setSlideIndex(0);
        setResetDisplay(false);
        setPrevDisplay(false);
        setNextDisplay (true);
    }

    return (
        <>
            <Row className="justify-content-md-center" style={{marginTop : '3.25rem'}}>
                <Col className="text-center text-md-right">               
                    <Button variant="primary" size="lg" onClick={prevSlideInfo} disabled={!prevDisplay}>
                        Prev
                    </Button>
                </Col>
                <Col className="text-center text-md-right">
                    <Button variant="primary" size="lg" onClick={resetSlideInfo} disabled={!resetDisplay}>
                        Reset
                    </Button>
                </Col>
                <Col className="text-center text-md-right">
                    <Button variant="primary" size="lg" onClick={nextSlideInfo} disabled={!nextDisplay}>
                        Next
                    </Button>
                </Col>
            </Row>
            <br />
            <Card border="primary"
                style={{  width: '90%', height: '100%' }}
                className="text-center mx-auto">
                <Card.Body>
                    <Card.Title>{reactInfo[slideIndex].id + '. ' + reactInfo[slideIndex].title}</Card.Title>
                    <Card.Text>
                        {reactInfo[slideIndex].about}
                        <br /><br />

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Etiam fermentum ipsum non dolor venenatis, ut bibendum sapien consectetur.
                        Pellentesque egestas eros a nunc imperdiet, posuere sodales odio consequat.
                        Morbi pellentesque velit vitae commodo accumsan. Aenean varius lacus et nibh malesuada porttitor.
                        Curabitur nec lacinia ipsum. Nulla varius ligula tellus, eget luctus sapien pretium sit amet.
                        Nam nunc nisl, vehicula ac leo et, fringilla semper mauris.
                        <br />
                        <br />
                        Pellentesque sem diam, fringilla lobortis rutrum vitae, lacinia ut ex. Sed sit amet rutrum elit.
                        Nunc vestibulum tincidunt molestie. Vestibulum sed volutpat enim. Aenean imperdiet in ante ac aliquet.
                        Mauris pretium quam eleifend risus eleifend, eget rhoncus mauris commodo.
                        In porta purus ac felis malesuada ornare.
                        Aliquam lobortis ac felis a eleifend. Quisque dapibus porta semper.


                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}


export default Slide;