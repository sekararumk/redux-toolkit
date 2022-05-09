import { createSlice } from "@reduxjs/toolkit"

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 5
    },
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            state.count -= 1
        },
        incrementByNumber: (state, action) => {
            state.count += +action.payload
        }

    }
})

export default counterSlice