// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// export const GetTodos = createAsyncThunk('product/get',async(_,thunkApi)=>{
//     try{
//         const response = await axios.get('http://localhost:3004/todo')
//         return response.data
//     }catch(err){
//         return thunkApi.rejectWithValue(err)
//     }
// })

// const TodoSlice = createSlice({
//     name:'todo',
//     initialState:{
//         todo:[],
//         loading:false,
//         error:'',
//         value:''
//     },
//     extraReducers:{
//         [GetTodos.pending]:(state)=>{
//             state.loading = true
//         },
//         [GetTodos.fulfilled]:(state,action)=>{
//            state.todo = [...state.todo, action.payload]
//             state.error = ''
//             // state.todo =  action.payload
//             state.loading = false
//         },
//         [GetTodos.rejected]:(state,action)=>{
//             state.loading = false
//             state.error = action.payload
//         }
//     },
//     reducers:{
//         setValue:(state,action)=>{
//             state.value = action.payload
//         },
//         addTodo:(state,action)=>{
//             state.todo = [...state.todo, action.payload]
//         }
//     }

// })
// export const {addTodo,setValue} = TodoSlice.actions
// export default TodoSlice.reducer



import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const GetTodos = createAsyncThunk('product/get', async (_, thunkApi) => {
    try {
        const response = await axios.get('http://localhost:3004/todo')
        return response.data
    } catch (err) {
        return thunkApi.rejectWithValue(err)
    }
})

const TodoSlice = createSlice({
    name: 'todo',
    initialState: {
        todo: [],
        loading: false,
        error: ''
    },
    extraReducers: {
        [GetTodos.pending]: (state) => {
            state.loading = true
        },
        [GetTodos.fulfilled]: (state, action) => {
            state.error = ''
            state.todo = action.payload
            state.loading = false
        },
        [GetTodos.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        }
    }
})
export const { addTodo, setValue } = TodoSlice.actions
export default TodoSlice.reducer


