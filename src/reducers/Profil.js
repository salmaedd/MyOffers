
const myProfileData = {
    profil: [
        {
            name: "Joe Doe",
            email: "joedoe@hotmail.fr",
            adresse: "22 BD Joe Doe"
        }
    ],
    lists: null


}

const profilReducer = (state = myProfileData, action) => {

    if (action.type === 'ADD' && action.id && typeof state !== 'undefined') {
        const exists = state.lists.reduce((acc, x) => {
            if (x._id === action.id._id) {
                return true
            } else return acc
        }, false);
        const elem = action.id

        if (!exists) {
            elem['showbutton'] = true
            state.lists.push(elem)
        }
        return { ...state }
    }
    else {
        state.lists = []
    }
    return state

}

export default profilReducer;