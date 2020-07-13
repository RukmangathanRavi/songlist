import * as actiontype from '../Action/Actiontype';


const initialState = {
    songs: [
        { id: 1, Name: "Ar Hits" },
        { id: 2, Name: "Ruith Hits" },
        { id: 3, Name: "Ilayaraja" }
    ]
}

export const Listsong = (state = initialState, action) => {
    switch (action.type) {
        // case actiontype.CLICKEDSONG:
        //     console.log("Selectedsong is clicked", action);
        //     return state;
        default:
            return state;
    }
}