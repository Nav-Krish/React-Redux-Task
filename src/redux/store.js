import cartReducer from "./reducers";
import { legacy_createStore as createStore} from 'redux'
const store = createStore(cartReducer);



export default store;