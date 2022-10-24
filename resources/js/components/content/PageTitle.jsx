import React from 'react'

const PageTitle = (props) => {
    return (
        <>
            <div className="page_title_wrap">
                <h4 className="page_title">{props.title}</h4>
            </div>
        </>
    )
}

export default PageTitle