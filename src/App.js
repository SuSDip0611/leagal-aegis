import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTop from "react-scroll-to-top";
import Container from 'react-bootstrap/Container';

import './App.css';
import AppLayout from './Components/AppLayout';

function App() {
  return (
    <Container fluid>
      <div className="App">
        <AppLayout />
      </div>
      <ScrollToTop 
        height="23"
        color="#FFF"
        smooth={true} 
        className='scroll-top'
      />
    </Container>
  );
}

export default App;
