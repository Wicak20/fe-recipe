import axios from "axios";

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const detailMenuId = (menuId, token) => async (dispatch) => {
    try {
        const result = await axios.get(`${import.meta.env.VITE_API_URL}/recipe/${menuId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        dispatch({ payload: result.data.data, type: "DETAIL_SUCCESS" })
    } catch (err) {
        console.log('error get id menu', err)
        dispatch({ payload: err.response.data.message.message, type: "DETAIL_FAILED" })
    }
}

export const getAllCategory = (token) => async (dispatch) => {
    axios.get(`${import.meta.env.VITE_API_URL}/category`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then((res) => {
            dispatch({ payload: res.data.data, type: "CATEGORY_SUCCESS" })
        })
        .catch((err) => {
            dispatch({ payload: err.response.data.message.message, type: "CATEGORY_FAILED" })
        })
}

export const updateMenu = (menuId, token, bodyFormData) => async (dispatch) => {
    dispatch({ type: "UPDATE_LOADING" })
    await delay(1000)
    axios.put(`${import.meta.env.VITE_API_URL}/recipe/${menuId}`, bodyFormData, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": 'multipart/form-data'
        }
    })
        .then(() => {
            dispatch({ type: "UPDATE_SUCCESS" })

        })
        .catch((err) => {
            dispatch({ payload: err.response.data.message.message, type: "UPDATE_FAILED" })
        })

}

export const creatMenu = (token, bodyFormData) => async (dispatch) => {
    dispatch({ type: "CREATED_LOADING" })
    await delay(1000)
    axios.post(`${import.meta.env.VITE_API_URL}/recipe`, bodyFormData, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": 'multipart/form-data'
        }
    })
        .then(() => {
            dispatch({ type: "CREATED_SUCCESS" })

        })
        .catch((err) => {
            dispatch({ payload: err.response.data.message.message, type: "CREATED_FAILED" })
        })

}

