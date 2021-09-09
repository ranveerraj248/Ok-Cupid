import IconButton from '@material-ui/core/IconButton';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import React from 'react';
import "./Header.css";
import headerLogo from './images/headerlogo.png';

function Header() {
    return (
        <div className="header_container">

            <IconButton>

                <PersonIcon fontSize="large" className="header_icon"/>

            </IconButton>
            <img
                className="header_logo"
                src={headerLogo}
                alt="headerLogo"
            />
            <IconButton>
                <ForumIcon fontSize="large" className="header_icon"/>
            </IconButton>


        </div>
    )
}

export default Header
