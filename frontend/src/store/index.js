import { createStore,compose,applyMiddleware,combineReducers } from "redux";
import ThunkMiddleware from "redux-thunk";

import { adminReducer} from "./reducers/adminReducer";
import { dashCategoryReducer} from "./reducers/dashCategoryReducer";
import { dashTagReducer} from "./reducers/dashTagReducer";
import { articalReducer } from "./reducers/articalReducer";

const rootReducer = combineReducers({
  adminReducer,
  dashboradCategory : dashCategoryReducer,
  dashboradTag : dashTagReducer,
  dashboradArtical:articalReducer
});

const middleware = [ThunkMiddleware];

const store = createStore(rootReducer,compose(applyMiddleware(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default store;