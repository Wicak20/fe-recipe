import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './index.css'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import Navbar from "./../../components/Navbar"
import gambar from "../../assets/landingPage/Rectangle 313.svg"
import gambar1 from "../../assets/landingPage/Rectangle 314.svg"
import gambar2 from "../../assets/landingPage/Rectangle 315.svg"
import gambar3 from "../../assets/landingPage/Rectangle 316.svg"
import gambar4 from "../../assets/landingPage/Rectangle 317.svg"
import gambar5 from "../../assets/landingPage/Rectangle 318.svg"
import gambar6 from "../../assets/landingPage/Rectangle 319.svg"
import gambar7 from "../../assets/landingPage/Rectangle 320.svg"


export default function landingPage() {

    return (
        <>
            <div className="discover row align-items-center">
                <Navbar />
                <div className="col">
                    <div>Discover Recipe</div>
                    <div>&amp; Delicious Food</div>
                    <div className="mt-3">
                        <input
                            type="text"
                            className="search-resto form-control form-control-lg"
                            placeholder="search restaurant, food"
                        />
                    </div>
                </div>
                <div className="col">
                    <img
                        className="discover-img img-fluid"
                        src={gambar}
                        alt="discover"
                    />
                </div>
            </div>
            <div className="popular-title pl-3">Popular For You !</div>
            <div className="row align-items-center">
                <div className="col">
                    <img
                        className="popular-img img-fluid"
                        src={gambar1}
                        alt="discover"
                    />
                </div>
                <div className="col" style={{ padding: "0 10%" }}>
                    <div style={{ fontSize: "4vw" }}>
                        Healthy Bone Broth Ramen (Quick &amp; Easy)
                    </div>
                    <div style={{ fontSize: "1.8vw" }}>
                        Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a hurry?
                        That’s right!
                    </div>
                    <button type="button" className="btn btn-landing-page mt-3">
                        Learn More
                    </button>
                </div>
            </div>
            <div className="recipe-title pl-3">New Recipe</div>
            <div className="row align-items-center pb-5">
                <div className="col">
                    <img
                        className="popular-img img-fluid"
                        src={gambar2}
                        alt="discover"
                    />
                </div>
                <div className="col" style={{ padding: "0 10%" }}>
                    <div style={{ fontSize: "4vw" }}>
                        Healthy Bone Broth Ramen (Quick &amp; Easy)
                    </div>
                    <div style={{ fontSize: "1.8vw" }}>
                        Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a hurry?
                        That’s right!
                    </div>
                    <button type="button" className="btn btn-landing-page mt-3">
                        Learn More
                    </button>
                </div>
            </div>
            <div className="recipe-title pl-3">Popular Recipe</div>
            <div className="pocipe-wrapper">
                <div className="pocipe-item">
                    <img
                        src={gambar3}
                        className="img-fluid"
                        alt="recipes"
                    />
                    <div className="pocipe-text">
                        <div>Chicken </div>
                        <div> Kare </div>
                    </div>
                </div>
                <div className="pocipe-item">
                    <img
                        src={gambar4}
                        className="img-fluid"
                        alt="recipes"
                    />
                    <div className="pocipe-text">
                        <div>Chicken </div>
                        <div> Kare </div>
                    </div>
                </div>
                <div className="pocipe-item">
                    <img
                        src={gambar5}
                        className="img-fluid"
                        alt="recipes"
                    />
                    <div className="pocipe-text">
                        <div>Chicken </div>
                        <div> Kare </div>
                    </div>
                </div>
                <div className="pocipe-item">
                    <img
                        src={gambar6}
                        className="img-fluid"
                        alt="recipes"
                    />
                    <div className="pocipe-text">
                        <div>Chicken </div>
                        <div> Kare </div>
                    </div>
                </div>
                <div className="pocipe-item">
                    <img
                        src={gambar7}
                        className="img-fluid"
                        alt="recipes"
                    />
                    <div className="pocipe-text">
                        <div>Chicken </div>
                        <div> Kare </div>
                    </div>
                </div>
                <div className="pocipe-item">
                    <img
                        src={gambar7}
                        className="img-fluid"
                        alt="recipes"
                    />
                    <div className="pocipe-text">
                        <div>Chicken </div>
                        <div> Kare </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="footer">
                    <div className="footer-mid">
                        <div style={{ fontSize: "5vw", fontStyle: "bolder" }}>
                            Eat, Cook, Repeat
                        </div>
                        <div style={{ fontSize: "1.8vw" }}>
                            Share your best recipe by uploading here !
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <span className="footer-bottom-item">Product</span>
                        <span className="footer-bottom-item">Company</span>
                        <span className="footer-bottom-item">Learn More</span>
                        <span className="footer-bottom-item">Get In Touch</span>
                    </div>
                    <div className="arkademy">@Arkademy</div>
                </div>
            </div>
        </>
    )
}