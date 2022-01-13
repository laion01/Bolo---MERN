import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// components

import FooterSmall from "components/Footers/FooterSmall.js";

// views

import Login from "features/auth/Login.js";
import Register from "features/auth/Register.js";

export default function Auth() {
  return (
    <>
      {/* <Navbar transparent /> */}
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
            // style={{
            //   backgroundImage:
            //     "url(" + require("assets/img/register_bg_2.png").default + ")",
            // }}
          ></div>
          <Routes>
            <Route path="/auth/login" exact element={<Login/>} />
            <Route path="/auth/register" exact element={<Register/>} />
            <Navigate from="/auth" to="/auth/login" />
          </Routes>
          <FooterSmall absolute />
        </section>
      </main>
    </>
  );
}
