import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import assignmentsReducer from "./Courses/Assignments/reducer";
import accountReducer from "./Account/reducer";
import quizzesReducer from "./Courses/Quizzes/reducer";

const store = configureStore({
  reducer: {
    modules: modulesReducer,
    assignments: assignmentsReducer,
    account: accountReducer,
    quizzes: quizzesReducer,
  },
});
export default store;
