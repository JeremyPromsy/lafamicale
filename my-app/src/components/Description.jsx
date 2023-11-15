import "../styles/description.css";
import 'lightbox.js-react/dist/index.css';
import React, { useState } from 'react';
import haut from "../assets/FlecheHaut.png";
import bas from "../assets/FlècheBas.png";

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
        <div className={isOpen ? "collapseFermé" : "collapseOuvert"}>
            <div className="container">
                <h3>{title}</h3>
                <img
                    className={isOpen ? "FlècheHaute" : "FlècheBasse"} src={isOpen ? haut : bas} alt={isOpen ? "contenu caché" : "contenu affiché"}
                    onClick={toggleOpen}
                />
            </div>
            {isOpen && (
                <div>
                    {displayContent()}
                </div>
            )}
        </div>
    );
}

export default Description;
