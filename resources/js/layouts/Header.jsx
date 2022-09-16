import React from 'react';
import AccountUser from '../components/header/AccountUser';
import ButtonToggle from '../components/header/ButtonToggle';
import Notification from '../components/header/Notification';
import FullScreen from '../components/header/FullScreen';

function Header() {
    return (
        <>
            <header className="header">
                <div className="header_container">
                    <div className="top_bar_logo"></div>
                    <ButtonToggle/>
                    <ul className="top_bar_menu">
                        <li className="tob_bar_item">
                            <Notification/>
                        </li>
                        <li className="tob_bar_item">
                            <FullScreen/>
                        </li>
                        <li className="tob_bar_item">
                            <AccountUser/>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Header
