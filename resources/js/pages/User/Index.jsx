import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineSearch, AiOutlinePlus } from "react-icons/ai";
import PageTitle from '../../components/PageTitle'

const Index = () => {
    return (
        <>
            <div className="content_container">
                <div className="content_header">
                    <PageTitle title="List User"/>
                </div>
                <div className="content_body">
                    <div className="card">
                        <div className="card_header">
                            <div className="btn_wrap">
                                <Link to="/create_user" className="btn btn_save">
                                    <AiOutlinePlus/>
                                    <span>Add User</span>
                                </Link>
                            </div>
                        </div>
                        <div className="card_body">
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index