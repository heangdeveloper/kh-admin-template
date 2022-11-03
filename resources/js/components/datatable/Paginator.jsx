import React, { useState, useEffect } from 'react'

const OFFSET = 4

const Paginator = ({ pagination, pageChanged, totalItems }) => {
    const [pageNumbers, setPageNumbers] = useState([])

    useEffect(() => {
        const setPaginationPages = () => {
            let pages = []
            const { last_page, current_page, from, to } = pagination
            if (!to) return []
            let fromPage = current_page - OFFSET
            if (fromPage < 1) fromPage = 1
            let toPage = fromPage + OFFSET * 2
            if (toPage >= last_page) {
                toPage = last_page
            }
            for (let page = fromPage; page <= toPage; page++) {
                pages.push(page)
            }
            setPageNumbers(pages)
        }

        setPaginationPages()
    }, [pagination])
    return (
        <>
            <div className="datatable_info">
                <p>Showing {pagination.from} - {pagination.to} of {pagination.total} entries</p>
            </div>
            <div className="datatable_paginate">
                <ul className="pagination">
                    <li className={"page_item" + (pagination.current_page === 1 ? " disabled" : "")}>
                        <a className="page_link" onClick={() => pageChanged(1)}>
                            First
                        </a>
                    </li>
                    <li className={"page_item" + (pagination.current_page === 1 ? " disabled" : "")}>
                        <a className="page_link" onClick={() => pageChanged(pagination.current_page - 1)}>
                            Previous
                        </a>
                    </li>
                    {pageNumbers.map((pageNumber) => {
                        return (
                            <li
                                className={
                                    "page_item" + (pageNumber === pagination.current_page ? " page_item active" : "")
                                }
                                key={pageNumber}
                                onClick={() => pageChanged(pageNumber)}
                            >
                                <a className="page_link" href="#">
                                    {pageNumber}
                                </a>
                            </li>
                        )
                    })}

                    <li className={"page_item" + (pagination.current_page === pagination.last_page ? " disabled" : "")}>
                        <a className="page_link" href="#" onClick={() => pageChanged(pagination.current_page + 1)}>
                            Next
                        </a>
                    </li>
                    <li className={"page_item" + (pagination.current_page === pagination.last_page ? " disabled" : "")}>
                        <a className="page_link" onClick={() => pageChanged(pagination.last_page)}>
                            Last
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Paginator