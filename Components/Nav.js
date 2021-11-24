import React, { useState } from "react";
import student from '../student.svg';
import './nav.css';
import Web from "./Web"
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";


const Nav = props => {
    const college = "Bgs Global College";

    const openNav = () => {
        document.getElementById("mySidenav").style.width ="16%";
        props.setIsSideNavOpen(true);
    }

    const closeNav = () => {
        document.getElementById("mySidenav").style.width = "0";
        props.setIsSideNavOpen(false);

    }
    return (
        <div>

            <div className="maindiv"  >
                <div id="mySidenav" class="sidenav">
                    <div class="row p-2 pt-3 text-white">
                        <div class="col-xl-5 col-md-12 col-sm-12 m-2"><img class="imgS" src={student} /></div>
                        <div class="col-xl-3 col-md-6 col-sm-12 "> {college}<br />
                            <a href="#" class="font-size-3">View Profile</a></div>
                        <div class="col-xl-2 col-md-6 col-sm-12 "> <div href="javascript:void(0)" class="closebtn" onClick={closeNav}>&#9776;</div>
                        </div>
                        <div class="row justify-content-end p-2">
                            <div class="col-xl-4 col-sm-12 col-md-4 text-white " >
                                <a href="#">SignOut</a>
                            </div>
                        </div>
                    </div>
                    {/* <a class="A" href="#">DashBord </a>
                    <a href={<Web/>}  class="A">Course</a>
                    <a href={<Web/>} class="A">Liveclass</a>
                    <a href="#" class="A">Assignment </a>
                    <a href="#" class="A">Forum</a>
                    <a href="#" class="A">Study metrial</a>
                    <a href="#" class="A">Trash</a>
                    <a href="#" class="A">Member</a>
                    <a href="#" class="A">Pg Admin App</a>
                    <a href="#" class="A">Announcement </a> */}       
                </div>
            </div>
            <span style={{ fontSize: "30px", margin: "20px", cursor: "pointer" }} onClick={openNav}>&#9776;</span>

        </div>
    )
}
export default Nav;