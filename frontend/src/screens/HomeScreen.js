import React, {useState} from 'react'
import { Container, Row, Col, Button, Image, Form, Figure, Card } from 'react-bootstrap'
import axios from 'axios'


function HomeScreen() {
    const [inputText, setInputText] = useState('');
    const [showResponse, setShowResponse] = useState(false);
    const [responseText, setResponseText] = useState(''); 
    const [highlightedText, setHighlightedText] = useState('');


    const handleInputChange = (event) => {
        setInputText(event.target.value); 
    };

    const handleCheckButtonClick = async () => {
        try {
            // Make an HTTP POST request to your backend API endpoint with the input text
            const response = await axios.post('http://127.0.0.1:8002/check', {
                text: inputText + " "
            });
            // Handle the response from the backend
            console.log('Response from backend:', response.data);
            setResponseText(response.data); // Set response text
            highlightDifferences(inputText, response.data)
            setShowResponse(true); // Show the response textarea
        } catch (error) {
            // Handle errors
            console.error('Error:', error);
        }};

        const highlightDifferences = (inputText, responseText) => {
            // Split input and response text into words
            const inputWords = inputText.split(' ');
            const responseWords = responseText.split(' ');
        
            // Compare each word and mark differences
            let highlighted = '';
            inputWords.forEach((word, index) => {
              if (word === responseWords[index]) {
                highlighted += word + ' ';
              } else {
                // Mark differences in red
                highlighted += `<span style="color: red">${word}</span> `;
              }
            });
            setHighlightedText(highlighted);
          };
        
  return (
    <Container variant='secondary'>
        <Row>
            <Col className='text-center fs-1 mt-3 p-2'>Welcome to Pari भाषा.ai</Col>
        </Row>
        <Row>
            <Col className='text-center fs-4 mt-3 p-1'>"अपनी हिंदी को सही और बेहतर बनाएं, Pari भाषा.ai के साथ।" </Col>
        </Row>
       


        <Card className="text-center m-5 p-1">
        <Card.Header></Card.Header>
        <Card.Body>
            <Card.Title>Input Here :</Card.Title>
            <Form.Group className='mb-3'>
                    <Form.Label> </Form.Label>
                    <Form.Control as="textarea" 
                    placeholder='यहाँ टाइप करे ...' 
                    rows={9} 
                    value={inputText}
                    
                    onChange={handleInputChange}
                    />

                    </Form.Group>
            
            <Button variant="success" onClick={handleCheckButtonClick}>Check & Correct Me</Button>
            {showResponse && (
            <>
              <Card.Text className='m-3'>
                
                <div dangerouslySetInnerHTML={{ __html: highlightedText }} />


              </Card.Text>
              <Card.Text className='m-3'>
                <strong>Correct Text :</strong> {responseText} 
              </Card.Text>
            </>
          )}
        </Card.Body>
        <Card.Footer className="text-muted"></Card.Footer>
        </Card>
    </Container>
  )
}

export default HomeScreen



