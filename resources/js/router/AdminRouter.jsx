import React from 'react'
import { Routes, Route } from "react-router-dom";

import Dashbard from '../pages/Dashbard';
import User from '../pages/Auth/Index'
import Log from '../pages/Advanced/Log';
import Setting from '../pages/Advanced/Setting';

import Layout from '../layouts/Layout';

function AdminRouter() {
    return (
        <>
            <Layout>
                <Routes>
                    <Route path="/" element={<Dashbard />} />
                    <Route path="/user" element={<User />} />
                    <Route path="/log" element={<Log />} />
                    <Route path="/setting" element={<Setting />} />
                </Routes>
            </Layout>
        </>
    )
}

export default AdminRouter
