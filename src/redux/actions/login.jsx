import axios from "axios";

export const loginAction = (data, navigate) => async (dispatch) => {
    try {
        dispatch({ type: "LOGIN_LOADING" })
        const result = await axios.post(`${import.meta.env.VITE_API_URL}/users/login`, data)


        localStorage.setItem("logintoken", result.data.token)
        localStorage.setItem("username", result.data.data.name)
        localStorage.setItem("email", result.data.data.email)
        localStorage.setItem("photo", result.data.data.image)
        localStorage.setItem("id", result.data.data.id)
        console.log(result.data.data.id);

        dispatch({ payload: result.data, type: "LOGIN_SUCCESS" })
        navigate('/')
    } catch (err) {
        dispatch({ payload: err.response.data.message, type: "LOGIN_FAILED" })
    }
}