import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { MdOutlineKeyboardBackspace, MdOutlineCheck } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddPlayer = () => {
    const [name, setName] = useState()
    const [tel, setTel] = useState()
    const [username, setUsername] = useState()
    const [bname, setBname] = useState()
    const [baccount, setBaccount] = useState()
    const [score, setScore] = useState()
    const [password, setPassword] = useState()
    const [isSaving, setIsSaving] = useState(false)

    const getRandomUser = async () => {
        const { data } = await axios.get("http://127.0.0.1:8000/api/user_random");
        const res = data.account
        setUsername(res)
    }

    useEffect(() => {
        getRandomUser()
    }, [])

    const handleSave = (e) => {
        e.preventDefault();
        setIsSaving(true);
        axios.post('http://127.0.0.1:8000/api/add_player', {
            name: name,
            tel: tel,
            username: username,
            password: password,
            bname: bname,
            baccount: baccount,
        }).then(function (res) {
            console.log(res.data)
            toast.success('Player create successfully! 😂', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setIsSaving(false);
            setName('')
            setTel('')
            setPassword('')
            setBname('')
            setBaccount('')
            window.location.reload(false);
        }).catch(function (err) {
            //console.log(err)
            toast.error('Player create faild! 😫', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setIsSaving(false)
        })
    }

    return (
        <>
            <ToastContainer />
            <div className="content_container">
                <div className="content_header">
                    <div className="card">
                        <div className="card_header">
                            <div className="btn_wrap">
                                <Link to="/player" className="btn btn_back">
                                    <MdOutlineKeyboardBackspace/>
                                    <span>Back</span>
                                </Link>
                            </div>
                        </div>
                        <div className="card_body">
                            <form autoComplete="off" onSubmit={handleSave}>
                                <div className="frm_wrap">
                                    <div className="hidden">{username}</div>
                                    <div className="frm_group">
                                        <label htmlFor="name">Real Name</label>
                                        <input type="text" placeholder="Enter Your Real Name" id="name" onChange={(e) => {setName(e.target.value)}} value={name}/>
                                        <p className="help_block">Note: Real Name must be the same of name from bank.</p>
                                    </div>
                                    <div className="frm_group">
                                        <label htmlFor="tel">Phone Number</label>
                                        <input type="text" placeholder="Enter Phone Number" id="tel" onChange={(e) => {setTel(e.target.value)}} value={tel}/>
                                        <p className="help_block">This block is a real phone number of player.</p>
                                    </div>
                                    {/* <div className="frm_group">
                                        <label htmlFor="tel">Set Score</label>
                                        <input type="text" placeholder="Enter Phone Number" id="tel" onChange={(e) => {setScore(e.target.value)}} value={score}/>
                                        <p className="help_block">Max value:</p>
                                    </div> */}
                                    <div className="frm_group">
                                        <label htmlFor="bname">Bank Name</label>
                                        <input type="text" placeholder="Enter Bank Name" id="bname" onChange={(e) => {setBname(e.target.value)}} value={bname}/>
                                        <p className="help_block">This is a bank name of player eg: ABA, Acleda.</p>
                                    </div>
                                    <div className="frm_group">
                                        <label htmlFor="baccount">Bank Account</label>
                                        <input type="number" placeholder="Enter Bank Account" id="baccount" onChange={(e) => {setBaccount(e.target.value)}} value={baccount}/>
                                        <p className="help_block">This is a real bank account of player.</p>
                                    </div>
                                    <div className="frm_group">
                                        <label htmlFor="password">Password</label>
                                        <input type="password" placeholder="Enter Password" id="password" onChange={(e) => {setPassword(e.target.value)}} value={password}/>
                                    </div>
                                </div>
                                <div className="btn_wrap">
                                    <button className="btn btn_save" disabled={isSaving}>
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

export default AddPlayer