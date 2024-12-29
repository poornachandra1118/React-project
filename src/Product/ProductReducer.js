import {Cart} from './ActionType';

const Product_initialization ={
    Product_ids:'',
}

const ProductReducer = (state=Product_initialization,action)=>{
        switch (action.type){
                case Cart:
                    return {
                        ...state,
                        // Product_ids:(state.Product_ids!='')? state.Product_ids+','+action.ids :state.Product_ids + action.ids ,
                        Product_ids:action.ids,
                    }
                default:
                    return state
        }
}

export default ProductReducer