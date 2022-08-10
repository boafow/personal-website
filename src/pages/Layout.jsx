import Nav from "../components/Nav";
import { Outlet } from "react-router-dom";
import React from "react";

const Layout = () => {
    return (
        <>
        <Nav />
        <Outlet />
        </>
    )
}

export default Layout;