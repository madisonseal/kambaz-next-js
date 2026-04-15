import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "@/app/(kambaz)/database";

const initialState = {
    assignments: assignments,
}
const assignmentSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, {payload: assignment}) => {
            state.assignments = [...state.assignments, assignment] as any;
        },
        deleteAssignment: (state, {payload: assignmentId}) => {
            state.assignments = state.assignments.filter(
                (a: any) => a._id !== assignmentId
            );
        },
        updateAssignment: (state, { payload: assignment }) => {
            state.assignments = state.assignments.map((a: any) =>
              a._id === assignment._id ? assignment : a
            ) as any;
          },
    },
});
     

    export const { addAssignment, deleteAssignment, updateAssignment } =
    assignmentSlice.actions;
    export default assignmentSlice.reducer;


        

