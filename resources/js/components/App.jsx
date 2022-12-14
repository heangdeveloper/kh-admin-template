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
import EditBank from '../pages/Bank/Edit'

import ListUser from '../pages/User/Index'
import CreateUser from '../pages/User/Create'
import EditUser from '../pages/User/Edit'

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
                    <Route path="/create_player" element={<CreatePlayer />} />
                    <Route path="/player/:username/edit" element={<EditPlayer />} />
                    <Route path="/player/:username" element={<ShowPlayer />} />

                    <Route path="/deposit" element={<Deposit />} />
                    <Route path="/withdraw" element={<WithDraw />} />

                    <Route path="/bank" element={<ListBank />} />
                    <Route path="/create_bank" element={<CreateBank />} />
                    <Route path="/bank/edit/:id" element={<EditBank />} />

                    <Route path="/user" element={<ListUser />} />
                    <Route path="/user/create" element={<CreateUser />} />
                    <Route path="/user/edit/:id" element={<EditUser />} />

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