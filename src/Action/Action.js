import * as actiontype from './Actiontype';

export const clickedsong = (action) => (dispatch) => {
    return dispatch({ type: actiontype.CLICKEDSONG, payload: action })
}

// export const clickedsong = (action) => {
//     return { type: actiontype.CLICKEDSONG, payload: action }
// }