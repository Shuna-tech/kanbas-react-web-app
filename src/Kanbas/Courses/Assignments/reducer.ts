import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";
const initialState = {
  assignments: [],
};
const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    setAssignments: (state, action) => {
      state.assignments = action.payload;
    },
    addAssignment: (state, { payload: assignment }) => {
      // const lastDigit = assignment.course[assignment.course.length - 1];
      // const baseIdNumber = parseInt(lastDigit) * 100;
      // const relevantAssignments = state.assignments.filter(a => parseInt(a._id.substring(1)) >= baseIdNumber && parseInt(a._id.substring(1)) < baseIdNumber + 100);
      
      // const highestId = relevantAssignments.reduce((maxId, item) => {
      //   const numericPart = parseInt(item._id.substring(1)); // Assumes IDs are in the format "A###"
      //   return numericPart > maxId ? numericPart : maxId;
      // }, baseIdNumber); 
      // const newId = "A" + (highestId + 1);
      const newAssignment: any = {
        _id: new Date().getTime().toString(),
        // _id: newId,
        title: assignment.title,
        course: assignment.course,
        available_date: assignment.available_date,
        due_date: assignment.due_date,
        points: assignment.points,
        description: assignment.description
      };
      state.assignments = [...state.assignments, newAssignment] as any;
    },
    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter(
        (a: any) => a._id !== assignmentId);
    },
    updateAssignment: (state, { payload: assignment }) => {
      state.assignments = state.assignments.map((a: any) =>
        a._id === assignment._id ? assignment : a //creating a new object instead of modifying the existing state
      ) as any;
    },
    editAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.map((a: any) =>
        a._id === assignmentId ? { ...a, editing: true } : a
      ) as any;
    },
  },
});
export const { setAssignments, addAssignment, deleteAssignment, updateAssignment, editAssignment } =
assignmentsSlice.actions;
export default assignmentsSlice.reducer;
