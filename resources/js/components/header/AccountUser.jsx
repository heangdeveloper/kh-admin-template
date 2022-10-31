import React from 'react'
import DropdownAccount from './DropdownAccount'
import { Menu, Transition } from '@headlessui/react'

const AccountUser = () => {
    return (
        <>
            <Menu as="div">
                {({ open }) => (
                    <>
                        <Menu.Button className="top_bar_link nav-user">
                            <span className="user-avatar">
                                <img src='https://coderthemes.com/hyper_2/saas/assets/images/users/avatar-1.jpg' alt=''/>
                            </span>
                            <span>
                                <span className="user-name">Dominic Keller</span>
                                <span className="user-role">Founder</span>
                            </span>
                        </Menu.Button>
                        <Transition show={open}>
                            <Menu.Items>
                                <DropdownAccount/>
                            </Menu.Items>
                        </Transition>
                    </>
                )}
            </Menu>
        </>
    )
}

export default AccountUser