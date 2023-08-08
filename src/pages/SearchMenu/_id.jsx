import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from 'react-router'

let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hbWF0MkBnbWFpbC5jb20iLCJpZCI6OCwiaWF0IjoxNjkxNDMxMzIzLCJleHAiOjE2OTE1MTc3MjN9.xHUoxLSb6PJAer2bmQchaV1xDZgwOTpzC_iJp-morvU'

function MenuById() {
    const { id } = useParams()
    const [data, setData] = useState(null)


    const getData = () => {
        axios.get(`http://localhost:3000/recipe/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((res) => {
                console.log(res)
                setData(res.data.data)


            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        getData()
    }, [])


    return (
        <>
            <div className="mt-5">
                <div className="container">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                            <div
                                className="border-start"
                                style={{
                                    borderWidth: "3px !important",
                                    borderColor: "#EFC81A !important"
                                }}
                            >
                                <div className="d-flex ms-2">
                                    <img
                                        src="/Detail Profil/asset/ilham.JPG.jpeg"
                                        className="rounded-circle "
                                        alt="profile"
                                        style={{ width: 40 }}
                                    />
                                </div>
                            </div>
                            <div className="d-flex flex-column ms-4">
                                <h6 className="mb-0">
                                    <a
                                        href="#"
                                        className="text-black"
                                        style={{ textDecoration: "none" }}
                                    >
                                        Ilham
                                    </a>
                                </h6>
                                <p className="mb-0 text-start fw-bold">10 Recipes</p>
                            </div>
                        </div>
                        <div className="d-flex flex-column text-end">
                            <p className="mb-0">21 February 2023</p>
                            <p className="mb-0">
                                20 Likes -<span> 2 Comments</span>
                            </p>
                        </div>
                    </div>
                    <div className="mt-5">
                        <h1 className="title text-center mb-5">{data?.title}</h1>
                        <div className="row mb-5">
                            <div className="col" style={{ textAlign: "center" }}>
                                <img
                                    className="rounded img-fluid"
                                    src={data?.photo}
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="mb-5">
                            <h4>Ingredients</h4>
                            <div>{data?.ingredients}</div>

                        </div>
                        <div className="d-flex gap-3 mb-5">
                            <button className="icon-button-1">
                                <img src="/Detail Menu/asset/bookmark.svg" alt="Gambar 1" />
                            </button>
                            <button className="icon-button-2">
                                <img src="/Detail Menu/asset/Vector.svg" alt="Gambar 2" />
                            </button>
                        </div>
                        <div
                            className="card py-5 border-start-0 border-end-0 border-3 mb-5"
                            style={{ borderColor: "#EFC81A !important" }}
                        >
                            <div className="d-flex align-items-center mb-5">
                                <div className="me-4">
                                    <div className="d-flex ms-2">
                                        <img
                                            src="/Detail Profil/asset/ilham.JPG.jpeg"
                                            className="rounded-circle "
                                            alt="profile"
                                            style={{ width: 40 }}
                                        />
                                    </div>
                                </div>
                                <div
                                    className="d-flex flex-column border-end pe-4"
                                    style={{
                                        borderWidth: "3px !important",
                                        borderColor: "#EFC81A !important"
                                    }}
                                >
                                    <h6 className="mb-0">
                                        <a
                                            href="#"
                                            className="text-black"
                                            style={{ textDecoration: "none" }}
                                        >
                                            Super Joy Boy
                                        </a>
                                    </h6>
                                    <p className="mb-0 text-start fw-bold">20 Recipes</p>
                                </div>
                                <p className="message mb-0 ms-3">
                                    Wow, I just made this and it was delicious! thanks for sharing!
                                </p>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="me-4">
                                    <div className="d-flex ms-2">
                                        <img
                                            src="/Detail Profil/asset/ilham.JPG.jpeg"
                                            className="rounded-circle "
                                            alt="profile"
                                            style={{ width: 40 }}
                                        />
                                    </div>
                                </div>
                                <div
                                    className="d-flex flex-column border-end pe-4"
                                    style={{
                                        borderWidth: "3px !important",
                                        borderColor: "#EFC81A !important"
                                    }}
                                >
                                    <h6 className="mb-0">
                                        <a
                                            href="#"
                                            className="text-black"
                                            style={{ textDecoration: "none" }}
                                        >
                                            Sun God Nika !
                                        </a>
                                    </h6>
                                    <p className="mb-0 text-start fw-bold">15 Recipes</p>
                                </div>
                                <p className="message mb-0 ms-3">So simple and delicious!</p>
                            </div>
                        </div>
                        <div className="mb-5">
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <form action="">
                                        <div className="mb-3">
                                            <textarea
                                                className="form-control bg-body-secondary"
                                                id="comments"
                                                rows={5}
                                                placeholder="Your comment here!"
                                                defaultValue={""}
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            className="btn py-3"
                                            style={{
                                                backgroundColor: "#FFB167",
                                                color: "#FFF",
                                                paddingLeft: 40,
                                                paddingRight: 40
                                            }}
                                        >
                                            Send a comment
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default MenuById
