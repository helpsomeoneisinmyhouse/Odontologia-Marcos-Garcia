// Filename - pages/about.js

import React from "react";
import ControlledCarousel from "../componentes/Carrousels";
import { NavLink} from "react-router-dom";

const About = () => {
    return (
        <div class="container">
            <div id="About-Mission">
                <h2>Mision</h2>
                <p>Fugiat esse ad deserunt enim esse cillum excepteur velit enim culpa. Fugiat ex ad laboris aliqua sint velit anim in reprehenderit amet qui. Nulla fugiat fugiat laboris aute ad aliqua occaecat deserunt duis culpa. Laboris velit consequat aliqua laborum.</p>
            </div>
            <ControlledCarousel/>
            <div id="About-Roots">
                <h2>Inicios de la odontologia</h2>
                <p>Aute occaecat nisi aute esse consequat tempor Lorem eiusmod laboris eu Lorem. Qui ea voluptate dolor dolor. Ad amet ad excepteur ad consequat duis officia sunt culpa aliqua voluptate ex proident aliquip.</p>
            </div>
            <div id="About-Call">
            <h5>aca iria un refuerzo de los valores</h5>
            <h2>agenda ahora!</h2>
            <NavLink to="https://www.youtube.com/watch?v=KSoS_hZhcQ4">Agenda una cita!</NavLink>
            </div>
        </div>
    );
};

export default About;