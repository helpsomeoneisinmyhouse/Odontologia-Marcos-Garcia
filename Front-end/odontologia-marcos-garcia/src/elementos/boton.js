import styled, {css} from "styled-components";

const Boton = styled.button`
    color: #FFFFFF;
    background: #FF6D00;
    display: inline-block;
    margin-top: 10px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    font-family: Verdana, Arial, Helvetica, Sans-serif;
    cursor: pointer;

    &:hover {
        color: #FFFFFF;
        background: #00B0F0;
    };

    ${props => props.rojo && css`
        color: #FFFFFF;
        background: red;
        
    `};

    ${props => props.verde && css`
        color: #FFFFFF;
        background: green;
        
    `};
    
    widht: ${props => props.anchocompleto ? "100%" : "auto"};


    `;

export default Boton