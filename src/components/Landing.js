import React from "react";
import { Link } from "react-router-dom";

const Landing = ({ quiz }) => {
    return (
        <section className="Landing">
            <h1>O.G. Trivia</h1>
            <ul>
                {Object.values(quiz).map((round) => (
                    <li key={round.category}>
                        <Link to={`/${round.category.toLowerCase()}`}>{round.category}</Link>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Landing;
