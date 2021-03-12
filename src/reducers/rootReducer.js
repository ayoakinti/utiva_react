import { combineReducers } from "redux";

import dashboardReducer from "./modules/dashboardReducer";

const rootReducer = combineReducers({
  dashboard: dashboardReducer,
});

export default rootReducer;
