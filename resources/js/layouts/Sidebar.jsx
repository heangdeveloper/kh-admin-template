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
                        {menus.map(( menu, index) => {
                            return (
                                <li className="side_nav_item" key={menu.id}>
                                    <Link to={menu.url} className="side_nav_link">
                                        <menu.icon/>
                                        <span className="side_nav_text">{menu.name}</span>
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
