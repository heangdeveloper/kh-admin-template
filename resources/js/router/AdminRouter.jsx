import React from 'react'
import { Routes, Route } from "react-router-dom";

import Dashbard from '../pages/Dashbard';

import Layout from '../layouts/Layout';

function AdminRouter() {
    return (
        <>
            <Layout>
                <Routes>
                    <Route path="/" element={<Dashbard />} />
                </Routes>
            </Layout>
        </>
    )
}

export default AdminRouter
