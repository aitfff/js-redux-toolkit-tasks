import omit from "lodash/omit";
import { legacy_createStore as createStore } from "redux";

// BEGIN (write your solution here)
import { ADD_TASK, REMOVE_TASK } from "./actions.js";

const reducer = (state = {}, action) => {
    switch (action.type) {
      case ADD_TASK: { 
        const { task } = action.payload;
        return {
          ...state,
          [task.id]: task,
        };
      }
      case REMOVE_TASK: { 
        const { id } = action.payload;
        return omit(state, id);
      }
      default:
        return state;
    }
  };

  const generateStore = (initialState = {}) => {
    return createStore(reducer, initialState);
  };
  
  export default generateStore;
// END
