import {flightData} from '../data/data';


const initialState = flightData;

const flightReducer = (state=initialState, action)=>{
    switch(action.type){
        case 'Fetch_Flights':
            return state;        
        default:
            return state
    }

}

export default flightReducer;