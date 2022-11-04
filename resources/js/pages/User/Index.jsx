import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { AiOutlinePlus } from "react-icons/ai";
import PageTitle from '../../components/PageTitle'
import Swal from 'sweetalert2'

const Index = () => {
    const [users, setUsers] = useState()
    let number = 1

    const fetchUsers = async () => {
        await axios.get(`http://127.0.0.1:8000/api/user`).then(({data}) => {
            setUsers(data)
            //console.log(data)
        })
    }

    useEffect(() => {
        fetchUsers()
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

        await axios.delete(`http://127.0.0.1:8000/api/user/${id}`).then(({data}) => {
            Swal.fire({
                title: 'Success!',
                text: "User has been deleted!",
                icon: "success",
                timer: '1500'
            })
            fetchUsers()
        }).catch(({err}) => {
            console.log(err)
        })
    }

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
                                <Link to="/user/create" className="btn btn_save">
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
                                            <th>Name</th>
                                            <th>UserName</th>
                                            <th>Tel</th>
                                            <th>Line ID</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            users && users.length > 0 && (
                                                users.map((row, key) => (
                                                    <tr key={key}>
                                                        <td>{number++}</td>
                                                        <td>
                                                            <div className="flex items-center">
                                                                <img src={`http://127.0.0.1:8000/img/default.jpg`} alt="" className="w-8 h-8 rounded-full"/>
                                                                <div className="pl-3">
                                                                    <div className="font-semibold">{row.name}</div>
                                                                    <div className="font-normal text-gray-500">{row.role_name}</div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>{row.username}</td>
                                                        <td>{row.phone}</td>
                                                        <td>{row.line_id}</td>
                                                        <td>
                                                            {
                                                                row.status === 'active' ?
                                                                <div className="status">
                                                                    <div className="dot_active"></div>
                                                                    Active
                                                                </div>
                                                                :
                                                                <div className="status">
                                                                    <div className="dot_unactive"></div>
                                                                    Unactive
                                                                </div>
                                                            }
                                                        </td>
                                                        <td>
                                                            <div className="btn_action">
                                                                <Link to={`/user/edit/${row.id}`} className="btn btn_edit">Edit</Link>
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index