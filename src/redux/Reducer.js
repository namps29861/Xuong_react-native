import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login, register, } from "./UserAPI";
import { builderProduct, } from'./ExtraReducer_product';
// Slice = action + reducer

const appSlice = createSlice({
    name: "authen",
    initialState: {
        loading: false,
        count: 1,
        error: null,
        cart: [], // {id, name, price, quantity}
        user: null,
        products:[] // chưa login
    },
    reducers: {
        tang: (state, action) => {
            console.log("tang: " + action.payload);
            state.count++;
        },
        addItemToCart: (state, action) => {
            // kiểm tra giỏ hàng đã tồn tại sản phẩm chưa
            const index = state.cart
                .findIndex((item) => item.id.toString() 
                                    == action.payload.id.toString());
            if (index >= 0) {
                state.cart[index].quantity += action.payload.quantity;
            }
            else {
                state.cart.push(action.payload);
            }
        },
        removeItemFromCart: (state, action) => {
            state.cart = state.cart.filter((item)=> item._id.toString() != action.payload.id.toString());
        },
        clearCart:(state,action)=>{
            state.cart =[];
        }
        
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.loading = true;
            console.log('>>>>> login.pending: ')
        });
        builder.addCase(login.fulfilled, (state, action) => {
            state.loading = false;
            // state.error = null;
            console.log('>>>>> login.fulfilled: ', action.payload);
            state.user = action.payload;
        });
        builder.addCase(login.rejected, (state, action) => {
            state.loading = false;
            // state.error = action.payload;
            console.log('>>>>> login.rejected: ', action.payload);
        });
        
//register

        builder.addCase(register.pending, (state) => {
            state.loading = true;
            console.log('>>>>> register.pending: ')
        });
        builder.addCase(register.fulfilled, (state, action) => {
            state.loading = false;
            // state.error = null;
            console.log('>>>>> register.fulfilled: ', action.payload);
            state.user = action.payload;
        });
        builder.addCase(register.rejected, (state, action) => {
            state.loading = false;
            // state.error = action.payload;
            console.log('>>>>> register.rejected: ', action.payload);
        });

        builderProduct(builder)
        
    },
});

export const { addItemToCart, clearCart } = appSlice.actions;
export default appSlice.reducer;

