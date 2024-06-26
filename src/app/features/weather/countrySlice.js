import {createSlice} from "@reduxjs/toolkit";

const countrySlice = createSlice({
  name:"country",
  initialState:{name:"India", code:"IN", capital:"New Delhi"},
  reducers:{
    setCountry(state, action){
      return action.payload;
    }
  }
})

export default countrySlice;