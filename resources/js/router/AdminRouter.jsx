import React from 'react'
import { Routes, Route } from "react-router-dom";

import Dashbard from '../pages/Dashbard';
import User from '../pages/Auth/Index'
import FileManager from '../pages/Advanced/FileManager';
import Backup from '../pages/Advanced/Backup';
import Log from '../pages/Advanced/Log';
import Setting from '../pages/Advanced/Setting';

import MyAccount from '../pages/Account/MyAccount'
import About from '../pages/Account/About'
import Support from '../pages/Account/Support'
import Help from '../pages/Account/Help'

import Layout from '../layouts/Layout';

function AdminRouter() {
    return (
        <>
            <Layout>
                <Routes>
                    <Route path="/dashboard" element={<Dashbard />} />
                    <Route path="/user" element={<User />} />
                    
                    <Route path="/filemanager" element={<FileManager />} />
                    <Route path="/backup" element={<Backup />} />
                    <Route path="/log" element={<Log />} />
                    <Route path="/setting" element={<Setting />} />

                    <Route path="/my-account" element={<MyAccount />} />
                    <Route path="/acout" element={<About />} />
                    <Route path="/support" element={<Support />} />
                    <Route path="/help" element={<Help />} />
                </Routes>
            </Layout>
        </>
    )
}

export default AdminRouter
