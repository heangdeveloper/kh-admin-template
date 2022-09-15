import React from 'react';
import { Link } from 'react-router-dom';
import AccountUser from '../components/header/AccountUser';
import ButtonToggle from '../components/header/ButtonToggle';

function Header() {
    return (
        <>
            <header className="header">
                <div className="header_container">
                    <div className="top_bar_logo"></div>
                    <ButtonToggle/>
                    <ul className="top_bar_menu">
                        <li className="tob_bar_item">
                            <Link to="" className="top_bar_link">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                                </svg>
                            </Link>
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
