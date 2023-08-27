import { createSlice } from "@reduxjs/toolkit";

export const projectSlice = createSlice({
  name: "projects",
  initialState: [
    { projectName: "Project01", tasks: ["task1", "task2", "task3"] },
    { projectName: "Project02", tasks: ["task1", "task2"] },
    { projectName: "Project03", tasks: ["task3"] },
  ],
  reducers: {},
});

export default projectSlice.reducer;
