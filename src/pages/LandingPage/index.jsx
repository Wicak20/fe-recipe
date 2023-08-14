import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './index.css'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import Navbar from "./../../components/Navbar"


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
                        src="./../../src/assets/landingPage/Rectangle 313.svg"
                        alt="discover"
                    />
                </div>
            </div>
            <div className="popular-title pl-3">Popular For You !</div>
            <div className="row align-items-center">
                <div className="col">
                    <img
                        className="popular-img img-fluid"
                        src="./../../src/assets/landingPage/Rectangle 314.svg"
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
                        src="./../../src/assets/landingPage/Rectangle 315.svg"
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
                        src="./../../src/assets/landingPage/Rectangle 316.svg"
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
                        src="./../../src/assets/landingPage/Rectangle 317.svg"
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
                        src="./../../src/assets/landingPage/Rectangle 318.svg"
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
                        src="./../../src/assets/landingPage/Rectangle 319.svg"
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
                        src="./../../src/assets/landingPage/Rectangle 320.svg"
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
                        src="./../../src/assets/landingPage/Rectangle 320.svg"
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