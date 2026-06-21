// Filename - pages/index.js

import React from "react";
import { NavLink} from "react-router-dom";

const Home = () => {
    return (
        <div id="FrontPage">
            <h1>Odontologia Confiable a la vuelta de la esquina</h1>
            <h3>combinanos la punta de la tecnologia y nuesto corazon para todas y todos</h3>
            <NavLink to="https://www.youtube.com/watch?v=KSoS_hZhcQ4">Agenda una cita!</NavLink>
        </div>
    );
};

export default Home;