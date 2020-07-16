const action = {}

action.withdraw10000 = (amount) => {
    return amount ? {type: "WITHDRAW_10000"} : {type: "SET_ALERT"};
}

action.withdraw5000 = (amount) => {
    return amount ? {type: "WITHDRAW_5000"} : {type: "SET_ALERT"};
}

action.giveaway = (amount) => {
    return amount ? {type: "GIVE_AWAY"} : {type: "SET_ALERT"};
}

export const {withdraw10000, withdraw5000, giveaway } =  action;