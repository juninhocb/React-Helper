import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Company from './components/pages/Company'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject'
import Container from './components/layout/Contianer'
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import Projects from './components/pages/Projects';

function App() {
  return (
    <Router>
      <NavBar/>
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element= {<Home/>} ></Route>
          <Route path="/company" element={<Company/>} ></Route>
          <Route path="/contact" element={<Contact/>} ></Route>
          <Route path="/newproject" element={<NewProject/>} ></Route>
          <Route path="/projects" element={<Projects/>} ></Route>
        </Routes> 
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
