import { createSlice } from '@reduxjs/toolkit'

export const favorisSlice = createSlice({
    name: 'favoris',
    initialState: {
        listOfFavoris: []
    },
    reducers:{
        addFavoris: (state, action) => {
            console.log(action.payload)
            state.listOfFavoris.push(action.payload)
        }
    }
});

export const { addFavoris } = favorisSlice.actions

export default favorisSlice.reducer
