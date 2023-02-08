import { MENUBUTTON } from "./actions";
const initialState = {
    menuButton: false
}
export default function reducer(state=initialState, action){
    switch(action.type){
        case MENUBUTTON:
            return{
                ...state, menuButton:!state.menuButton
            }
            default:
                return {
                    ...state
                }
    }
}