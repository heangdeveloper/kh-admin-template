import React from 'react'
import { Link } from 'react-router-dom'
import { profilemenus } from '../../local-json/data'

const DropdownAccount = () => {
    return (
        <>
            <div className="dropdown-menu profile-dropdown">
                {profilemenus.map(( profile, index) => {
                    return (
                        <Link to={profile.url} className="dropdown-link" key={profile.id}>
                            <profile.icon className="mr-2"/>
                            <span>{profile.name}</span>
                        </Link>
                    )
                })}
            </div>
        </>
    )
}

export default DropdownAccount