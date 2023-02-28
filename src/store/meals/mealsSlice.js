import { createSlice } from '@reduxjs/toolkit'
import { v4 } from 'uuid'

const initialState = {
  meals: [
    { id: v4(), text: 'Manty', description: 'po po lyam', price: 200 },
    { id: v4(), text: 'Shoule', description: 'siniy tractor', price: 130 },
    { id: v4(), text: 'Chuchbara', description: 'edet k nam', price: 250 },
    {
      id: v4(),
      text: 'Took-Shorpo',
      description: 'u nego v pricepe...',
      price: 80,
    },
  ],
}

const mealsSlice = createSlice({
  name: 'meal',
  initialState,
  reducers: {},
})

export default mealsSlice
