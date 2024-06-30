import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";
const initialState = {
  assignments: assignments,
};
const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, { payload: assignment }) => {
      // Extract the last digit of the course ID to form the base of the assignment ID
      const lastDigit = assignment.course[assignment.course.length - 1];
      const baseIdNumber = parseInt(lastDigit) * 100; // Creates a base like 300 for RS103
      
      // Filter assignments of the same series based on the baseIdNumber
      const relevantAssignments = state.assignments.filter(a => parseInt(a._id.substring(1)) >= baseIdNumber && parseInt(a._id.substring(1)) < baseIdNumber + 100);

      // Find the highest ID in the series or default to starting value
      const highestId = relevantAssignments.reduce((maxId, item) => {
        const numericPart = parseInt(item._id.substring(1)); // Assumes IDs are in the format "A###"
        return numericPart > maxId ? numericPart : maxId;
      }, baseIdNumber); // Start from baseIdNumber

      const newId = "A" + (highestId + 1);
      
      const newAssignment: any = {
        // _id: new Date().getTime().toString(),
        _id: newId,
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
        a._id === assignment._id ? {...a, ...assignment} : a //creating a new object instead of modifying the existing state
      ) as any;
    },
    editAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.map((a: any) =>
        a._id === assignmentId ? { ...a, editing: true } : a
      ) as any;
    },
  },
});
export const { addAssignment, deleteAssignment, updateAssignment, editAssignment } =
assignmentsSlice.actions;
export default assignmentsSlice.reducer;
