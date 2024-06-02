// App.js
import React, { useState, useEffect } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import Loader from './components/Loader';
import './App.css'; // Make sure this file exists and has the necessary styles

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time with a timeout
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust the duration as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : (
        <Router>
          <Header />
          <main className='py-3'>
            <HomeScreen />
          </main>
          <Footer />
        </Router>
      )}
    </Container>
  );
}

export default App;
