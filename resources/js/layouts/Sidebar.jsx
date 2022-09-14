import React from 'react'
import { Link } from "react-router-dom";
import { menus } from '../local-json/data'
import { BiHomeAlt } from "react-icons/bi";

function Sidebar() {

    const style = {
        logo: '',
        left_sidebar_container: '',
        side_nav: 'list-none pl-0',
        side_nav_item: '',
        side_nav_link: '',
        side_nav_text: 'align-middle ml-[10px]'
    }

    return (
        <>
            <aside className="left_sidebar">
                <Link to="" className="logo">

                </Link>
                <div className={style.left_sidebar_container}>
                    <ul className={style.side_nav}>
                        {menus && menus.map(({ id, name, icon }) => (
                            <li className={style.side_nav_item} key={id}>
                                <Link to="" className="block text-[.9375rem] text-[#8391a2] py-[10px] px-[30px]">
                                    <span className={style.side_nav_text}>{name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>
        </>
    )
}

export default Sidebar
