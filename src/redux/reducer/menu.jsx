const initialState = {
    data: null,
    dataMenuById: {
        title: "",
        ingredients: "",
        category_id: "1",
        photo: ""
    },
    dataAllCategory: [{ category_id: 0, category_name: 'null' }],
    errorMessage: '',
    isError: false,
    isUpdateSuccess: false,
    isCreated: false,
    isLoading: false,
}

const detailMenuReducer = (state = initialState, action) => {
    if (action.type === 'DETAIL_SUCCESS') {
        return {
            ...state,
            dataMenuById: action.payload,
            errorMessage: '',
            isError: false
        }
    } else if (action.type === 'DETAIL_FAILED') {
        return {
            ...state,
            dataMenuById: {
                title: "",
                ingredients: "",
                category_id: "1",
                photo: ""
            },
            errorMessage: action.payload,
            isError: true
        }
    } else if (action.type === 'CATEGORY_SUCCESS') {
        return {
            ...state,
            dataAllCategory: action.payload,
            errorMessage: '',
            isError: false
        }
    } else if (action.type === 'CATEGORY_FAILED') {
        return {
            ...state,
            dataAllCategory: [{ category_id: 0, category_name: 'null' }],
            errorMessage: action.payload,
            isError: true
        }
    } else if (action.type === 'UPDATE_LOADING') {
        return {
            ...state,
            isUpdateSuccess: false,
            isLoading: true,
        }
    } else if (action.type === 'UPDATE_SUCCESS') {
        return {
            ...state,
            isUpdateSuccess: true,
            errorMessage: '',
            isError: false,
            isLoading: false
        }
    } else if (action.type === 'UPDATE_FAILED') {
        return {
            ...state,
            errorMessage: action.payload,
            isError: true,
            isLoading: false
        }
    } else if (action.type === 'CREATED_LOADING') {
        return {
            ...state,
            isCreated: false,
            isLoading: true,
        }
    } else if (action.type === 'CREATED_SUCCESS') {
        return {
            ...state,
            isCreated: true,
            errorMessage: '',
            isError: false,
            isLoading: false
        }
    } else if (action.type === 'CREATED_FAILED') {
        return {
            ...state,
            errorMessage: action.payload,
            isError: true,
            isLoading: false
        }
    } else {
        return state
    }
}

export default detailMenuReducer