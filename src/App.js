import './App.css';
import { Routes, Route } from 'react-router-dom';
import About from './containers/about';
import Resume from './containers/resume';
import Skills from './containers/skills';
import Portfolio from './containers/portfolio';
import Contact from './containers/contact';
import Home from './containers/home';

function App() {
    return(
        <div className="App">
            {/*particles js*/ }
            {/*nabbar */}
            {/* main page content*/}

            <Routes>
                <Route  path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    )
}

export default App;
