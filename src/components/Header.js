import React from 'react';
import {Link} from "react-router-dom";

function Header(props) {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/booklist">Booklist</Link>
                    </li>
                    <li>
                        <Link to="/booksForAuthor">Search For Books By Author!</Link>
                    </li>

                </ul>
            </nav>
        </div>


    );
}

export default Header;