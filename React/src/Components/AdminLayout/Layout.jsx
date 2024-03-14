import React from 'react'
import AdminNavbar from '../AdminNavbar/AdminNavbar'
import { Outlet } from 'react-router-dom'

export default function Layout() {
    return <>
        <AdminNavbar />
        <Outlet></Outlet>
    </>
    
}
