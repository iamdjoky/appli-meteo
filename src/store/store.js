import { configureStore } from '@reduxjs/toolkit'
import favorisReducer from './reducers/FavorisReducer'

export default configureStore({
    reducer: {
        favoris: favorisReducer
    }
})