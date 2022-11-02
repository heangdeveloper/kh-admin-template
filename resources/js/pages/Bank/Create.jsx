import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { MdOutlineKeyboardBackspace, MdOutlineCheck } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageTitle from '../../components/PageTitle'

const Create = () => {
    return (
        <>
            <ToastContainer />
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
                            <form autoComplete="off">
                                <div className="frm_wrap">
                                    <div className="frm_group required">
                                        <label htmlFor="name">Bank Name</label>
                                        <input type="text" placeholder="Enter Bank Name" id="name"/>
                                    </div>
                                    <div className="frm_group required">
                                        <label htmlFor="baccount">Bank Account</label>
                                        <input type="text" placeholder="Enter Bank Account" id="baccount"/>
                                    </div>
                                </div>
                                <div className="btn_wrap">
                                    <button className="btn btn_save">
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