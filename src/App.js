import Login from './components/loigin/Login';
import Home from './components/Home/Home';
import Signup from './components/signup/Signup';
import Trial from './components/trial/Trial'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import './App.css';
import Firstpage from './components/firstpage/Firstpage';
import ArticleList from './components/article/ArticleList';

function App() {
  return (
    <div>
     <Router>
        <div>
        <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/trial" element={<Trial/>}/>
        <Route path="/firstpage" element={<Firstpage/>}/>
        <Route path="/article-list" element={<ArticleList/>}/>
        </Routes>
        </div>
        

      </Router>
    </div>
  );
}

export default App;
