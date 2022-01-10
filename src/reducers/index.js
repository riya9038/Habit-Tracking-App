import { combineReducers } from "redux";
import { ADD_HABIT, REMOVE_HABIT, SET_STATUS,ADD_HABIT_TO_LIST } from "../actions";

const initialState={
    list:[],
}
export function habits(state=initialState, action){

    switch(action.type){
        case ADD_HABIT:
            return {
                ...state,
                list: action.habits
            }
        
        case REMOVE_HABIT:
            const filteredArray= state.list.habits.filter(habit=>
                habit.Title !== action.habit.Title);

            return {
                ...state,
                favourites: filteredArray
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case ADD_HABIT_TO_LIST:
            return{
                ...state,
                list: [action.habit, ...state.list]
            }
        default:
            return state;
    }
}

    
     export default combineReducers({
            habits,
     })