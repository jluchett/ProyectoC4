//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/login/login'
import Menu from './components/navbar/navbar'

import {Container} from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <Container>
        <Menu />
        <Login />
      </Container>
    </div>
  );
}

export default App;
