import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'

function Layout({ children }) {

    return (
        <>
            <div className="wrapper">
                <Header/>
                <Sidebar/>
                <main className="content_page">
                    <div className="content">
                        { children }
                    </div>
                    <Footer/>
                </main>
            </div>
        </>
    )
}

export default Layout
