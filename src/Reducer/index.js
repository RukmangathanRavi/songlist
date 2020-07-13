import { combineReducers } from 'redux'
import { Listsong } from './Listsong';
import { selectedsong } from './selectedsong'



export const rootReducer = combineReducers({ Listsong, selectedsong })
