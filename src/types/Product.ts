import Sku from "./Sku";
import Comment from "./Comment";

export default interface Product {    
    id?: number,    
    name: string,    
    description: string,    
    childSkus: [Sku],
    comments: [Comment]
}
