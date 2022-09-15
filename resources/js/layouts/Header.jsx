import React from 'react';
import { Link } from 'react-router-dom';
import AccountUser from '../components/header/AccountUser';
import ButtonToggle from '../components/header/ButtonToggle';
import Notification from '../components/header/Notification';

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
                            <Link to="" className="top_bar_link">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                                </svg>
                            </Link>
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
