

const initialState = {
    data: [],
    selectedProject: null
}


const dataReducer = (state = initialState, action : any) => {
    switch(action.type) {
        case "LOAD_DATA":
            return {
                ...state,
                data: action.payload
            }
        case "SET_SELECTED_PROJECT":
            return {
                ...state,
                selectedProject: action.payload
            }
        default:
            return state
    }
}


export default dataReducer;