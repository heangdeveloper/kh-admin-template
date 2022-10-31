import React from 'react'
import { Link } from 'react-router-dom'
import { profilemenus } from '../../data/data'
import { Menu } from '@headlessui/react'

const DropdownAccount = () => {
    return (
        <>
            <div className="dropdown-menu profile-dropdown">
                {profilemenus.map(( profile ) => {
                    return (
                        <Menu.Item key={profile.id}>
                            <Link to={profile.url} className="dropdown-link">
                                <profile.icon className="mr-2"/>
                                <span>{profile.name}</span>
                            </Link>
                        </Menu.Item>
                    )
                })}
            </div>
        </>
    )
}

export default DropdownAccount