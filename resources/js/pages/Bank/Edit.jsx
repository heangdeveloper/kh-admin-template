import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import PageTitle from '../../components/PageTitle'
import axios from 'axios'
import { MdOutlineKeyboardBackspace, MdOutlineCheck } from "react-icons/md";
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2'

const Edit = () => {
    const [bname, setBname] = useState()
    const [baccount, setBaccount] = useState()
    const [status, setStatus] = useState()
    const navigate = useNavigate();

    const { id } = useParams()

    const fetchBank = async () => {
        await axios.get(`http://127.0.0.1:8000/api/bank/${id}/edit`).then(({data}) => {
            //console.log(data)
            const { name, number, status } = data
            setBname(name)
            setBaccount(number)
            setStatus(status)
        }).catch (({err}) => {
            console.log(err)
        })
    }

    useEffect(() => {
        fetchBank()
    }, [])

    const updateBank = async (e) => {
        e.preventDefault();

        const formData = new FormData()
        formData.append('_method', 'PATCH')
        formData.append('bname', bname)
        formData.append('baccount', baccount)
        formData.append('status', status)

        axios.post(`http://127.0.0.1:8000/api/bank/${id}`, formData).then(({data}) => {
            navigate("/bank")
        }).catch(({err}) => {
            console.log(err)
        })
    }

    return (
        <>
            <div className="content_container">
                <div className="content_header">
                    <PageTitle title="Edit Bank"/>
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
                            <form autoComplete="off" onSubmit={updateBank}>
                                <div className="frm_wrap">
                                    <div className="frm_group required">
                                        <label htmlFor="name">Bank Name</label>
                                        <input
                                            type="text" placeholder="Enter Bank Name" id="name"
                                            value={bname}
                                            onChange={(e) => {setBname(e.target.value)}}
                                        />
                                    </div>
                                    <div className="frm_group required">
                                        <label htmlFor="baccount">Bank Account</label>
                                        <input
                                            type="text" placeholder="Enter Bank Account" id="baccount"
                                            value={baccount}
                                            onChange={(e) => {setBaccount(e.target.value)}}
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