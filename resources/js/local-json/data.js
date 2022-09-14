import { MdAccountCircle, MdSettings, MdSupport, MdHelpOutline, MdLogout } from "react-icons/md";

export const menus = [
    { id: 1, name: 'Dashboard', icon: 'BiHomeAlt' },
    { id: 2, name: 'Users', icon: 'BiHomeAlt' },
    { id: 3, name: 'Settings', icon: 'BiHomeAlt' },
    { id: 4, name: 'Logout', icon: 'BiHomeAlt' }
]

export const profilemenus = [
    { id: 1, name: 'My Account', icon: MdAccountCircle, url: '/my-account', },
    { id: 2, name: 'Settings', icon: MdSettings, url: '/settings' },
    { id: 3, name: 'Support', icon: MdSupport, url: '/support' },
    { id: 4, name: 'Help', icon: MdHelpOutline, url: '/help' },
    { id: 5, name: 'Logout', icon: MdLogout, url: '/logout' },
]