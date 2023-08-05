import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import './index.css'



let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hbWF0MkBnbWFpbC5jb20iLCJpZCI6OCwiaWF0IjoxNjkxMjI3NTE5LCJleHAiOjE2OTEzMTM5MTl9.w056Igm5z4-RNrSd9cj53IzkpkSisCNVw9AyM3s7B4A'


export default function UpdateMenu() {
    const { menuId } = useParams()
    const [photo, setPhoto] = useState(null)
    const [category, setCategory] = useState([{ category_id: 0, category_name: 'null' }])
    const [inputData, setInputData] = useState({
        title: "",
        ingredients: "",
        category_id: "1",
        photo_url: ""
    })

    const getData = () => {
        axios.get(`http://localhost:3000/recipe/${menuId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((res) => {
                console.log(res)
                setInputData({ ...inputData, title: res.data.data.title, ingredients: res.data.data.ingredients, category_id: res.data.data.category_id, photo_url: res.data.data.photo })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const getCategory = () => {
        axios.get(`http://localhost:3000/category`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((res) => {
                console.log(res.data.data)
                setCategory(res.data.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        console.log(menuId)
        getData()
        getCategory()
    }, [])

    const postData = (event) => {
        event.preventDefault();
        let bodyFormData = new FormData()
        bodyFormData.append("title", inputData.title)
        bodyFormData.append("ingredients", inputData.ingredients)
        bodyFormData.append("category_id", inputData.category_id)
        bodyFormData.append("photo", photo)

        console.log(bodyFormData)

        axios.put(`http://localhost:3000/recipe/${menuId}`, bodyFormData, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": 'multipart/form-data'
            }
        })
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const onChange = (e) => {
        setInputData({
            ...inputData,
            [e.target.name]: e.target.value
        })
        console.log(inputData)
    }
    const onChangePhoto = (e) => {
        setPhoto(e.target.files[0])
        e.target.files[0] && setInputData({ ...inputData, photo_url: URL.createObjectURL(e.target.files[0]) })
        console.log(e.target.files)

    }

    return (
        <div className="container" style={{ backgroundColor: "white" }}>
            <div className="border-image">
                <div className="container text-center">
                    <div className="row align-items-start">
                        <div className="col">
                            <form className="input-menu">
                                <div className="change-photo">
                                    <img src="/EditMenu/asset/Rectangle 313.svg" />
                                    <label>
                                        <input type="file" style={{ display: "none" }} />
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
                                <div className="select-category">
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
                                        className="btn btn-primary"
                                        style={{
                                            backgroundColor: "#EFC81A",
                                            border: "1px solid #EFC81A",
                                            marginTop: 25
                                        }}
                                        type="button"
                                    >
                                        Update
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>






        // <div className='container'>
        //     <h1>Input Menu</h1>
        //     <form onSubmit={postData} className='row col-6 gap-2'>
        //         <input type="text" name='title' value={inputData.title} className='form-control col-4' onChange={onChange} placeholder='title' />
        //         <input type="text" name='ingredients' value={inputData.ingredients} className='form-control col-4' onChange={onChange} placeholder='ingredients' />
        //         <input type="file" name='photo' className='form-control col-4' onChange={onChangePhoto} placeholder='photo' />

        //         <img src={inputData.photo_url} width={200} />

        //         <button type='submit' className='btn btn-warning'>Update Menu</button>

        //     </form>
        // </div>
    )
}