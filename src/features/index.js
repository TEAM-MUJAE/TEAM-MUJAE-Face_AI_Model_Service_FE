import { combineReducers } from "redux";
import firstCompareReducer from "./firstCompareSlice"
import secondCompareReducer from "./secondCompareSlice";
import thirdCompareReducer from "./thirdCompareSlice";
import similarityDataReducer from "./similarityDataSlice";
import similarityRankReducer from "./similarityDetailSlice";
import signupReducer from "./signUpSlice";
import loginReducer from "./loginSlice";
import memberDataReducer from "./memberDataSlice";


const rootReducer = combineReducers({
    firstCompare: firstCompareReducer,
    secondCompare: secondCompareReducer,
    thirdCompare: thirdCompareReducer,
    similarityData: similarityDataReducer,
    similarityRank: similarityRankReducer,
    memberData: memberDataReducer,
    signup: signupReducer,
    login: loginReducer
});

export default rootReducer;