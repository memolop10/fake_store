import { actionTypes } from "../constants/action-types";

const initialState ={
    products:[
        {
            id:1,
            title: 'Memo',
            category: 'proDev'
        }
    ]
};

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_PRODUCTS:
            return state;
    
        default:
            return state;
    }
}