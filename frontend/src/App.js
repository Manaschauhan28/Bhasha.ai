import logo from './logo.svg';
import { HashRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import Header from './components/Header'
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ImageCaraousel from './components/ImageCaraousel';



function App() {
  return (
    <Router>
    <Header />
    {/* <ImageCaraousel /> */}
    <main className='py-3'>
        <HomeScreen/>
    </main>
    <Footer />
    </Router>
  );
}

export default App;
