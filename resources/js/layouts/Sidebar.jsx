import React, { useState } from 'react'
import { NavLink, Link } from "react-router-dom";
import { menus } from '../local-json/data'

function Sidebar() {
    const [subMenu, setSubMenu] = useState(false);

    return (
        <>
            <aside className="left_sidebar">
                <NavLink  to="" className="logo">

                </NavLink>
                <div className="left_sidebar_container">
                    <ul className="side_nav">
                        {menus.map(( item, index) => {
                            return item.submenu ? (
                                <li className="side_nav_item" key={item.id}>
                                    <NavLink
                                        to={item.url}
                                        className={({ isActive }) => isActive ? "side_nav_link active" : "side_nav_link"}
                                        onClick={() => setSubMenu(!subMenu) && item.submenu}
                                    >
                                        <item.icon/>
                                        <span className="side_nav_text">{item.name}</span>
                                        { item.submenu && subMenu ? <item.iconOpened className="icon_expand"/> : item.submenu ? <item.iconClosed className="icon_expand"/> : null }
                                    </NavLink>
                                    <div className="sub_menu">
                                        <ul className="sub_menu_nav">
                                            {subMenu && item.submenu.map((subItem, index) => {
                                                return (
                                                    <li className="sub_menu_item" key={subItem.id}>
                                                        <NavLink  to={subItem.url} className="sub_menu_link">
                                                            <subItem.icon/>
                                                            <span className="sub_menu_text">{subItem.name}</span>
                                                        </NavLink>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </li>
                            ) : (
                                <li className="side_nav_item" key={item.id}>
                                    <NavLink
                                        to={item.url}
                                        className={({ isActive }) => isActive ? "side_nav_link active" : "side_nav_link"}
                                    >
                                        <item.icon/>
                                        <span className="side_nav_text">{item.name}</span>
                                    </NavLink>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </aside>
        </>
    )
}

export default Sidebar
