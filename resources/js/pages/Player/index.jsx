import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { AiOutlineEdit, AiOutlineSearch, AiOutlinePlus } from "react-icons/ai";

function Dashbard() {
    const [players, setPlayers] = useState([])

    const getAllPlayer = async () => {
        try {
            const res = await axios.get("http://127.0.0.1:8000/api/list_player")
            const playerJson = res.data.results
            setPlayers(playerJson)
            //console.log(playerJson)
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        getAllPlayer()
    }, [])
    return (
        <>
            <div className="content_container">
                <div className="content_header">
                    <div className="card">
                        <div className="card_header">
                            <div className="btn_wrap">
                                <Link to="/player/create" className="btn btn_save">
                                    <AiOutlinePlus/>
                                    <span>Add Player</span>
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
                                            <th>#</th>
                                            <th>UserName</th>
                                            <th>Name</th>
                                            <th>Tel</th>
                                            <th>Bank Account</th>
                                            <th>Balance</th>
                                            <th>Description</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* {players && players.length > 0 && players.map((player, index) => (
                                            <tr key={index}>
                                                <td>{player.Rownum}</td>
                                                <td><Link to={`/player/${player.Account}`}>{player.Account}</Link></td>
                                                <td>{player.Name}</td>
                                                <td>{player.Tel}</td>
                                                <td>{player.Redme}</td>
                                                <td>
                                                    <Link to="" className="btn_edit"><AiOutlineEdit/></Link>
                                                </td>
                                            </tr>
                                        ))} */}
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

export default Dashbard