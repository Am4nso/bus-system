import React from 'react';
import Login from "./components/Login";
import {BrowserRouter, Link, Route, Router, Routes} from "react-router-dom";
import Dashboard from "./components/Dashboard";

function App() {
    return (
        <BrowserRouter>
            <div className="App">

                <div className={"nav"}>
                    <Link to={"/"} className={"title"}>Bus System</Link>
                </div>

                <Routes>
                    <Route path={"/"} element={<Login/>}/>
                    <Route path={"/dashboard/:id"} element={<Dashboard/>}/>
                </Routes>


            </div>
        </BrowserRouter>
    );
}

export default App;
