import { 
    MdAccountCircle,
    MdSettings,
    MdSupport,
    MdHelpOutline,
    MdLogout,
    MdOutlineBackup,
    MdKeyboardArrowUp,
    MdKeyboardArrowDown 
} from "react-icons/md";
import { 
    AiOutlineDashboard,
    AiOutlineUser,
    AiOutlineFile,
    AiOutlineInfoCircle,
    AiOutlineUsergroupAdd,
    AiOutlineMail,
    AiOutlineShop,
    AiOutlineCalendar,
} from "react-icons/ai";
import { 
    BiTerminal,
    BiChat
} from "react-icons/bi";
import { FaCogs } from "react-icons/fa";

export const menus = [
    { id: 1, name: 'Dashboard', icon: AiOutlineDashboard, url: '/dashboard' },
    { id: 2, name: 'Email', icon: AiOutlineMail, url: '/email' },
    { id: 3, name: 'Calendar ', icon: AiOutlineCalendar, url: '/calendar' },
    { id: 4, name: 'Chat', icon: BiChat, url: '/chat' },
    { 
        id: 6,
        name: 'Authentication',
        icon: AiOutlineUsergroupAdd,
        url: '/auth',
        iconClosed: MdKeyboardArrowDown,
        iconOpened: MdKeyboardArrowUp,
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
        id: 7,
        name: 'Advanced',
        icon: FaCogs,
        url: '/advanced',
        iconClosed: MdKeyboardArrowDown,
        iconOpened: MdKeyboardArrowUp,
        submenu: [
            {
                id: 1,
                name: 'File manager',
                icon: AiOutlineFile,
                url: '/filemanager'
            },
            {
                id: 2,
                name: 'Backups',
                icon: MdOutlineBackup,
                url: '/backup'
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
    { id: 8, name: 'Logout', icon: MdLogout, url: '' }
]

export const profilemenus = [
    { id: 1, name: 'My Account', icon: MdAccountCircle, url: '/my-account', },
    { id: 2, name: 'About', icon: AiOutlineInfoCircle, url: '/about' },
    { id: 3, name: 'Support', icon: MdSupport, url: '/support' },
    { id: 4, name: 'Help', icon: MdHelpOutline, url: '/help' },
    { id: 5, name: 'Logout', icon: MdLogout, url: '/logout' },
]