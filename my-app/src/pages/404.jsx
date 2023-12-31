import React from "react";
import { Link } from "react-router-dom";
import "../styles/404.css"


function Page404 () {
    return (
        <div className="p404">
            <div className="page404">
                <h1>404</h1>
                    <p>Oups! La page que vous demandez n'existe pas.</p>
            </div>
            <Link to ="/" className="link">
                Retournez sur la page d'accueil ! 
            </Link>
        </div>
    )
}

export default Page404;