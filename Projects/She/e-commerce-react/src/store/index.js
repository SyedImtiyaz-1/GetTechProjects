import {configureStore} from "@reduxjs/toolkit"
import itemSlice from "./itemSlice";
import fetchStatus from "./fetchStatus";
import bagSlice from "./bagSlice copy";

const myntraStore=configureStore({
  reducer:{
    items:itemSlice.reducer,
    fetchStatus:fetchStatus.reducer,
    bag:bagSlice.reducer
  }
})
export default myntraStore;