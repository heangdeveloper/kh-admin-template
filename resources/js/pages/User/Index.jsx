import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { AiOutlineSearch, AiOutlinePlus } from "react-icons/ai";

const Index = () => {
    return (
        <>
            <div className="content_container">
                <div className="content_header">
                    <div className="card">
                        <div className="card_header">
                            <div className="btn_wrap">
                                <Link to="/user/create" className="btn btn_save">
                                    <AiOutlinePlus/>
                                    <span>Add User</span>
                                </Link>
                            </div>
                        </div>
                        <div className="card_body">
                            <div className="tbl_filter">
                                <div className=""></div>
                                <div className="search_control">
                                    <label>
                                        <input type="text" placeholder="Search here..."/>
                                        <div className="search_action">
                                            <button className="btn_search"><AiOutlineSearch/></button>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div className="tbl_scroll">
                                <table className="tbl">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>UserName</th>
                                            <th>Name</th>
                                            <th>Tel</th>
                                            <th>Line ID</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        
                                    </tbody>
                                </table>
                            </div>
                            <div className="">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index