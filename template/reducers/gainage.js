const initialState = { recordDuration: 60000, recordUserName: "ludo", recordDate: "2023-01-01T15:11:28.230Z", elapsedTime: 0 }

const gainage = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case "ADD_GAINAGE_SESSION":
            return { ...state, elapsedTime: action.payload }
        case "DECREMENT":
            return state - 1
        default:
            return state
    }
}

export default gainage