import actionTypes from "../actionTypes";


const initialState ={
    id: -1,
    title: '',
    category:'',
    content: '',
    like:0,
}

export default (state = initialState, action)=>{
    switch(action.type){
        case actionTypes.SET_INPUT_TITLE: {
            const {title} = action;
            return {
                ...state,
                title,
            }
        }
        case actionTypes.SET_INPUT_CATEGORY: {
            const {category} = action;
            return {
                ...state,
                category,
            }
        }
        case actionTypes.SET_INPUT_CONTENT:{
            const {content} = action;
            return {
                ...state,
                content,
            }
        }
        case actionTypes.SET_INPUT_ID:{
            const {id} = action;
            return {
                ...state,
                id,
            }
        }
        case actionTypes.SET_INPUT_LIKE:{
            const {like} = action;
            return {
                ...state,
                like,
            }
        }
        case actionTypes.RESET_INPUT:{
            return initialState;
        }
        default:
            return state;
    }
}