import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import './index.css'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Navbar from "./../../components/Navbar"
import { creatMenu, getAllCategory } from "../../redux/actions/menu";
import { useDispatch, useSelector } from "react-redux";

export default function AddMenu() {
    const navigate = useNavigate();
    const [photo, setPhoto] = useState(null)
    const [category, setCategory] = useState([{ category_id: 0, category_name: 'null' }])
    const [inputData, setInputData] = useState({
        title: "",
        ingredients: "",
        category_id: "1",
        photo_url: ""
    })
    const token = localStorage.getItem('logintoken')
    const dispatch = useDispatch()
    const { dataAllCategory, errorMessage, isError, isCreated, isLoading } = useSelector((state) => state.detailMenu);


    useEffect(() => {
        dispatch(getAllCategory(token))
    }, [])

    useEffect(() => {
        setCategory(dataAllCategory)
    }, [dataAllCategory])

    useEffect(() => {
        if (isError) {
            toast.error(`${errorMessage}`)
        }
    }, [errorMessage, isError])

    useEffect(() => {
        if (isCreated) {
            navigate('/menu')
            toast.success("Recipe Created!")
        }
    }, [isCreated])

    const postData = (event) => {
        event.preventDefault();
        let bodyFormData = new FormData()
        bodyFormData.append("title", inputData.title)
        bodyFormData.append("ingredients", inputData.ingredients)
        bodyFormData.append("category_id", inputData.category_id)
        bodyFormData.append("image", photo)

        dispatch(creatMenu(token, bodyFormData))


        if (!photo) {
            return toast.error('Please add photo first!')
        }

        // axios.post(`${import.meta.env.VITE_API_URL}/recipe`, bodyFormData, {
        //     headers: {
        //         Authorization: `Bearer ${token}`,
        //         "Content-Type": 'multipart/form-data'
        //     }
        // })
        //     .then((res) => {
        //         console.log(res)
        //         navigate('/menu');
        //         toast.success('Recipe Created')

        //     })
        //     .catch((err) => {
        //         console.log(err);
        //         toast.error(err.message)

        //     })
    }

    const onChange = (e) => {
        setInputData({
            ...inputData,
            [e.target.name]: e.target.value
        })
        console.log(inputData)
    }

    const onChangePhoto = (e) => {
        e.target.files[0] && setPhoto(e.target.files[0])
        e.target.files[0] && setInputData({ ...inputData, photo_url: URL.createObjectURL(e.target.files[0]) })
        console.log(e.target.files)

    }

    return (
        <div className="container" style={{ backgroundColor: "white" }}>
            <ToastContainer />
            <Navbar />
            <div className="border-image">
                <div className="container text-center">
                    <div className="row align-items-start">
                        <div className="col">
                            <form className="input-menu" onSubmit={postData} >
                                <div className="change-photo">
                                    {inputData.photo_url ? <img src={inputData.photo_url} className='img-fluid' /> :
                                        <div className='photo-placeholder'></div>
                                    }
                                    <label>
                                        <input name='photo' type="file" onChange={onChangePhoto} style={{ display: "none" }} />
                                        <a className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">
                                            Add Photo
                                        </a>
                                    </label>
                                </div>
                                <div className="input-title">
                                    <label className="add-title">
                                        <input name='title' type="text" placeholder="Title" value={inputData.title} onChange={onChange} />
                                    </label>
                                </div>
                                <div className="input-ingredients">
                                    <label className="add-ingredients">
                                        <textarea
                                            name='ingredients'
                                            placeholder="ingredients"
                                            rows={8}
                                            value={inputData.ingredients} onChange={onChange}
                                        />
                                    </label>
                                </div>
                                <div className="d-flex select-category">
                                    <select name="category" id="1">
                                        {category.map((item, index) => {
                                            return (
                                                <option selected={item.category_id == inputData.category_id} key={index} value={item.category_id}>{(item.category_name)}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                                <div className="d-grid gap-2 col-3 mx-auto">
                                    <button
                                        disabled={isLoading}
                                        className="btn btn-primary"
                                        style={{
                                            backgroundColor: "#EFC81A",
                                            border: "1px solid #EFC81A",
                                            marginTop: 25
                                        }}
                                        type="submit"
                                    >
                                        {isLoading ? <div className="spinner-border" role="status"></div> : "Post"}
                                    </button>
                                </div>
                            </form>
                        </div>
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
        </div>

    )
}