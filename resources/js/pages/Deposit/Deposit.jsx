import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import PageTitle from '../../components/PageTitle'

const Deposit = () => {
    return (
        <>
            <div className="content_container">
                <div className="content_header">
                    <PageTitle title="Deposit"/>
                </div>
                <div className="content_body">
                    <div className="card">
                        <div className="card_body">
                            <div className="tbl_scroll">
                                <table className="tbl">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>UserName</th>
                                            <th>Name</th>
                                            <th>Tel</th>
                                            <th>Bank Name</th>
                                            <th>Credit</th>
                                            <th>Amount</th>
                                            <th>Create By</th>
                                            <th>Staff Name</th>
                                            <th>Remark</th>
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

export default Deposit