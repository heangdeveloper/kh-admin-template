import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PageTitle from '../../components/PageTitle'
import { MdOutlineKeyboardBackspace, MdOutlineCheck } from "react-icons/md";
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'

const Create = () => {
    const { register, handleSubmit, formState: {errors} } = useForm();
    const [bname, setBname] = useState('')
    const [baccount, setBaccount] = useState('')
    return (
        <>
            <div className="content_container">
                <div className="content_header">
                    <PageTitle title="Add Bank"/>
                </div>
                <div className="content_body">
                    <div className="card">
                        <div className="card_header">
                            <div className="btn_wrap">
                                <Link to="/bank" className="btn btn_back">
                                    <MdOutlineKeyboardBackspace/>
                                    <span>Back</span>
                                </Link>
                            </div>
                        </div>
                        <div className="card_body">
                            <form autoComplete="off" onSubmit={handleSubmit(() => {
                                const formData = new FormData()

                                formData.append('bname', bname)
                                formData.append('baccount', baccount)

                                axios.post(`http://127.0.0.1:8000/api/bank`, formData).then(({data}) => {
                                    //console.log(data)
                                    Swal.fire({
                                        title: 'Success!',
                                        text: "Bank has been inserted!",
                                        icon: "success",
                                        timer: '1500'
                                    })
                                    setBname('')
                                    setBaccount('')
                                }).catch(({err}) => {
                                    console.log(err)
                                })
                            })}>
                                <div className="frm_wrap">
                                    <div className="frm_group required">
                                        <label htmlFor="name">Bank Name</label>
                                        <input
                                            {...register("name", { required: 'Bank Name is required.' })}
                                            type="text" placeholder="Enter Bank Name" id="name"
                                            value={bname}
                                            onChange={(e) => {setBname(e.target.value)}}
                                        />
                                        <span className="msg_error">{errors.name?.message}</span>
                                    </div>
                                    <div className="frm_group required">
                                        <label htmlFor="baccount">Bank Account</label>
                                        <input
                                            {...register("account", { required: 'Bank Account is required.' })}
                                            type="text" placeholder="Enter Bank Account" id="baccount"
                                            value={baccount}
                                            onChange={(e) => {setBaccount(e.target.value)}}
                                        />
                                        <span className="msg_error">{errors.account?.message}</span>
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