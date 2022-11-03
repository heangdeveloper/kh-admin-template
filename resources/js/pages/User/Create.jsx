import React from 'react'
import { Link } from 'react-router-dom'
import PageTitle from '../../components/PageTitle'
import { MdOutlineKeyboardBackspace, MdOutlineCheck } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from "react-hook-form";

const Create = () => {
    const { register, handleSubmit, formState: {errors} } = useForm();

    return (
        <>
            <ToastContainer />
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
                                onSubmit={handleSubmit()}>
                                <div className="frm_wrap">
                                    <div className="frm_group required">
                                        <label htmlFor="name">Name</label>
                                        <input
                                            {...register("name", { required: 'Name is required.' })}
                                            type="text" placeholder="Enter Name" id="name"
                                        />
                                        <span className="msg_error">{errors.name?.message}</span>
                                    </div>
                                    <div className="frm_group">
                                        <label htmlFor="phone">Phone Number</label>
                                        <input type="text" placeholder="Enter Phone Number" id="phone"/>
                                    </div>
                                    <div className="frm_group">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" placeholder="Enter Email" id="email"/>
                                    </div>
                                    <div className="frm_group">
                                        <label htmlFor="line">Line ID</label>
                                        <input type="text" placeholder="Enter Line ID" id="line"/>
                                    </div>
                                    <div className="frm_group required">
                                        <label htmlFor="uname">Username</label>
                                        <input
                                            {...register("username", { required: 'Username is required.' })}
                                            type="text" placeholder="Enter Username" id="uname"
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
                                        />
                                        <span className="msg_error">{errors.password?.message}</span>
                                    </div>
                                    <div className="frm_group required">
                                        <label htmlFor="role">Role</label>
                                        <select
                                            {...register('role')}
                                        >
                                            <option>Choose User Role</option>
                                            <option>Admin</option>
                                            <option>Staff</option>
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