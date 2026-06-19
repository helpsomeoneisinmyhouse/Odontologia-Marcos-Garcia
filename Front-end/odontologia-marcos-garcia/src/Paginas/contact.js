// Filename - pages/contact.js

import React from "react";

const Contact = () => {
    return (
        <div>
            <h1>
                Contactanos!
            </h1>
            <p>esta tabla necesita un buen CSS para separar todo</p>
            <table class="tg">
                <thead>
                    <tr>
                        <th class="tg-0pky">instagram:<br></br>link de instagram</th>
                        <th class="tg-0pky">whatsapp:<br></br>0424 7507065</th>
                        <th class="tg-0lax">horarios de trabajo:<br></br>lunes a viernes XD</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="tg-0pky">facebook:<br></br>link de facebook</td>
                        <td class="tg-0pky">email:<br></br>luisalonsofs.3tareas@gmail.com</td>
                        <td class="tg-0lax">Localizacion:<br></br>aca nos doxeamos</td>
                    </tr>
                </tbody>
            </table>
            
        </div>
    );
};

export default Contact;