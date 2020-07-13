import * as actiontype from '../Action/Actiontype';


const initialState = {
    songs: [
        { id: 1, Name: "Ar Hits" },
        { id: 2, Name: "Ruith Hits" },
        { id: 3, Name: "Ilayaraja" }
    ]
}




export const selectedsong = (state = [], action) => {
    switch (action.type) {
        case actiontype.CLICKEDSONG:
            console.log("Selectedsong is clicked", action);
            // return calculatingState(action.payload);
            return [...state, ...calculatingState(action.payload)];
        default:
            return state;
    }
}

function calculatingState(a) {
    console.log(a);
    let SelectedData = []
    SelectedData = initialState.songs.filter(original => original.id === a)
    return SelectedData
}
