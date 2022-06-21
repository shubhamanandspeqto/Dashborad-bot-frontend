import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import UserImg from "../Assets/userimg.jpg"
import "../css/header.css"


export default function Header() {

    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <Link className="navbar-brand font-weight-bold	" style={{color:"#fff"}} to={'/details'}>
                Bot
                </Link>
                <hr className="vertical"/>
                {/* <a className="navbar-brand" href="#">NFTi</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className='d-flex nav-main'>
                        <div className='navbar-nav mr-auto nav-submain1'>
                            <Link className="nav-link " to={'/discover'}>
                                Discover
                            </Link>

                            <Link className="nav-link " to={'/learn'}>
                                Learn
                            </Link>
                        </div>
                        <div className='navbar-nav  nav-submain2'>
                           
                                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />

                                <i class="fa-solid fa-bell"></i>
                           
                            <button className="btn btn-primary my-2 my-sm-0" type="submit">Upload</button>
                            <div className='user-bal'>
                            <img src={UserImg} class="rounded-circle" alt="User Img"/>
                            <p>0.5 <span>Eth</span></p>


                            </div>

                            
                        </div>

                    </div>
                </div>
            </nav>
        </>
    )
}

