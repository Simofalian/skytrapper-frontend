import { combineReducers } from "redux";
import blogReducer from "./blogs/blogReducer";
import userReducer from "./users/userReducer";
const rootReducer = combineReducers({ Blogs: blogReducer, Users: userReducer });

export default rootReducer;
