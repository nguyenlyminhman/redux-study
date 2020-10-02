const initialEditState = false
let editReducer = (state = initialEditState, action) => {
    switch (action.type) {
        case "CHANGE_EDIT_STATUS":
            return !state
        default:
            return state
    }
}

export default editReducer;