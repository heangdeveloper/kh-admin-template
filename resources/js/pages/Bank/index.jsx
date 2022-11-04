import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { AiOutlinePlus, AiOutlineSearch } from "react-icons/ai";
import PageTitle from '../../components/PageTitle'
import Swal from 'sweetalert2'

const index = () => {
    const [banks, setBanks] = useState()
    let number = 1

    const fetchBanks = async () => {
        await axios.get(`http://127.0.0.1:8000/api/bank`).then(({data}) => {
            setBanks(data)
            //console.log(data)
        })
    }

    useEffect(() => {
        fetchBanks()
    }, [])

    const handleDelete = async (id) => {
        const isConfirm = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            return result.isConfirmed
        })

        if (!isConfirm) {
            return;
        }

        await axios.delete(`http://127.0.0.1:8000/api/bank/${id}`).then(({data}) => {
            Swal.fire({
                title: 'Success!',
                text: "Bank has been deleted!",
                icon: "success",
                timer: '1500'
            })
            fetchBanks()
        }).catch(({err}) => {
            console.log(err)
        })
    }
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
                                        {
                                            banks && banks.length > 0 && (
                                                banks.map((row, key) => (
                                                    <tr key={key}>
                                                        <td>{number++}</td>
                                                        <td>{row.name}</td>
                                                        <td>{row.number}</td>
                                                        <td>
                                                            {row.status === 'active' ? <span className="badge badge_primary">Active</span> : <span className="badge badge_danger">Unactive</span>}
                                                        </td>
                                                        <td>
                                                            <div className="btn_action">
                                                                <Link to={`/bank/edit/${row.id}`} className="btn btn_edit">Edit</Link>
                                                                <button type="button" onClick={() => handleDelete(row.id)} className="btn btn_delete">Delete</button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))
                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default index