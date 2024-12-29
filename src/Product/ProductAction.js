import {Cart} from './ActionType'

const AddToCart_Items = (val)=>{
    return {
        type:Cart,
        ids:val,
    }
}

export default AddToCart_Items