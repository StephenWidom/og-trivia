import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@blueprintjs/core";

const Header = (props) => {
    return (
        <div className="Header">
            <Link to="/">
                <Icon icon="home" iconSize={30} />
            </Link>
        </div>
    );
};

export default Header;
