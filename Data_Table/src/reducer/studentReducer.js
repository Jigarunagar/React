export const studentReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "UPDATE":
      return state.map((student) =>
        student.id === action.payload.id ? action.payload : student
      );
    case "DELETE":
      return state.filter((student) => student.id !== action.payload);
    case "LOAD":
      return action.payload;
    default:
      return state;
  }
};
