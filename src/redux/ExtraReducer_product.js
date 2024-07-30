import { getProduct } from "./ProductAPI";


export const builderProduct = (builder)=>{
    builder.addCase(getProduct.pending,(state)=>{
        state.loading = true;
        console.log('>>>>> product.pending:')
    });
    builder.addCase(getProduct.fulfilled,(state,action)=>{
        state.loading = false;
        console.log('>>>>> product.fuilded:', action.payload);;
        state.products.push(action.payload);
    })
    builder.addCase(getProduct.rejected,(state,action)=>{
        state.loading = false;
        console.log('>>>>> product.rejected:',action.payload);
    })
    
}