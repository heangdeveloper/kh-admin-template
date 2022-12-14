import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PageTitle from '../../components/PageTitle'
import { MdOutlineKeyboardBackspace, MdOutlineCheck } from "react-icons/md";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'

const Create = () => {
    const { register, handleSubmit, formState: {errors} } = useForm();
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [line, setLine] = useState('')
    const [uname, setUname] = useState('')
    const [password, setpassword] = useState('')
    const [role, setRole] = useState('')
    return (
        <>
            <div className="content_container">
                <div className="content_header">
                    <PageTitle title="Add User"/>
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
                            <form
                                autoComplete="off"
                                onSubmit={handleSubmit(() => {
                                    const formData = new FormData()

                                    formData.append('name', name)
                                    formData.append('phone', phone)
                                    formData.append('email', email)
                                    formData.append('line', line)
                                    formData.append('uname', uname)
                                    formData.append('password', password)
                                    formData.append('role', role)

                                    axios.post(`http://127.0.0.1:8000/api/user`, formData).then(({data}) => {
                                        console.log(data)
                                        Swal.fire({
                                            title: 'Success!',
                                            text: "User has been inserted!",
                                            icon: "success",
                                            timer: '1500'
                                        })
                                        setName('')
                                        setPhone('')
                                        setEmail('')
                                        setLine('')
                                        setUname('')
                                        setpassword('')
                                        setRole('')
                                    }).catch(({err}) => {
                                        console.log(err)
                                    })
                                })}>
                                <div className="frm_wrap">
                                    <div className="frm_group required">
                                        <label htmlFor="name">Name</label>
                                        <input
                                            {...register("name", { required: 'Name is required.' })}
                                            type="text" placeholder="Enter Name" id="name"
                                            value={name}
                                            onChange={(e) => {setName(e.target.value)}}
                                        />
                                        <span className="msg_error">{errors.name?.message}</span>
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
                                            {...register("username", { required: 'Username is required.' })}
                                            type="text" placeholder="Enter Username" id="uname"
                                            value={uname}
                                            onChange={(e) => {setUname(e.target.value)}}
                                        />
                                        <span className="msg_error">{errors.username?.message}</span>
                                    </div>
                                    <div className="frm_group required">
                                        <label htmlFor="password">Password</label>
                                        <input
                                            {...register("password", {
                                                required: 'Password is required.',
                                                minLength: {
                                                    value: 5,
                                                    message: "The password should contain at least 5 characters."
                                                }
                                            })}
                                            type="password" placeholder="Enter Password" id="password"
                                            value={password}
                                            onChange={(e) => {setpassword(e.target.value)}}
                                        />
                                        <span className="msg_error">{errors.password?.message}</span>
                                    </div>
                                    <div className="frm_group required">
                                        <label htmlFor="role">Role</label>
                                        <select
                                            {...register('role')}
                                            value={role}
                                            onChange={(e) => {setRole(e.target.value)}}
                                        >
                                            <option>Choose User Role</option>
                                            <option value="1">Admin</option>
                                            <option value="2">Staff</option>
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

export default Create