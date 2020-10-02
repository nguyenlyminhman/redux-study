let initialState = [0, 1, 2, 3]
let addReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_NEW":
            return [...state, action.newItem]
        default:
            return state
    }
}

export default addReducer;