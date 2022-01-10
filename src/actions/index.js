export const ADD_HABIT = 'ADD_HABIT';
export const REMOVE_HABIT = 'REMOVE_HABIT';
export const SET_STATUS = 'SET_STATUS';
export const ADD_HABIT_TO_LIST='ADD_HABIT_TO_LIST';
//action creators
export function addHabit(habits){
    return{
        type: ADD_HABIT,
        habits
    }
}

export function removeHabit(habit){
    return{
        type: REMOVE_HABIT,
        habit
    }
}
export function setStatus(status){
    return{
        type: SET_STATUS,
        status
    }
}
export function addHabitToList(habit){
    return{
        type: ADD_HABIT_TO_LIST,
        habit
    }
}