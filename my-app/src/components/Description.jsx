import "../styles/description.css";
import 'lightbox.js-react/dist/index.css';
import React, { useState } from 'react';
import haut from "../assets/angleCarreHaut.png";
import bas from "../assets/angleCarreBas.png";

function Description({ title, content, open }) {
    const [isOpen, setIsOpen] = useState(open);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    const displayContent = () => {
        if (Array.isArray(content)) {
            return (
                <ul>
                    {content.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            );
        }
        return <p>{content}</p>;
    };

    return (
        <div className="infos">
        <div className={isOpen ? "collapseFermé" : "collapseOuvert"}>
            <div className="container">
                <h3>{title}</h3>
                <img
                    className={isOpen ? "FlècheHaute" : "FlècheBasse"} src={isOpen ? haut : bas} alt={isOpen ? "contenu caché" : "contenu affiché"}
                    onClick={toggleOpen}
                />
            </div>
            {isOpen && (
                <div> {displayContent()} </div>
            )}
        </div>
        </div>
    );
}

export default Description;
