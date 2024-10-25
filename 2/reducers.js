import _ from "lodash";
import { combineReducers } from "redux";

const comments = (state = {}, action) => {
  // BEGIN (write your solution here)
  switch (action.type) {
    case "TASK_COMMENT_ADD": {
      const { comment } = action.payload;
      return {
        ...state,
        [comment.id]: comment, 
      };
    }
    case "TASK_COMMENT_REMOVE": {
      const { id } = action.payload;
      const newState = { ...state };
      delete newState[id];
      return newState;
    }
    case "TASK_REMOVE": {
      const { id } = action.payload;
      const newState = { ...state };
      _.forEach(newState, (comment) => {
        if (comment.taskId === id) {
          delete newState[comment.id];
        }
      });
      return newState;
    }
    default:
      return state; 
  }
  // END
};

const tasks = (state = {}, action) => {
  // BEGIN (write your solution here)
  switch (action.type) {
    case "TASK_ADD": {
      const { task } = action.payload;
      return {
        ...state,
        [task.id]: task, 
      };
    }
    case "TASK_REMOVE": {
      const { id } = action.payload;
      const newState = { ...state };
      delete newState[id];
      return newState;
    }
    default:
      return state;
  }
  // END
};

export default combineReducers({
  comments,
  tasks,
});
