import React, { useState, useEffect, useRef } from 'react'
import { debounce } from 'lodash';
import { AiOutlineSearch } from "react-icons/ai";
import { BsArrowUpShort, BsArrowDownShort } from "react-icons/bs";
import axios from 'axios'
import Paginator from './Paginator';

const SORT_ASC = "asc"
const SORT_DESC = "desc"

const DataTable = ({ columns, fetchUrl }) => {
    const [data, setData] = useState()
    const [perPage, setPerPage] = useState(10)
    const [sortColumn, setSortColumn] = useState(columns[0])
    const [sortOrder, setSortOrder] = useState("asc")
    const [search, setSearch] = useState("")
    const [pagination, setPagination] = useState({})
    const [currentPage, setCurrentPage] = useState(1)

    const [loading, setLoading] = useState(true)

    const handleSort = (column) => {
        if (column === sortColumn) {
            sortOrder === SORT_ASC ? setSortOrder(SORT_DESC) : setSortOrder(SORT_ASC)
        } else {
            setSortColumn(column)
            setSortOrder(SORT_ASC)
        }
    }

    const handleSearch = useRef(
        debounce((query) => {
            setSearch(query)
            setCurrentPage(1)
            setSortOrder(SORT_ASC)
            setSortColumn(columns[0])
        }, 500)
    ).current

    const handlePerPage = (perPage) => {
        setCurrentPage(1)
        setPerPage(perPage)
    }

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            const params = {
                search,
                sort_field: sortColumn,
                sort_order: sortOrder,
                per_page: perPage,
                page: currentPage,
            }
            const { data } = await axios(fetchUrl, { params })
            console.log(data.data)
            setData(data.data)
            setPagination(data.meta)
            setTimeout(() => {
                setLoading(false)
            }, 300)
        }

        fetchData()
    }, [perPage, sortColumn, sortOrder, search, currentPage])
    return (
        <>
            <div className="tbl_list">
                <div className="tbl_filter">
                    <div className="frm_group" style={{width: "100px"}}>
                        <select value={perPage} onChange={(e) => handlePerPage(e.target.value)}>
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                        </select>
                    </div>
                    <div className="search_control">
                        <label>
                            <input type="" placeholder="Search here..." onChange={(e) => handleSearch(e.target.value)}/>
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
                                {columns.map((column) => {
                                    return (
                                        <th key={column} onClick={(e) => handleSort(column)}>
                                            {column.replace("_", " ")}
                                            {column === sortColumn ? (
                                                <span>
                                                    {sortOrder === SORT_ASC ? (
                                                        <BsArrowUpShort/>
                                                    ) : (
                                                        <BsArrowDownShort/>
                                                    )}
                                                </span>
                                            ) : null}
                                        </th>
                                    )
                                })}
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.length === 0 ? (
                                <tr>
                                    <td colSpan={columns.length}>No items found</td>
                                </tr>
                            ) : (
                                ""
                            )}

                            {loading ? (
                                <tr>
                                    <td colSpan={columns.length + 1}>
                                        <div className="text-center">
                                            <div role="status">
                                                <svg aria-hidden="true" className="mr-2 w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                                </svg>
                                                <span className="sr-only">Loading...</span>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ) : (
                                data.map((row, index) => {
                                    return (
                                        <tr key={index}>
                                            {columns.map((column) => {
                                                return <td key={column}>{row[column]}</td>
                                            })}
                                        </tr>
                                    )
                                })
                            )}
                        </tbody>
                    </table>
                </div>
                {data && data.length > 0 && !loading ? (
                    <div className="datatable_bottom">
                        <Paginator
                            pagination={pagination}
                            pageChanged={(page) => setCurrentPage(page)}
                            totalItems={data.length}
                        />
                    </div>
                ) : null}
            </div>
        </>
    )
}

export default DataTable