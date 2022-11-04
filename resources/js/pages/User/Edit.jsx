import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import PageTitle from '../../components/PageTitle'
import axios from 'axios'
import { MdOutlineKeyboardBackspace, MdOutlineCheck } from "react-icons/md";

const Edit = () => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [line, setLine] = useState('')
    const [uname, setUname] = useState('')
    const [status, setStatus] = useState('')
    const navigate = useNavigate();

    const { id } = useParams()

    const fetchUser = async () => {
        await axios.get(`http://127.0.0.1:8000/api/user/${id}/edit`).then(({data}) => {
            //console.log(data)
            const { name, phone, email, line_id, username, status } = data
            setName(name)
            setPhone(phone)
            setEmail(email)
            setLine(line_id)
            setUname(username)
            setStatus(status)
        }).catch (({err}) => {
            console.log(err)
        })
    }

    useEffect(() => {
        fetchUser()
    }, [])

    const updateUser = async (e) => {
        e.preventDefault();

        const formData = new FormData()
        formData.append('_method', 'PATCH')
        formData.append('name', name)
        formData.append('phone', phone)
        formData.append('email', email)
        formData.append('line', line)
        formData.append('uname', uname)
        formData.append('status', status)

        axios.post(`http://127.0.0.1:8000/api/user/${id}`, formData).then(({data}) => {
            navigate("/user")
        }).catch(({err}) => {
            console.log(err)
        })
    }
    return (
        <>
            <div className="content_container">
                <div className="content_header">
                    <PageTitle title="Edit User"/>
                </div>
                <div className="content_body">
                    <div className="card">
                        <div className="card_header">
                            <div className="btn_wrap">
                                <Link to="/user" className="btn btn_back">
                                    <MdOutlineKeyboardBackspace/>
                                    <span>Back</span>
                                </Link>
                            </div>
                        </div>
                        <div className="card_body">
                            <form autoComplete="off" onSubmit={updateUser}>
                                <div className="frm_wrap">
                                    <div className="frm_group required">
                                        <label htmlFor="name">Name</label>
                                        <input
                                            type="text" placeholder="Enter Name" id="name"
                                            value={name}
                                            onChange={(e) => {setName(e.target.value)}}
                                        />
                                    </div>
                                    <div className="frm_group">
                                        <label htmlFor="phone">Phone Number</label>
                                        <input
                                            type="text" placeholder="Enter Phone Number" id="phone"
                                            value={phone}
                                            onChange={(e) => {setPhone(e.target.value)}}
                                        />
                                    </div>
                                    <div className="frm_group">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="email" placeholder="Enter Email" id="email"
                                            value={email}
                                            onChange={(e) => {setEmail(e.target.value)}}
                                        />
                                    </div>
                                    <div className="frm_group">
                                        <label htmlFor="line">Line ID</label>
                                        <input
                                            type="text" placeholder="Enter Line ID" id="line"
                                            value={line}
                                            onChange={(e) => {setLine(e.target.value)}}
                                        />
                                    </div>
                                    <div className="frm_group required">
                                        <label htmlFor="uname">Username</label>
                                        <input
                                            type="text" placeholder="Enter Username" id="uname"
                                            value={uname}
                                            onChange={(e) => {setUname(e.target.value)}}
                                        />
                                    </div>
                                    <div className="frm_group required">
                                        <label htmlFor="baccount">Status</label>
                                        <select value={status} onChange={(e) => {setStatus(e.target.value)}}>
                                            <option value="active">Active</option>
                                            <option value="unactive">Unactive</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="btn_wrap">
                                    <button type="submit" className="btn btn_save">
                                        <MdOutlineCheck/>
                                        <span>Save</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Edit