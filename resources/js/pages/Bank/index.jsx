import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlinePlus } from "react-icons/ai";
import PageTitle from '../../components/PageTitle'

const index = () => {
    return (
        <>
            <div className="content_container">
                <div className="content_header">
                    <PageTitle title="List Bank"/>
                    {/* <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="">Dashboard</Link></li>
                        <li className="breadcrumb-item active">Bank</li>
                    </ol> */}
                </div>
                <div className="content_body">
                    <div className="card">
                        <div className="card_header">
                            <div className="btn_wrap">
                                <Link to="/create_bank" className="btn btn_save">
                                    <AiOutlinePlus/>
                                    <span>Add Bank</span>
                                </Link>
                            </div>
                        </div>
                        <div className="card_body">
                            <div className="tbl_scroll">
                                <table className="tbl">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Bank Name</th>
                                            <th>Bank Account</th>
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

export default index