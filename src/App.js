import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Ajouter from './Ajouter';
import BlogDetail from './BlogDetail';



function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="contenu">
          <Routes>
            <Route path='/' element={<Home/>}>
            </Route>
            <Route path='/ajouter'element={<Ajouter/>}>
            </Route>
            <Route path='/blogs/:id' element={<BlogDetail/>}>
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
