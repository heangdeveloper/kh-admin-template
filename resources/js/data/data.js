import { 
    MdAccountCircle,
    MdSupport,
    MdHelpOutline,
    MdLogout,
    MdAttachMoney,
    MdCreditScore
} from "react-icons/md";
import { 
    AiOutlineDashboard,
    AiOutlineUser,
    AiOutlineInfoCircle,
    AiOutlineUsergroupAdd,
    AiOutlineMoneyCollect,
    AiOutlineBank
} from "react-icons/ai";

export const menus = [
    { id: 1, name: 'Dashboard', icon: AiOutlineDashboard, url: '/dashboard' },
    { id: 2, name: 'Player', icon: AiOutlineUser, url: '/player' },
    { id: 3, name: 'WithDraw ', icon: AiOutlineMoneyCollect, url: '/withdraw' },
    { id: 4, name: 'Top Up', icon: MdAttachMoney, url: '/topup' },
    { id: 5, name: 'Score', icon: MdCreditScore, url: '/score' },
    { id: 5, name: 'Bank', icon: AiOutlineBank, url: '/bank' },
    { id: 6, name: 'User', icon: AiOutlineUsergroupAdd, url: '/user' },
    { id: 8, name: 'Logout', icon: MdLogout, url: '' }
]

export const profilemenus = [
    { id: 1, name: 'My Account', icon: MdAccountCircle, url: '/my-account', },
    { id: 2, name: 'About', icon: AiOutlineInfoCircle, url: '/about' },
    { id: 3, name: 'Support', icon: MdSupport, url: '/support' },
    { id: 4, name: 'Help', icon: MdHelpOutline, url: '/help' },
    { id: 5, name: 'Logout', icon: MdLogout, url: '/logout' },
]