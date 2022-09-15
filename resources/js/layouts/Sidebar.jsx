import React from 'react'
import { Link } from "react-router-dom";
import { menus } from '../local-json/data'

function Sidebar() {
    return (
        <>
            <aside className="left_sidebar">
                <Link to="" className="logo">

                </Link>
                <div className="left_sidebar_container">
                    <ul className="side_nav">
                        {menus.map(( item, index) => {
                            return item.submenu ? (
                                <li className="side_nav_item" key={item.id}>
                                    <Link to={item.url} className="side_nav_link">
                                        <item.icon/>
                                        <span className="side_nav_text">{item.name}</span>
                                    </Link>
                                    <div className="sub_menu">
                                        <ul className="sub_menu_nav">
                                            {item.submenu.map((subItem, index) => {
                                                return (
                                                    <li className="sub_menu_item" key={subItem.id}>
                                                        <subItem.icon/>
                                                        <Link to={subItem.url} className="sub_menu_link">{subItem.name}</Link>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </li>
                            ) : (
                                <li className="side_nav_item" key={item.id}>
                                    <Link to={item.url} className="side_nav_link">
                                        <item.icon/>
                                        <span className="side_nav_text">{item.name}</span>
                                    </Link>
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
