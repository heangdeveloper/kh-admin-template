import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'
import { AiOutlineEdit, AiOutlineSearch } from "react-icons/ai";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

const SearchPlayer = () => {
    const [account, setAccount] = useState()
    const [agent, setAgent] = useState()
    const [balance, setBalance] = useState()
    const [name, setName] = useState()
    const [tel, setTel] = useState()
    const { username } = useParams()

    const fetchPlayerInfo = async () => {
        await axios.get(`http://127.0.0.1:8000/api/get_user_info/${username}`).then(({data}) => {
            console.log(data)
            const { account, agent, balance, name, tel } = res.data
            setAccount(account)
            setAgent(agent)
            setBalance(balance)
            setName(name)
            setTel(tel)
        }).catch(({err}) => {
            console.log(err)
        })
    }

    useEffect(() => {
        fetchPlayerInfo()
    }, [])
    return (
        <>
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
                            <div className="tbl_filter">
                                <div className=""></div>
                                <div className="search_control">
                                    <label>
                                        <input type="text" placeholder="Search here..."/>
                                        <div className="search_action">
                                            <button className="btn_search"><AiOutlineSearch/></button>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div className="tbl_scroll">
                                <table className="tbl">
                                    <thead>
                                        <tr>
                                            <th>UserName</th>
                                            <th>Agent</th>
                                            <th>Balance</th>
                                            <th>Name</th>
                                            <th>Tel</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchPlayer