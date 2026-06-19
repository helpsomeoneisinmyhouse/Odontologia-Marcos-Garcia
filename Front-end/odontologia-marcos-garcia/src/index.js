import ReactDOM from 'react-dom/client';
// Filename - App.js

import React from "react";
import Navbar from "./componentes/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./Paginas/index";
import About from "./Paginas/about";
import Services from "./Paginas/services";
import Contact from "./Paginas/contact";
import SignUp from "./Paginas/SignUp";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route
                    path="/contact"
                    element={<Contact />}
                />
                <Route path="/Services" element={<Services />} />
                <Route
                    path="/sign-up"
                    element={<SignUp />}
                />
            </Routes>
        </Router>
    );
}

export default App;



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)




