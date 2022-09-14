import { MdAccountCircle, MdSettings, MdSupport, MdHelpOutline, MdLogout } from "react-icons/md";
import { AiOutlineDashboard, AiOutlineUser, AiOutlineSetting } from "react-icons/ai";

export const menus = [
    { id: 1, name: 'Dashboard', icon: AiOutlineDashboard, url: '' },
    { id: 2, name: 'Users', icon: AiOutlineUser, url: '' },
    { id: 3, name: 'Settings', icon: AiOutlineSetting, url: '' },
    { id: 4, name: 'Logout', icon: MdLogout, url: '' }
]

export const profilemenus = [
    { id: 1, name: 'My Account', icon: MdAccountCircle, url: '/my-account', },
    { id: 2, name: 'Settings', icon: MdSettings, url: '/settings' },
    { id: 3, name: 'Support', icon: MdSupport, url: '/support' },
    { id: 4, name: 'Help', icon: MdHelpOutline, url: '/help' },
    { id: 5, name: 'Logout', icon: MdLogout, url: '/logout' },
]