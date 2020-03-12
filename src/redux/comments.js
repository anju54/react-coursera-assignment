import { COMMENTS } from "../shared/dishes";
import { actions } from "react-redux-form";

// This is reducer
export const Comments = (state = COMMENTS, actions) => {
    switch(action.type){
        default : 
            return state;
    }
}