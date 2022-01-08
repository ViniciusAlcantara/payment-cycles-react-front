import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { reducer as toastrReducer } from "react-redux-toastr";

import billingCycleReducers from "../billingCycle/billingCycleReducers";
import tabReducers from "../common/tab/tabReducers";
import dashboardReducers from "../dashboard/dashboardReducers";
import authReducer from "../auth/authReducer";

const rootReducer = combineReducers({
    dashboard: dashboardReducers,
    tab: tabReducers,
    billingCycle: billingCycleReducers,
    form: formReducer,
    toastr: toastrReducer,
    auth: authReducer
});

export default rootReducer