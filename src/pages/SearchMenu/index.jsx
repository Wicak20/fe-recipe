import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import { confirmAlert } from "react-confirm-alert";
import Alert from "./../../components/Alert"
import Navbar from "./../../components/Navbar"
import './index.css'

export default function SearchMenu() {
    const [data, setData] = useState(null)
    const [pagination, setPagination] = useState({ totalData: 0, totalPage: 0, pageNow: 0 })
    const [currentPage, setCurrentPage] = useState(1)
    const [startData, setStartData] = useState(0)
    const [endData, setEndData] = useState(5)
    const [searchKeyword, setSeachKeyword] = useState("")
    const token = localStorage.getItem('logintoken')


    const getData = () => {
        axios.get(`${import.meta.env.VITE_API_URL}/recipe?page=${currentPage}&&limit=5&sort=ASC&sortBy=id${searchKeyword && `&searchRecipe=${searchKeyword}&searchBy=ingredients`}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((res) => {
                console.log(res)
                setData(res.data.data)
                setPagination(res.data.pagination)
                setStartData(1 + ((currentPage - 1) * 5))
                if (currentPage === res.data.pagination.totalPage) {
                    setEndData(res.data.pagination.totalData)
                } else {
                    setEndData(5 + ((currentPage - 1) * 5))
                }
                toast.success('Berhasil Get Data')
            })
            .catch((err) => {
                console.log(err)
                toast.error(`${err}`)
            })
    }

    useEffect(() => {
        getData()
    }, [currentPage])

    const searchMenu = (event) => {
        event.preventDefault()
        setCurrentPage(1)
        axios.get(`${import.meta.env.VITE_API_URL}/recipe?page=${currentPage}&&limit=5&sort=ASC&sortBy=id&searchRecipe=${searchKeyword}&searchBy=ingredients`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((res) => {
                console.log(res)
                setData(res.data.data)
                setPagination(res.data.pagination)
                setStartData(1 + ((currentPage - 1) * 5))
                if (currentPage === res.data.pagination.totalPage) {
                    setEndData(res.data.pagination.totalData)
                } else {
                    setEndData(5 + ((currentPage - 1) * 5))
                }
                toast.success('Berhasil Search Recipe')
            })
            .catch((err) => {
                console.log(err)
                toast.error(`${err}`)
            })
    }


    return (
        <>

            <>
                <ToastContainer autoClose={1000} />
                <Navbar />
                <>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="left-section col-8" style={{ backgroundColor: "white" }}>
                                <div className="sub-title">
                                    <h1>
                                        Discover Recipe <br /> &amp; Delicious Food
                                    </h1>
                                </div>
                                <div className="search-menu">
                                    <form className="d-flex" role="search" onSubmit={searchMenu}>
                                        <input
                                            className="form-control me-2"
                                            type="search"
                                            placeholder="Search"
                                            aria-label="Search"
                                            name="searchKeyword"
                                            onChange={e => setSeachKeyword(e.target.value)}
                                        />
                                        <button className="btn btn-outline-warning" type="submit">
                                            Search
                                        </button>
                                    </form>
                                </div>
                                <div className="button-link">
                                    <button
                                        type="button"
                                        className="btn btn-primary btn-sm"
                                        style={{ backgroundColor: "#EFC81A" }}
                                    >
                                        New
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-secondary btn-sm"
                                        style={{ backgroundColor: "#EFC81A" }}
                                    >
                                        Popular
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-secondary btn-sm"
                                        style={{ backgroundColor: "#EFC81A" }}
                                    >
                                        Vegetarian
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-secondary btn-sm"
                                        style={{ backgroundColor: "#EFC81A" }}
                                    >
                                        Breakfast
                                    </button>
                                </div>
                                {data?.map((item, index) => {
                                    return (
                                        <div key={index} className="card border-light mb-3" style={{ maxHeight: 540 }}>
                                            <div className="row g-0">
                                                <div className="col-md-4">
                                                    <img
                                                        src={`${item.photo}`}
                                                        className="img-fluid rounded-start"
                                                        alt="recipe-image"
                                                    />
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body">
                                                        <Link className="text-decoration-none text-black" to={`/detail-menu/${item.id}`}>
                                                            <h5 className="card-title">{item.title}</h5>
                                                        </Link>
                                                        <p className="card-text">
                                                            ingredient:
                                                            <br />

                                                            {item.ingredients}
                                                        </p>
                                                        <br />
                                                        <button
                                                            type="button"
                                                            className="btn btn-primary btn-sm"
                                                            style={{ backgroundColor: "#EFC81A" }}
                                                        >
                                                            10 Likes - 12 Comment - 3 Bookmark
                                                        </button>
                                                        <br />
                                                        {/* <img
                                                            src="./../../src/assets/pic-oke.jpeg"
                                                            width="50px"
                                                            height="50px"
                                                            className="rounded-circle"
                                                            alt="profilPicture"
                                                        />
                                                        <p>Ilham</p>
                                                        <p className="card-text">
                                                            <small className="text-body-secondary">
                                                                Last updated 3 mins ago
                                                            </small>
                                                        </p> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                                <div className="py-5 d-flex justify-content-center align-items-center">
                                    <button disabled={currentPage < 2} onClick={() => { setCurrentPage(currentPage - 1) }} className="btn btn-warning me-3 px-4">Prev</button>
                                    <h5 className="mb-0">Show {startData} - {endData} From {pagination.totalData}</h5>
                                    < button disabled={currentPage >= pagination.totalPage} onClick={() => { setCurrentPage(currentPage + 1) }} className="btn btn-warning ms-3 px-4">Next</button>

                                </div>
                            </div>
                            <div className="right-section col-4" style={{ backgroundColor: "white" }}>
                                <div className="vertikal-line"></div>
                                <div className="vertikal-line"></div>
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

            </>


        </>
    )
}