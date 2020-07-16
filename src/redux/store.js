import { createStore } from "redux"

let initialState = {
    // currentScore : 0,
    name: "Andrew",
    amount: 2500701,
    alert: false
}

const reducer = (state = initialState, action) => {
    let stateCopy = {...state};
    switch (action.type) {
        // case "UPDATE_BONUS":
        //     stateCopy.currentScore += 100
        //     return stateCopy;

        // case "LEVEL_COMPLETED":
        //     stateCopy.currentScore += 500
        //     return stateCopy;
        
        // case "LIFE_LOST":
        //     stateCopy.currentScore -= 250
        //     return stateCopy;
        
        case "WITHDRAW_10000":
            stateCopy.amount -= 10000
            console.log(stateCopy)
            return stateCopy;
        case "WITHDRAW_5000":
            stateCopy.amount -= 5000
            console.log(stateCopy)
            return stateCopy;
        case "GIVE_AWAY":
            stateCopy.amount = 0
            console.log(stateCopy)
            return stateCopy;
        case "SET_ALERT":
            stateCopy.alert = true
            console.log(stateCopy)
            return stateCopy;
        default:
            return stateCopy;
    }
}

const store = createStore(reducer);
export default store;