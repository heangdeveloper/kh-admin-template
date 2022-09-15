import React from 'react'
import { Link } from "react-router-dom";

function Footer() {

    return (
        <footer className="footer">
            <div className="footer_container">
                <div className="footer_row">
                    <div className="footer_copy">
                        <p>&copy; 2022-{new Date().getUTCFullYear()} Developed by Heang Developer ❤</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
