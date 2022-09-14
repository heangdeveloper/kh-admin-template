import React from 'react'
import { Link } from 'react-router-dom'
import DropdownAccount from './DropdownAccount'

const AccountUser = () => {
    return (
        <>
            <Link to="" className="top_bar_link nav-user">
                <span className="user-avatar">
                    <img src='https://coderthemes.com/hyper_2/saas/assets/images/users/avatar-1.jpg' alt=''/>
                </span>
                <span>
                    <span className="user-name">Dominic Keller</span>
                    <span className="user-role">Founder</span>
                </span>
            </Link>
            <DropdownAccount/>
        </>
    )
}

export default AccountUser