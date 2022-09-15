import { MdAccountCircle, MdSettings, MdSupport, MdHelpOutline, MdLogout, MdOutlineBackup, MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { AiOutlineDashboard, AiOutlineUser, AiOutlineSetting, AiOutlineFile, AiOutlineInfoCircle, AiOutlineUsergroupAdd } from "react-icons/ai";
import { BiTerminal } from "react-icons/bi";
import { FaCogs } from "react-icons/fa";

export const menus = [
    { id: 1, name: 'Dashboard', icon: AiOutlineDashboard, url: '/' },
    { 
        id: 2,
        name: 'Authentication',
        icon: AiOutlineUsergroupAdd,
        url: '',
        submenu: [
            {
                id: 1,
                name: 'User',
                icon: AiOutlineUser,
                url: '/user'
            },
            {
                id: 2,
                name: 'Role',
                icon: MdOutlineBackup,
                url: ''
            },
            {
                id: 3,
                name: 'Permission',
                icon: BiTerminal,
                url: ''
            },
        ]
    },
    {
        id: 3,
        name: 'Advanced',
        icon: FaCogs,
        url: '#',
        submenu: [
            {
                id: 1,
                name: 'File manager',
                icon: AiOutlineFile,
                url: ''
            },
            {
                id: 2,
                name: 'Backups',
                icon: MdOutlineBackup,
                url: ''
            },
            {
                id: 3,
                name: 'Logs',
                icon: BiTerminal,
                url: '/log'
            },
            {
                id: 4,
                name: 'Settings',
                icon: MdSettings,
                url: '/setting'
            },
        ]
    },
    { id: 4, name: 'Logout', icon: MdLogout, url: '' }
]

export const profilemenus = [
    { id: 1, name: 'My Account', icon: MdAccountCircle, url: '/my-account', },
    { id: 2, name: 'About', icon: AiOutlineInfoCircle, url: '/about' },
    { id: 3, name: 'Support', icon: MdSupport, url: '/support' },
    { id: 4, name: 'Help', icon: MdHelpOutline, url: '/help' },
    { id: 5, name: 'Logout', icon: MdLogout, url: '/logout' },
]