
const initialState = {
        sourceCity:'',
        destCity:'',
        startDate:undefined,
        returnDate: undefined
}

const searchReducer = (state=initialState,action)=>{
    switch(action.type){
        case 'SET_FILTERS':
            return {
                ...state,
                ...action.payload
            }
        case 'LOGOUT_USER':
            return {
                ...state,
                ...initialState
            }
        default:
            return state;
    }
}

export default searchReducer;