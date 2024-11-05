
import { createSlice } from '@reduxjs/toolkit'
import Iunits from '../interface/units';



const initialState :Iunits = {
    Golani: 'Idle',
    Paratroopers: 'Idle',
    Givati: 'Idle'
  }
export const counterSlice = createSlice({
  name: 'units',
  initialState,  
  reducers: {    
    setValue: (state, action) => {
        const { key, value } = action.payload;
        state[key] = value; 
      },
      reefresh: state => {        
      Object.entries(state).forEach(([key]) => {
          state[key] = 'pending'; 
      });        
    },
    addunit: (state, action) => {
      const {name} = action.payload;
      state[name] = 'pending';
    },
    delete_: (state, action) => {
      const {name} = action.payload;
      delete state[name];
    }
  }
})
export const anotherSlice = createSlice({
    name: 'another',
    initialState: {
      age: 0
    },
    reducers: {
      inc: state => {       
        state.age += 1
      },
      dec: state => {
        state.age -= 1
      }
    }
  })

  
  export const { setValue,reefresh,addunit,delete_ } = counterSlice.actions
export const { inc, dec } = anotherSlice.actions

