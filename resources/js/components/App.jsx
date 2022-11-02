import React from 'react'
import { Routes, Route } from "react-router-dom";

import Dashbard from '../pages/Dashbard';

import ListPlayer from '../pages/Player/index';
import CreatePlayer from '../pages/Player/Create'
import EditPlayer from '../pages/Player/Edit'
import ShowPlayer from '../pages/Player/Show'

import Deposit from '../pages/Deposit/Deposit'
import WithDraw from '../pages/Withdraw/WithDraw'

import ListBank from '../pages/Bank/index'
import CreateBank from '../pages/Bank/Create';

import ListUser from '../pages/User/Index'
import CreateUser from '../pages/User/Create'

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

                    <Route path="/player" element={<ListPlayer />} />
                    <Route path="/player/create" element={<CreatePlayer />} />
                    <Route path="/player/:username/edit" element={<EditPlayer />} />
                    <Route path="/player/:username" element={<ShowPlayer />} />

                    <Route path="/deposit" element={<Deposit />} />
                    <Route path="/withdraw" element={<WithDraw />} />

                    <Route path="/bank" element={<ListBank />} />
                    <Route path="/create_bank" element={<CreateBank />} />

                    <Route path="/user" element={<ListUser />} />
                    <Route path="/create_user" element={<CreateUser />} />

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