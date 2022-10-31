import React from 'react'
import { Routes, Route } from "react-router-dom";

import Dashbard from '../pages/Dashbard';
import Player from '../pages/Player/Player';
import AddPlayer from '../pages/Player/AddPlayer'
import SearchPlayer from '../pages/Player/SearchPlayer'

import TopUp from '../pages/Topup/TopUp'
import WithDraw from '../pages/Withdraw/WithDraw'

import User from '../pages/Auth/Index'
import FileManager from '../pages/Advanced/FileManager';
import Backup from '../pages/Advanced/Backup';
import Log from '../pages/Advanced/Log';
import Setting from '../pages/Advanced/Setting';

import MyAccount from '../pages/Account/MyAccount'
import About from '../pages/Account/About'
import Support from '../pages/Account/Support'
import Help from '../pages/Account/Help'

import NotFound from '../pages/NotFound'

import Layout from '../layouts/Layout';

function App() {
    return (
        <>
            <Layout>
                <Routes>
                    <Route path="/dashboard" element={<Dashbard />} />
                    <Route path="/player" element={<Player />} />
                    <Route path="/add_player" element={<AddPlayer />} />
                    <Route path="/search_player/:username" element={<SearchPlayer />} />

                    <Route path="/topup" element={<TopUp />} />
                    <Route path="/withdraw" element={<WithDraw />} />

                    <Route path="/user" element={<User />} />
                    
                    <Route path="/filemanager" element={<FileManager />} />
                    <Route path="/backup" element={<Backup />} />
                    <Route path="/log" element={<Log />} />
                    <Route path="/setting" element={<Setting />} />

                    <Route path="/my-account" element={<MyAccount />} />
                    <Route path="/acout" element={<About />} />
                    <Route path="/support" element={<Support />} />
                    <Route path="/help" element={<Help />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Layout>
        </>
    )
}

export default App