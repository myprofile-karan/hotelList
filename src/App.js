import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './global.css';
import Header from './components/Header';
import Newyork from './pages/Newyork'
import Mumbai from './pages/Mumbai';
import Paris from './pages/Paris';
import London from './pages/London';
import Property from './components/Property';


function App() {
  return (
    <div className="App my-5">
        <BrowserRouter>
        <Header />
          <Routes>
            <Route path='/' Component={Newyork} />
              <Route path='/:id' Component={Property} />
            <Route path='/mumbai' Component={Mumbai} />
            <Route path='/paris' Component={Paris} />
            <Route path='/london' Component={London} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
